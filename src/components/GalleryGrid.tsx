'use client';

import { useState } from 'react';

/*
  FOTOS HINZUFÜGEN:
  Lege deine Fotos in /public/images/gallery/ ab und trage die Dateinamen unten ein.
  Format: { src: '/images/gallery/foto1.jpg', alt: 'Beschreibung' }
*/
const images = [
  { src: '/images/gallery/photo-1.jpg', alt: 'Pole Dance' },
  { src: '/images/gallery/photo-2.jpg', alt: 'Aerial Hoop' },
  { src: '/images/gallery/photo-3.jpg', alt: 'Studio Polerinna' },
  { src: '/images/gallery/photo-4.jpg', alt: 'Kurs' },
  { src: '/images/gallery/photo-5.jpg', alt: 'Performance' },
  { src: '/images/gallery/photo-6.jpg', alt: 'Training' },
  { src: '/images/gallery/photo-7.jpg', alt: 'Polerinna GOLD' },
  { src: '/images/gallery/photo-8.jpg', alt: 'Community' },
  { src: '/images/gallery/photo-9.jpg', alt: 'Flexibilität' },
];

export default function GalleryGrid() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="break-inside-avoid cursor-pointer overflow-hidden group bg-neutral-100"
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.style.display = 'none';
                  el.parentElement!.innerHTML = `<div class="aspect-square flex items-center justify-center text-neutral-300 text-xs tracking-wider p-4">FOTO ${i + 1}</div>`;
                }}
              />
            </div>
          ))}
        </div>

        <p className="text-center text-neutral-400 text-sm mt-8">
          Fotos in <code className="bg-neutral-100 px-1">/public/images/gallery/</code> ablegen
        </p>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl leading-none"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <img
            src={lightbox}
            alt=""
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
