"use client";

import React, { useState } from "react";
import Masonry from "react-masonry-css";
import Link from "next/link";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

export default function CoursesMasonryComponent({
  coursesShows,
  loadMore,
}) {
  const [courses, setCourses] = useState(coursesShows);
  const [loadButton, setLoadButton] = useState(true);
  const [loading, setLoading] = useState(false);

  const moreHandler = async () => {
    setLoading(true);

    const newCourses = await loadMore(courses.length, 3);

    if (newCourses.length ===0 ) {
      setLoadButton(false);
    } else {
      setCourses((prev) => [...prev, ...newCourses]);
    }

    setLoading(false);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Explore
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Courses
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
            Discover carefully selected courses and take your skills to the
            next level.
          </p>
        </div>

        <span className="hidden rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm sm:block">
          {courses?.length || 0} Courses
        </span>
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-5"
        columnClassName="space-y-5"
      >
        {courses?.map((course, index) => (
          <div
            key={course.id ?? index}
            className="group relative overflow-hidden rounded-2xl bg-gray-900 shadow-sm ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
          >
            <img
              src={`https://picsum.photos/seed/course-${index}/600/800`}
              alt={course.title}
              className="h-auto min-h-[260px] w-full object-cover transition duration-700 ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/5 opacity-90" />

            <div className="absolute left-0 top-0 w-full p-5">
              <span className="inline-flex rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/80 backdrop-blur-md">
                Course
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-white/60">
                {course.title}
              </p>

              <h4 className="max-w-md text-lg font-semibold leading-snug text-white sm:text-xl">
                {course.description}
              </h4>

              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/50">
                    Price
                  </p>

                  <p className="mt-0.5 text-base font-semibold text-white">
                    {course.price} ₺
                  </p>
                </div>

                <Link
                  href={`/course/${course.id ?? index}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-gray-900 transition-all duration-300 hover:bg-gray-100 hover:px-5"
                >
                  View Course

                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Masonry>

      {loadButton && (
        <div className="mt-10">
          <div className="mb-6 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          <button
            onClick={moreHandler}
            disabled={loading}
            className="group mx-auto flex items-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Loading..." : "Load More"}

            {!loading && (
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            )}
          </button>
        </div>
      )}
    </div>
  );
}