'use client';

import { useState } from 'react';

/*
  FOTOS HINZUFÜGEN:
  Lege deine Fotos in /public/images/gallery/ ab und trage die Dateinamen unten ein.
  Format: { src: '/images/gallery/foto1.jpg', alt: 'Beschreibung' }
*/
const images = [
  { src: '/images/gallery/pd_1.jpg', alt: 'Pole Dance Polerinna' },
  { src: '/images/gallery/pd_gold_1.JPG', alt: 'Polerinna GOLD' },
  { src: '/images/gallery/pd_2.png', alt: 'Pole Dance Polerinna' },
  { src: '/images/gallery/pd_gold_2.JPG', alt: 'Polerinna GOLD' },
  { src: '/images/gallery/pd_3.jpg', alt: 'Pole Dance Polerinna' },
  { src: '/images/gallery/pd_gold_3.JPG', alt: 'Polerinna GOLD' },
  { src: '/images/gallery/pd_4.jpg', alt: 'Pole Dance Polerinna' },
  { src: '/images/gallery/pd_gold_4.JPG', alt: 'Polerinna GOLD' },
  { src: '/images/gallery/pd_5.jpg', alt: 'Pole Dance Polerinna' },
  { src: '/images/gallery/pd_gold_5.JPG', alt: 'Polerinna GOLD' },
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
