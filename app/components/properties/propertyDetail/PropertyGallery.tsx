"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import type { Property } from "@/lib/types";

interface PropertyGalleryProps {
  property: Property;
}

export default function PropertyGallery({
  property,
}: PropertyGalleryProps) {

  const [currentImage, setCurrentImage] = useState(0);

  const [thumbStart, setThumbStart] = useState(0);

  const totalImages = property.images.length;

  const [thumbsPerView, setThumbsPerView] = useState(5);

  useEffect(() => {

    const updateThumbs = () => {

      if (window.innerWidth < 640) {

        setThumbsPerView(3);

      }

      else if (window.innerWidth < 1024) {

        setThumbsPerView(4);

      }

      else {

        setThumbsPerView(5);

      }

    };

    updateThumbs();

    window.addEventListener(
      "resize",
      updateThumbs
    );

    return () =>
      window.removeEventListener(
        "resize",
        updateThumbs
      );

  }, []);

  const nextImage = () => {

    setCurrentImage((prev) =>
      prev === totalImages - 1
        ? 0
        : prev + 1
    );

  };

  const prevImage = () => {

    setCurrentImage((prev) =>
      prev === 0
        ? totalImages - 1
        : prev - 1
    );

  };

  const goToImage = (index: number) => {

    setCurrentImage(index);

  };

  useEffect(() => {

    if (currentImage < thumbStart) {

      setThumbStart(currentImage);

    }

    if (
      currentImage >=
      thumbStart + thumbsPerView
    ) {

      setThumbStart(
        currentImage -
        thumbsPerView +
        1
      );

    }

  }, [
    currentImage,
    thumbStart,
    thumbsPerView,
  ]);

  const visibleThumbs = useMemo(() => {

    return property.images.slice(
      thumbStart,
      thumbStart + thumbsPerView
    );

  }, [
    property.images,
    thumbStart,
    thumbsPerView,
  ]);

  const nextThumbs = () => {

    if (
      thumbStart + thumbsPerView <
      totalImages
    ) {

      setThumbStart((prev) => prev + 1);

    }

  };

  const prevThumbs = () => {

    if (thumbStart > 0) {

      setThumbStart((prev) => prev - 1);

    }

  };

  useEffect(() => {

    const handleKey = (
      event: KeyboardEvent
    ) => {

      if (event.key === "ArrowLeft") {

        prevImage();

      }

      if (event.key === "ArrowRight") {

        nextImage();

      }

    };

    window.addEventListener(
      "keydown",
      handleKey
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKey
      );

  }, []);

  return (

<section className="space-y-10">

  {/* ====================================================== */}
  {/* GALERÍA */}
  {/* ====================================================== */}

  <div className="mx-auto flex w-full justify-center">

    <div
      className="
        relative
        w-full
        max-w-[920px]
        overflow-visible
      "
    >

      {/* FOTO */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[30px]
          bg-white
          shadow-[0_30px_70px_rgba(0,0,0,.10)]
        "
      >

        <div className="relative aspect-[3/2]">

          <Image
            src={property.images[currentImage]}
            alt={property.title}
            fill
            priority
            className="
              object-cover
              transition-all
              duration-500
            "
          />

        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

        <div
          className="
            absolute
            right-5
            top-5
            rounded-full
            bg-black/60
            px-4
            py-2
            text-sm
            font-semibold
            text-white
            backdrop-blur-xl
          "
        >
          {currentImage + 1} / {totalImages}
        </div>

      </div>

      {/* Desktop */}

      <button
        onClick={prevImage}
        className="
          absolute
          left-0
          top-1/2
          hidden
          h-14
          w-14
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-neutral-200
          bg-white
          text-2xl
          shadow-xl
          transition-all
          duration-300
          hover:scale-110
          hover:border-[#C9A14A]
          hover:bg-[#C9A14A]
          hover:text-white
          lg:flex
        "
      >
        ←
      </button>

      <button
        onClick={nextImage}
        className="
          absolute
          right-0
          top-1/2
          hidden
          h-14
          w-14
          translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-neutral-200
          bg-white
          text-2xl
          shadow-xl
          transition-all
          duration-300
          hover:scale-110
          hover:border-[#C9A14A]
          hover:bg-[#C9A14A]
          hover:text-white
          lg:flex
        "
      >
        →
      </button>

      {/* Mobile */}

      <button
        onClick={prevImage}
        className="
          absolute
          left-4
          top-1/2
          flex
          h-11
          w-11
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-black/40
          text-white
          backdrop-blur-xl
          lg:hidden
        "
      >
        ←
      </button>

      <button
        onClick={nextImage}
        className="
          absolute
          right-4
          top-1/2
          flex
          h-11
          w-11
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-black/40
          text-white
          backdrop-blur-xl
          lg:hidden
        "
      >
        →
      </button>

    </div>

  </div>
        {/* ====================================================== */}
      {/* MINIATURAS */}
      {/* ====================================================== */}

      <div className="mx-auto flex w-full justify-center">

        <div className="w-full max-w-[920px]">

          <div className="flex items-center gap-3">

           

            {/* LISTA */}

            <div
              className="
                flex
                flex-1
                items-center
                justify-center
                gap-3
              "
            >

              {visibleThumbs.map((image, index) => {

                const realIndex = thumbStart + index;

                return (

                  <button
                    key={realIndex}
                    onClick={() => goToImage(realIndex)}
                    className={`
                      relative
                      flex-1
                      aspect-[4/3]
                      overflow-hidden
                      rounded-2xl
                      transition-all
                      duration-300

                      ${
                        currentImage === realIndex
                          ? "ring-4 ring-[#C9A14A] scale-[1.03]"
                          : "opacity-70 hover:opacity-100 hover:scale-[1.02]"
                      }
                    `}
                  >

                    <Image
                      src={image}
                      alt={`${property.title}-${realIndex}`}
                      fill
                      className="object-cover"
                    />

                  </button>

                );

              })}

            </div>

            {/* Flecha derecha */}

           

          </div>

        </div>

      </div>
          </section>

  );

}