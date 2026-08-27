import React from "react";
import DBConnect from "@/app/lib/db";
import AddCourseComponent from "@/app/components/forms/add_course_form";
import Category from "@/app/lib/models/category";
export default async function AddCoursePage() {
  await DBConnect()
  const categories = await Category.find({})
  return <div><AddCourseComponent categoryList={JSON.parse(JSON.stringify(categories))}/></div>;
}
