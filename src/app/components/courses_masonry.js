import React from 'react'

export default function CoursesMasonryComponent(coursesShows) {
  return (
    <div>
          <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
        Courses
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courseShows.map((course) => (
          <div
            key={course.id}
            className="rounded-xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <h2 className="mb-4 text-xl font-bold text-gray-800">
              {course.description}
            </h2>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                Course Price
              </span>

              <span className="text-xl font-bold text-blue-600">
                {course.price} ₺
              </span>
            </div>

            <button className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700">
              View Course
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
