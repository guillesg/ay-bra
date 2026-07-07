"use client";

import type { Review } from "./reviews";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({
  review,
}: ReviewCardProps) {

  return (

    <article
      className="
        h-full
        rounded-[28px]
        border
        border-black/5
        bg-white

        p-8
        sm:p-10

        shadow-[0_20px_60px_rgba(0,0,0,.05)]

        transition-all
        duration-300

        hover:-translate-y-2
        hover:shadow-[0_30px_70px_rgba(0,0,0,.08)]
      "
    >

      {/* HEADER */}

      <div className="flex items-start justify-between gap-5">

        <h3
          className="
            pr-4
            text-xl
            font-semibold
            leading-8
            text-[#222222]

            lg:text-[32px]
          "
        >
          {review.name}
        </h3>

        <span
          className="
            shrink-0
            text-lg
            tracking-[0.15em]
            text-[#C9A14A]
          "
        >
          {"★".repeat(review.stars)}
        </span>

      </div>

      {/* TEXTO */}

      <p
        className="
          mt-8

          text-[17px]
          leading-9
          text-neutral-600
        "
      >
        {review.text}
      </p>

    </article>

  );

}