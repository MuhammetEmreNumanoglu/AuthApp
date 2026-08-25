import * as Yup from "yup";
export default async function AddCategorySchema(formData) {
  const data = {
    name: formData.get("name"),
    description: formData.get("description"),
  };
  const schema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name should be at least 3 character")
      .max(20, "Name should be max 20 characters"),
    description: Yup.string()
      .required("Description is required")
      .min(5, "Description should be min 5 characters")
      .max(100, "Description should be max 100 characters"),
  });

  try {
    await schema.validate(data, { abortEarly: false });
    return { success: true, data: data, status: 200 };
  } catch (error) {
    return { success: false, errors: error.errors };
  }
  return <div></div>;
}
