'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Popcorn,
  BookOpen,
  Utensils,
  Mail,
  CookingPot,
  CakeSlice,
  Soup,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import ScatteredPhotos from '@/components/scattered-photos';
import AudioPlayer from '@/components/audio-player';

const dateOptions = [
  {
    id: 'pastry',
    title: 'Pastry Café',
    location: '@ Chocolat Royal',
    description:
      'Jam donuts, Pancakes, Red velvet cake, e.t.c. Just as you like 😌',
    icon: CakeSlice,
    emoji: '☕',
    color: 'from-gray-500 to-gray-600',
    image: '/chocolat-royal.jpg',
    gradient: 'linear-gradient(to right,  #6e5849, #bfa074)',
  },
  {
    id: 'restaurant',
    title: 'Fine Dining',
    location: '@ Cactus Restaurant',
    description: 'Pasta with Chapman? Hold my beer. Mafo, no raw tomatoes',
    icon: Utensils,
    emoji: '🍽️',
    color: 'from-yellow-500 to-orange-600',
    image: '/cactus.jpg',
    gradient: 'linear-gradient(to right, #cc9966, #66aa88)',
  },
  {
    id: 'local',
    title: 'Local Dish & Art',
    location: '@ Nok by Alara',
    description:
      'No Egusi, Bitter Leaf, or Gbegiri—just delicious local dishes you’ll actually love, surrounded by stunning art (I for one 😌) and a beautiful aesthetic.',
    icon: CookingPot,
    emoji: '🥘',
    color: 'from-orange-700 to-yellow-600',
    image: '/nok.jpg',
    gradient: 'linear-gradient(to right, #b86b2b, #f7c873)',
  },
  {
    id: 'korean',
    title: 'Korean Cuisine',
    location: '@ Huahan Korean Restaurant Oriental',
    description:
      'Let’s recreate your favorite K-drama scenes—awkward glances, accidental hand-holding, and all. Korean food, Lagos edition.🍲',
    icon: Soup,
    emoji: '🍜',
    color: 'from-pink-500 to-red-700',
    image: '/huahan.jpeg',
    gradient: 'linear-gradient(to right, #e75480, #b22234)',
  },
  {
    id: 'cinema',
    title: 'Cinema',
    location: '@ EbonyLife Cinema',
    description:
      'No Love Island at the cinema tsktsk. Superman?—Romance ✅, Comedy ✅, Thriller ✅',
    icon: Popcorn,
    emoji: '🎬',
    color: 'from-red-500 to-pink-600',
    image: '/ebonylife.jpeg',
    gradient: 'linear-gradient(to right, #3a2c2c, #7b263a)',
  },
  {
    id: 'library',
    title: 'Library Café',
    location: '@ Jazzhole',
    description:
      'Books, Jazz (any Jazzy EdSheeran or Bruno Mars track?), and vibes',
    icon: BookOpen,
    emoji: '📚',
    color: 'from-green-500 to-teal-600',
    image: '/jazz-hole.png',
    gradient: 'linear-gradient(to right, #6e5849, #a89f94)',
  },
];

