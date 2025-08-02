'use client';

import { useEffect, useRef } from 'react';

interface AudioPlayerProps {
  src: string;
  volume?: number;
  loop?: boolean;
  fallback?: boolean;
}

export default function AudioPlayer({
  src,
  volume = 0.3,
  loop = true,
  fallback = true,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      audio.loop = loop;

      // Handle audio loading errors
      const handleError = () => {
        console.warn(`Audio file not found: ${src}`);
        if (!fallback) {
          // Hide the audio element if fallback is disabled
          audio.style.display = 'none';
        }
      };

      audio.addEventListener('error', handleError);

      // Try to play audio automatically on load
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // If autoplay is blocked, try again on first user interaction
          const playOnInteraction = () => {
            audio.play().catch(() => {
              // Ignore play errors for missing files
            });
            document.removeEventListener('click', playOnInteraction);
            document.removeEventListener('touchstart', playOnInteraction);
          };

          document.addEventListener('click', playOnInteraction);
          document.addEventListener('touchstart', playOnInteraction);
        });
      }

      return () => {
        audio.removeEventListener('error', handleError);
        if (audio) {
          audio.pause();
        }
      };
    }
  }, [src, volume, loop, fallback]);

  return (
    <audio ref={audioRef} preload="auto" className="hidden" autoPlay>
      <source src={src} type="audio/mpeg" />
    </audio>
  );
}
