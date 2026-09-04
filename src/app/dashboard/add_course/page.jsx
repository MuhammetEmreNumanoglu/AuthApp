import React from "react";
import DBConnect from "@/app/lib/db";
import AddCourseComponent from "@/app/components/forms/add_course_form";
import Category from "@/app/lib/models/category";
import Course from "@/app/lib/models/course";
import { revalidatePath } from "next/cache";
export default async function AddCoursePage() {
  await DBConnect();
  const categories = await Category.find({});
  async function addCourse(formData) {
    "use server";
    await DBConnect();
try {
      const newCourse = new Course({ ...formData });
    await newCourse.save();
    revalidatePath("/")
    return {success:true,message:"Okay"}
} catch (error) {
      return {success:false,message:error.message}

}
  }
  return (
    <div>
      <AddCourseComponent
        postCourse={addCourse}
        categoryList={JSON.parse(JSON.stringify(categories))}
      />
    </div>
  );
}
