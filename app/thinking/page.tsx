'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import ScatteredPhotos from '@/components/scattered-photos';
import AudioPlayer from '@/components/audio-player';

export default function ThinkingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-purple-800">
      <ScatteredPhotos />
      <AudioPlayer src="/audio/olufunmi.mp3" fallback={false} />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl"
        >
          {/* <motion.div
            animate={{
              rotate: [0, -10, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
            className="mb-8"
          > */}
          <div className="flex items-center justify-center mb-4">
            <img
              src="/meme.jpg"
              alt=""
              className="w-64 h-64 object-cover rounded-xl border border-white/20 shadow"
            />
          </div>
          {/* </motion.div> */}

          {/* <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Bilbo, cursive' }}
          >
            For this Nnewi?!
          </motion.h1> */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4 mb-8"
          >
            <p
              className="text-2xl text-pink-200"
              style={{ fontFamily: 'Lovers Quarrel, cursive' }}
            >
              But we have such good chemistry... 🥺
            </p>

            <motion.p
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="text-3xl text-pink-300 font-bold"
              style={{ fontFamily: 'Lovers Quarrel, cursive' }}
            >
              Come on, give us a chance? 💕
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            style={{ fontFamily: 'Bilbo, cursive' }}
          >
            <Button
              onClick={() => router.push('/')}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 text-xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Okay, let me reconsider... 💭
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
