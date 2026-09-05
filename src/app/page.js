import CoursesMasonryComponent from "./components/courses_masonry";
import { findCourses } from "./lib/actions/actions";

export default async function Home() {
  const courseShows = await findCourses(0, 3);

  console.log(courseShows);

  return (
    <div>
      <CoursesMasonryComponent
        coursesShows={JSON.parse(JSON.stringify(courseShows))}
      />
    </div>
  );
}
