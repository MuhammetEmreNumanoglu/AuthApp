"use server";
import { revalidatePath } from "next/cache";
import DBConnect from "../db";
import Category from "../models/category";
import AddCategorySchema from "@/app/components/forms/add_category_schema";
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
