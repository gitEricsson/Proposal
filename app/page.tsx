'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useRouter } from 'next/navigation';
import ScatteredPhotos from '@/components/scattered-photos';
import AudioPlayer from '@/components/audio-player';

export default function ConfessionPage() {
  const [agreed, setAgreed] = useState(false);
  const [showConfession, setShowConfession] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setShowConfession(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleYes = () => {
    const audio = new Audio('/audio/pop.mp3');
    audio.play().catch(() => {});

    router.push('/calendar');
  };

  const handleThinking = () => {
    router.push('/thinking');
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-purple-800">
      <ScatteredPhotos />
      <AudioPlayer src="/audio/i-wanna-be-yours.mp3" fallback={false} />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
          // Only access window on the client
          const getRandomPosition = () => {
            if (typeof window !== 'undefined') {
              return {
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              };
            }
            // Fallback for SSR
            return { x: Math.random() * 1200, y: Math.random() * 800 };
          };
          const { x, y } = getRandomPosition();
          return (
            <motion.div
              key={i}
              className="absolute"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x,
                y,
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 4,
              }}
            >
              <Sparkles className="text-pink-300 w-4 h-4" />
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto text-center bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <Heart
              className="absolute top-0 left-0 text-pink-400 w-8 h-8 animate-bounce z-20"
              fill="currentColor"
            />
            <Sparkles className="absolute top-0 right-0 text-pink-400 w-8 h-8 animate-bounce z-20" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
            className="mb-6 space-y-6 mt-6"
          >
            <motion.h1
              className="text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 tracking-wide mb-2"
              style={{ fontFamily: 'Lavishly Yours, cursive' }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              May I be yours?
            </motion.h1>
            <div className="w-8 h-8 text-pink-400 mx-auto mb-4 text-3xl">
              💘
            </div>
          </motion.div>

          <AnimatePresence>
            {showConfession && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div
                  className="text-lg md:text-xl text-pink-100 leading-relaxed space-y-6"
                  style={{ fontFamily: 'Bilbo, cursive' }}
                >
                  <p className="text-2xl">
                    I keep thinking about how this all started — just small
                    conversations, and that first message back in May 16. I
                    never imagined those little chats would become calls, then
                    everyday calls, and now... you’ve become someone I can't go
                    a day without thinking about.
                  </p>
                  <p className="text-2xl">
                    Getting to know you has been... different. The more we
                    talked, the more I realized how much depth there was to you.
                    You're ambitious, beautiful, spiritually grounded,
                    intelligent, graceful, diligent, chic, kind, considerate,
                    and genuinely sweet — and that list barely scratches the
                    surface. But it’s not just any one of those things that drew
                    me in. It’s the combination of all of them, the balance of
                    who you are, the way each part of you complements the other,
                    that I honestly don’t think I could find anywhere else.
                  </p>
                  <p className="text-2xl">
                    Over time, you've quietly become the first person I think
                    about when I wake up, the first voice I want to hear when I
                    wake up, the one I want to talk to when anything happens —
                    whether it’s good, bad, or completely random. When I’m
                    making decisions, you cross my mind. When I’m simply going
                    through my day, you do too. You’ve become my safe space
                    without even trying.
                  </p>
                  <p className="text-2xl">
                    What I want, is to be with you. If I'm going to keep living,
                    I want to do it with you. You and Nobody else - because I
                    really like you, more than I can fully explain.
                  </p>
                  <p className="text-2xl">
                    I don’t pretend to deserve you, Ashley, but I could damn
                    near spend the next couple of years trying.
                  </p>
                  <p className="text-2xl">
                    So, this might not be your typical K-drama confession,
                    but...
                  </p>
                  <div
                    className="text-3xl font-bold text-pink-300"
                    style={{ fontFamily: 'Bilbo Swash Caps, cursive' }}
                  >
                    💕 May I be your Boyfriend? 💕
                  </div>{' '}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="flex items-center space-x-3 justify-center mb-8"
                >
                  <Checkbox
                    id="terms"
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked === true)}
                    className="border-pink-300 data-[state=checked]:bg-pink-500"
                  />
                  <label
                    htmlFor="terms"
                    className="text-pink-200 text-lg cursor-pointer"
                    style={{ fontFamily: 'Bilbo, cursive' }}
                  >
                    I agree to be spoiled, cherished, and protected from raw
                    onions and roaches.
                  </label>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  style={{ fontFamily: 'Bilbo Swash Caps, cursive' }}
                >
                  <Button
                    onClick={handleYes}
                    disabled={!agreed}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 text-xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Yes! 💖
                  </Button>
                  <Button
                    onClick={handleThinking}
                    variant="outline"
                    className="border-pink-300 text-pink-300 hover:bg-pink-300 hover:text-purple-900 px-8 py-3 text-xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 bg-transparent"
                  >
                    Let me think 🫣
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative mt-12"
          >
            <Sparkles
              className="absolute bottom-0 left-0 text-pink-400 w-8 h-8 animate-bounce z-20"
              fill="currentColor"
            />
            <Heart className="absolute bottom-0 right-0 text-pink-400 w-8 h-8 animate-bounce z-20" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
