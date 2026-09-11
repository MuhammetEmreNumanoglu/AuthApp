import CoursesMasonryComponent from "./components/courses_masonry";
import { findCourses } from "./lib/actions/actions";

export default async function Home() {
  const courseShows = await findCourses(0, 3);

  async function loadMore(skip, limit) {
    "use server";

    const nextCourses = await findCourses(skip, limit);

    return JSON.parse(JSON.stringify(nextCourses));
  }

  return (
    <div>
      <CoursesMasonryComponent
        coursesShows={JSON.parse(JSON.stringify(courseShows))}
        loadMore={loadMore}
      />
    </div>
  );
}