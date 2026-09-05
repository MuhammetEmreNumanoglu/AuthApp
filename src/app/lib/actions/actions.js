"use server";
import { revalidatePath } from "next/cache";
import DBConnect from "../db";
import Category from "../models/category";
import AddCategorySchema from "@/app/components/forms/add_category_schema";
import Course from "../models/course";
export default async function addCategory(prevState, formData) {
  await DBConnect();
  try {
    //validation
    const isValid = await AddCategorySchema(formData);
    if (!isValid.success) {
      return { success: false, message: isValid.errors };
    }
    const newCategory = new Category({
      name: formData.get("name"),
      description: formData.get("description"),
    });
    await newCategory.save();
    revalidatePath("/dashboard/add_course");
    return { success: true, message: "Category Added" };
  } catch (error) {
    return { success: false, message: [error.message] };
  }
  return <div></div>;
}

export async function findCourses(skip, limit) {
  try {
    await DBConnect();
    const request = await Course.find({})
      .populate({ path: "category", model: Category })
      .sort([["_id", "desc"]])
      .skip(skip)
      .limit(limit);
    return request;
  } catch (error) {
    throw new Error(error);
  }
}
