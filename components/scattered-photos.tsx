'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const photos = [
  {
    id: 1,
    src: '/bruno-mars.jpg?height=200&width=200',
    rotation: 15,
    x: '10%',
    y: '20%',
  },
  {
    id: 2,
    src: '/spaghetti.jpg?height=180&width=180',
    rotation: -12,
    x: '80%',
    y: '15%',
  },
  {
    id: 3,
    src: '/chapman.png?height=220&width=220',
    rotation: 8,
    x: '15%',
    y: '70%',
  },
  {
    id: 4,
    src: '/ed-sheeran.jpg?height=190&width=190',
    rotation: -20,
    x: '75%',
    y: '65%',
  },
  {
    id: 5,
    src: '/jam-donut.jpg?height=160&width=160',
    rotation: 25,
    x: '5%',
    y: '45%',
  },
  {
    id: 6,
    src: '/love-island.jpg?height=200&width=200',
    rotation: -8,
    x: '85%',
    y: '40%',
  },
  {
    id: 7,
    src: '/kdramas.jpg?height=170&width=170',
    rotation: 18,
    x: '25%',
    y: '10%',
  },
  {
    id: 8,
    src: '/obongjayar.jpg?height=210&width=210',
    rotation: -15,
    x: '60%',
    y: '80%',
  },
  {
    id: 9,
    src: '/pancakes.jpg?height=180&width=180',
    rotation: 12,
    x: '40%',
    y: '25%',
  },
  {
    id: 10,
    src: '/red-velvet-cake.jpg?height=190&width=190',
    rotation: -10,
    x: '70%',
    y: '30%',
  },
  {
    id: 11,
    src: '/ogbono-soup.jpg?height=160&width=160',
    rotation: 22,
    x: '30%',
    y: '60%',
  },
  {
    id: 12,
    src: '/samosa.jpg?height=200&width=200',
    rotation: -18,
    x: '50%',
    y: '85%',
  },
  {
    id: 13,
    src: '/hair.jpeg?height=170&width=170',
    rotation: 14,
    x: '90%',
    y: '70%',
  },
  {
    id: 14,
    src: '/rema.jpg?height=200&width=200',
    rotation: -25,
    x: '20%',
    y: '35%',
  },
  {
    id: 15,
    src: '/catfish-peppersoup.jpg?height=190&width=190',
    rotation: 16,
    x: '65%',
    y: '55%',
  },
  {
    id: 16,
    src: '/bible.jpg?height=160&width=160',
    rotation: -12,
    x: '35%',
    y: '80%',
  },
  {
    id: 17,
    src: '/popcorn.jpg?height=200&width=200',
    rotation: 20,
    x: '80%',
    y: '85%',
  },
  {
    id: 18,
    src: '/design.png?height=170&width=170',
    rotation: -16,
    x: '10%',
    y: '60%',
  },
  {
    id: 19,
    src: '/germany.jpg?height=180&width=180',
    rotation: 10,
    x: '45%',
    y: '40%',
  },
  {
    id: 20,
    src: '/twitter-tiktok.jpg?height=190&width=190',
    rotation: -14,
    x: '55%',
    y: '20%',
  },
];

export default function ScatteredPhotos() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {photos.map((photo, index) => (
        <motion.div
          key={photo.id}
          className="absolute opacity-20 hover:opacity-30 transition-opacity duration-300"
          style={{
            left: photo.x,
            top: photo.y,
            transform: `rotate(${photo.rotation}deg)`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{
            delay: index * 0.1,
            duration: 0.8,
            ease: 'easeOut',
          }}
          whileHover={{
            scale: 1.05,
            opacity: 0.4,
            transition: { duration: 0.2 },
          }}
        >
          <div className="relative">
            <Image
              src={photo.src || '/placeholder.svg'}
              alt=""
              width={200}
              height={200}
              className="rounded-lg shadow-2xl border-4 border-white/20 filter saturate-75"
              style={{
                width: 'auto',
                height: 'auto',
                maxWidth: '200px',
                maxHeight: '200px',
              }}
            />
            <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
