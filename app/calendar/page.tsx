'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import ScatteredPhotos from '@/components/scattered-photos';
import AudioPlayer from '@/components/audio-player';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// Add month (0-indexed) to each unavailable date
const unavailableDates = [
  { date: 4, month: 7, reason: 'Coorporate Day 💼' },
  { date: 5, month: 7, reason: 'Y2K Day 👖' },
  { date: 6, month: 7, reason: 'Costume Day 🎭' },
  { date: 7, month: 7, reason: 'Jersey Day 🎽' },
  { date: 8, month: 7, reason: 'Cultural Day 🎎' },
  { date: 9, month: 7, reason: 'Owambe Day 💃' },
  { date: 18, month: 7, reason: 'Your DSP & My Maintenance Exam 🫠' },
  {
    date: 23,
    month: 7,
    reason:
      "BUS Exam 📝+ Lubrication (mine) Exam 🤧 + Alhaja's Paper (Digital Computer Design)📃",
  },
  { date: 25, month: 7, reason: "Balogun's Paper (Machines) 📃" },
  {
    date: 26,
    month: 7,
    reason: "Rigid Bodies (mine) Exam 🫠 + Alayande's Paper (High Voltage) 📃",
  },
  { date: 27, month: 7, reason: 'Your Reliability Exam 📝' },
  { date: 30, month: 7, reason: 'Contract Exam 📝' },
];

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [hoveredDate, setHoveredDate] = useState<number | null>(null);
  const router = useRouter();

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const isUnavailable = (date: number) => {
    return unavailableDates.some(
      (d) => d.date === date && d.month === currentMonth
    );
  };

  const getUnavailableReason = (date: number) => {
    return unavailableDates.find(
      (d) => d.date === date && d.month === currentMonth
    )?.reason;
  };

  const handleDateSelect = (date: number) => {
    if (!isUnavailable(date)) {
      setSelectedDate(date);

      // Play selection sound effect
      const audio = new Audio('/audio/pop.mp3');
      audio.play().catch(() => {});
    }
  };

  const handleContinue = () => {
    if (selectedDate) {
    const audio = new Audio('/audio/pop.mp3');
    audio.play().catch(() => {
    });
    
      localStorage.setItem(
        'selectedDate',
        `${months[currentMonth]} ${selectedDate}, ${currentYear}`
      );
      router.push('/date-choice');
    }
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-12"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const unavailable = isUnavailable(day);
      const selected = selectedDate === day;
      const hovered = hoveredDate === day;

      days.push(
        <motion.div
          key={day}
          style={{ fontFamily: 'Bilbo, cursive' }}
          className={`h-12 flex items-center justify-center rounded-lg cursor-pointer relative group ${
            unavailable
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : selected
              ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
              : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
          }`}
          whileHover={!unavailable ? { scale: 1.05 } : {}}
          whileTap={!unavailable ? { scale: 0.95 } : {}}
          onClick={() => handleDateSelect(day)}
          onMouseEnter={() => setHoveredDate(day)}
          onMouseLeave={() => setHoveredDate(null)}
        >
          {day}

          {/* Tooltip */}
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-full mb-2 transform -translate-x-1/2 bg-black/80 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap z-20"
            >
              {unavailable
                ? getUnavailableReason(day)
                : 'Perfect day to fall deeper for each other 😏'}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/80"></div>
            </motion.div>
          )}
        </motion.div>
      );
    }

    return days;
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-purple-800">
      <ScatteredPhotos />
      <AudioPlayer src="/audio/lady.mp3" fallback={false} />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl"
        >
          <div className="flex items-center justify-between mb-6">
            <Button
              onClick={() => router.push('/')}
              variant="ghost"
              size="sm"
              className="text-pink-300 hover:text-white hover:bg-white/10"
              style={{ fontFamily: 'Bilbo, cursive' }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Confession
            </Button>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <Calendar className=" w-6 h-6 text-pink-400 animate-bounce" />
            </motion.div>
          </div>

          <div className="space-y-4">
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 tracking-wide mb-8"
              style={{ fontFamily: 'Lavishly Yours, cursive' }}
            >
              Pick Our Special Day
              <p
                className="text-lg text-foreground/80 text-pink-300 mt-2"
                style={{ fontFamily: 'Bilbo, cursive' }}
              >
                When should we start this beautiful journey?
              </p>
            </motion.h1>
          </div>

          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-6">
            <Button
              onClick={() => {
                if (currentMonth === 0) {
                  setCurrentMonth(11);
                  setCurrentYear(currentYear - 1);
                } else {
                  setCurrentMonth(currentMonth - 1);
                }
              }}
              variant="ghost"
              size="sm"
              className="text-pink-300 hover:text-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <h2
              className="text-xl font-semibold text-white"
              style={{ fontFamily: 'Bilbo Swash Caps, cursive' }}
            >
              {months[currentMonth]} {currentYear}
            </h2>

            <Button
              onClick={() => {
                if (currentMonth === 11) {
                  setCurrentMonth(0);
                  setCurrentYear(currentYear + 1);
                } else {
                  setCurrentMonth(currentMonth + 1);
                }
              }}
              variant="ghost"
              size="sm"
              className="text-pink-300 hover:text-white"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Days of Week Header */}
          <div
            className="grid grid-cols-7 gap-1 mb-2"
            style={{ fontFamily: 'Bilbo Swash, cursive' }}
          >
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="h-8 flex items-center justify-center text-pink-300 text-sm font-medium"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 mb-8">{renderCalendar()}</div>

          {selectedDate && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
              style={{ fontFamily: 'Bilbo Swash Caps, cursive' }}
            >
              <p className="text-pink-200 mb-4">
                Perfect choice!Our special day:
                <motion.span
                  className="text-2xl block mt-2 text-purple-300"
                  // style={{ fontFamily: 'Lovers Quarrel, cursive' }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  {months[currentMonth]} {selectedDate}, {currentYear}
                </motion.span>
              </p>
              <Button
                onClick={handleContinue}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                style={{ fontFamily: 'Bilbo, cursive' }}
              >
                Done Picking 💓
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