export default function DateChoicePage() {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEnvelope, setShowEnvelope] = useState(false);
  const router = useRouter();

  const handleChoiceSelect = async (choiceId: string) => {
    setSelectedChoice(choiceId);
    setShowEnvelope(true);

    // Play selection sound effect
    const audio = new Audio('/audio/pop.mp3');
    audio.play().catch(() => {
      // Ignore audio errors for missing files
    });

    // Simulate email sending
    setTimeout(async () => {
      setIsSubmitting(true);

      try {
        const selectedDate = localStorage.getItem('selectedDate');
        const choice = dateOptions.find((opt) => opt.id === choiceId);

        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            selectedDate,
            dateChoice: choice?.title,
            description: choice?.description,
          }),
        });

        if (response.ok) {
          router.push('/appreciation');
        } else {
          console.error('Failed to send email');
        }
      } catch (error) {
        console.error('Error sending email:', error);
      } finally {
        setIsSubmitting(false);
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-purple-800">
      <ScatteredPhotos />
      <AudioPlayer src="/audio/chop-my-money.mp3" fallback={false} />

      {/* Flying envelope animation */}
      <AnimatePresence>
        {showEnvelope && (
          <motion.div
            initial={{ x: '50%', y: '50%', scale: 0, rotate: 0 }}
            animate={{
              x: '200%',
              y: '-100%',
              scale: [0, 1, 0.8],
              rotate: [0, 360, 720],
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="fixed top-1/2 left-1/2 z-50 pointer-events-none"
          >
            <Mail className="w-12 h-12 text-pink-300" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl"
        >
          <div className="flex items-center justify-between mb-8">
            <Button
              onClick={() => router.push('/calendar')}
              variant="ghost"
              size="sm"
              className="text-pink-300  text-lg hover:text-white hover:bg-white/10"
              disabled={isSubmitting}
              style={{ fontFamily: 'Bilbo, cursive' }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Calendar
            </Button>
          </div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="text-center mb-12"
          >
            <h1
              className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 mb-4 tracking-wide"
              style={{ fontFamily: 'Lavishly Yours, cursive' }}
            >
              Pick Our First Date Spot
            </h1>
            <p
              className="text-2xl text-pink-200"
              style={{ fontFamily: 'Bilbo, cursive' }}
            >
              Where should we create our first magical memory? 💃🏾
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
            {dateOptions.map((option, index) => {
              const Icon = option.icon;
              const isSelected = selectedChoice === option.id;
              // Alternate tilt direction for visual interest
              const tilt = index % 2 === 0 ? -4 : 4;

              return (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <motion.div
                    className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 cursor-pointer transform transition-all duration-300 min-w-10 hover:scale-105 hover:shadow-2xl ${
                      isSelected ? 'ring-4 ring-pink-400 shadow-2xl' : ''
                    }`}
                    onClick={() =>
                      !isSubmitting && handleChoiceSelect(option.id)
                    }
                    initial={{ rotate: tilt }}
                    animate={{ rotate: tilt }}
                    whileHover={{
                      y: -5,
                      rotate: 0,
                      background: option.gradient,
                    }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      background: isSelected
                        ? `linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(147, 51, 234, 0.3))`
                        : undefined,
                    }}
                  >
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.5, 0] }}
                        transition={{
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-2xl"
                      />
                    )}

                    <div className="relative z-10 text-center text-white">
                      <div
                        className="mb-4"
                        style={{ fontFamily: 'Lovers Quarrel, cursive' }}
                      >
                        <img
                          src={option.image}
                          alt={option.title}
                          className="w-full h-64 object-cover rounded-xl border border-white/20 shadow"
                        />
                      </div>

                      <h3
                        className="text-xl font-bold text-white mb-2"
                        style={{ fontFamily: 'Bilbo Swash Caps, cursive' }}
                      >
                        {option.emoji} {option.title}
                      </h3>
                      <h4
                        className="text-lg font-bold text-white mb-2"
                        style={{ fontFamily: 'Bilbo, cursive' }}
                      >
                        {option.location}
                      </h4>

                      <p
                        className="text-pink-200 text-sm leading-relaxed"
                        style={{ fontFamily: 'Lovers Quarrel, cursive' }}
                      >
                        {option.description}
                      </p>

                      <div className="flex items-center justify-center mt-2">
                        <div
                          className={`p-2 rounded-full bg-gradient-to-r ${option.color} items-center justify-center`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute top-4 right-4 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center"
                        >
                          <span className="text-white text-sm">✓</span>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {isSubmitting && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 text-pink-300">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear',
                  }}
                  className="w-6 h-6 border-2 border-pink-300 border-t-transparent rounded-full"
                />
                <span
                  className="text-lg"
                  style={{ fontFamily: 'Lovers Quarrel, cursive' }}
                >
                  Sending your choice... 💌
                </span>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
