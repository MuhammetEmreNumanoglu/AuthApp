"use server"
import DBConnect from "../db";
import add_name from "../models/add_name";
export default async function AddName1(prev, formData) {
  await DBConnect();
  try {
    const newCategory = new add_name({
      name: formData.get("name"),
      surname: formData.get("surname"),
    });
    await newCategory.save();
    return { success: true, message: "Name is added" };
  } catch (error) {
    return { succes: false, message: [error.message] };
  }
}
