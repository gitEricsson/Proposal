'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import ScatteredPhotos from '@/components/scattered-photos';
import AudioPlayer from '@/components/audio-player';
import Confetti from '@/components/confetti';

export default function AppreciationPage() {
  const [showMessage, setShowMessage] = useState(false);
  const [hearts, setHearts] = useState<Array<{ x: number; y: number }>>([]);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Set heart positions after component mounts (client-side only)
    const heartPositions = [...Array(15)].map(() => ({
      x:
        Math.random() *
        (typeof window !== 'undefined' ? window.innerWidth : 1200),
      y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 50,
    }));
    setHearts(heartPositions);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-purple-800">
      <ScatteredPhotos />
      <AudioPlayer src="/audio/perfect.mp3" fallback={false} />
      <Confetti />

      {/* Floating hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {hearts.map((heart, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: heart.x,
              y: heart.y,
              scale: 0,
            }}
            animate={{
              y: -100,
              scale: [0, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
              ease: 'easeOut',
            }}
          >
            <Heart className="text-pink-400 w-8 h-8" fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Twinkling stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          >
            <Sparkles className="text-yellow-300 w-4 h-4" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
          className="max-w-3xl mx-auto text-center bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
            className="mb-8"
          >
            <motion.div
              className="flex items-center justify-center"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              }}
            >
              <img
                src="\us.jpg"
                alt="us"
                className="w-64 h-64 object-cover rounded-xl border border-white/20 shadow"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4 mt-10"
              style={{ fontFamily: 'Bilbo Swash Caps, cursive' }}
            >
              You Chose Us! 🎉
            </motion.h1>
          </motion.div>

          {showMessage && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <div
                className="text-lg md:text-2xl text-pink-100 leading-relaxed space-y-6"
                style={{ fontFamily: 'Bilbo Swash Caps,  cursive' }}
              >
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="text-3xl"
                >
                  💖 Still can’t believe you said yes… even though I like
                  Egusi/Bitterleaf soup. Lol.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 }}
                  className="text-3xl"
                >
                  But seriously — I want you to know that I see you. All of you.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 }}
                  className="text-3xl"
                >
                  Your strength, your softness. Your independence, your
                  boundaries. Your faith. Your laughter. Your mind.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 }}
                  className="text-3xl"
                >
                  You’re not just someone I like. You’re someone I deeply
                  respect.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 }}
                  className="text-3xl"
                >
                  And I don’t take any of this for granted. I feel responsible —
                  to protect what we now share. To show up fully. To be someone
                  you’re proud to call yours.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.9, type: 'spring', stiffness: 200 }}
                  className="text-4xl font-bold text-pink-300"
                >
                  This isn’t a fairytale. But I’ll be damned if I don’t make
                  this worth it — for you, for us.❤️‍🔥
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
                className="mt-12"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'easeInOut',
                  }}
                  className="text-6xl mb-4"
                >
                  💕
                </motion.div>
                <p
                  className="text-pink-300 text-xl"
                  style={{ fontFamily: 'Bilbo,  cursive' }}
                >
                  Check your mail—spam too—for the date details! 📧
                </p>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
