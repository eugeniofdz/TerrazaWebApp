"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function PhotoGrid({ images }: { images: string[] }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState<number | null>(null);

  const openAt = (i: number) => {
    setIdx(i);
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
    setIdx(null);
  };

  const prev = () =>
    setIdx((i) => (i === null ? 0 : (i - 1 + images.length) % images.length));
  const next = () => setIdx((i) => (i === null ? 0 : (i + 1) % images.length));

  // Keyboard controls
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, images.length]);

  const hero = images[0];
  const side = images.slice(1, 5);

  return (
    <>
      {/* Grid */}
      <div className="grid gap-2 sm:gap-3 lg:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Left big photo */}
        <button
          type="button"
          onClick={() => openAt(0)}
          className="overflow-hidden sm:col-span-2 lg:col-span-2 lg:row-span-2 group"
        >
          <img
            src={hero}
            alt=""
            className="h-full w-full object-cover aspect-[4/3] lg:aspect-[5/4] group-hover:opacity-85 transition"
          />
        </button>

        {/* Four small photos on the right */}
        {side.map((src, i) => {
          const absoluteIndex = i + 1; // because 0 is hero
          return (
            <button
              type="button"
              key={i}
              onClick={() => openAt(absoluteIndex)}
              className="relative overflow-hidden  group"
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover aspect-[5/4] group-hover:opacity-85 transition"
              />
            </button>
          );
        })}
      </div>

      {/* Lightbox */}
      {open && idx !== null && (
        <div
          className="fixed h-full inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-4 bg-white/90 text-black px-3 py-1.5 text-sm border hover:bg-white"
          >
            Close ✕
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/90 text-black w-10 h-10 border hover:bg-white"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/90 text-black w-10 h-10 border hover:bg-white"
            aria-label="Next image"
          >
            ›
          </button>

          {/* The image */}
          <img
            src={images[idx]}
            alt=""
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
