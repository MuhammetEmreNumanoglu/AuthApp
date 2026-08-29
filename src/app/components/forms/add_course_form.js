"use client";
import { useFormik } from "formik";
import DatePicker from "react-datepicker";
import * as Yup from "yup";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css"
function AddCourseComponent({ categoryList }) {
  const [startDate, setStartDate] = useState(new Date());

  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
      description: "",
      price: 0,
      date: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Sorry , title is required"),
      category: Yup.string().required("Sorry , category is required"),
      description: Yup.string().required("Sorry , description is required"),
      price: Yup.number().required("Sorry , price is required"),
      date: Yup.string().required("Sorry , date is required"),
    }),
    onSubmit: async (values) => {},
  });
  return (
    <div>
      <form
        className=" w-2/3 md:w-1/2 mx-auto shadow-lg shadow-gray-600 p-6 m-5 rounded-4xl
       "
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-2xl text-center mb-2  font-semibold">Categories</h1>
        <hr className="mb-6" />
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Title
          </label>
          <input
            placeholder="Write a title"
            {...formik.getFieldProps("title")}
            className="w-full border border-gray-500 rounded-lg focus:outline-none focus:ring focus:ring-[#349302] tranisiton-all duration-200"
            type="text"
          ></input>
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Category
          </label>
          <select
            {...formik.getFieldProps("category")}
            className="w-full border border-gray-500 rounded-lg focus:outline-none focus:ring focus:ring-[#349302] tranisiton-all duration-200"
            type="text"
          >
            <option value="">Select a category</option>
            {categoryList?.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label> Description</label>
          <textarea
            rows={4}
            {...formik.getFieldProps("descrıptıon")}
            className="w-full border border-gray-500 rounded-lg focus:outline-none focus:ring focus:ring-[#349302] tranisiton-all duration-200"
            type="text"
            name="description"
          />
        </div>

        <div className="">
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Date
          </label>
          <DatePicker
  selected={startDate}
  dateFormat="MMMM d, yyyy"
  onChange={(date) => {
    formik.setFieldValue("date", date, true);
    setStartDate(date);
  }}
  icon="fa fa-calendar"
/>
        </div>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Price
          </label>
          <input
            placeholder="Write a price"
            {...formik.getFieldProps("price")}
            className="w-full border border-gray-500 rounded-lg focus:outline-none focus:ring focus:ring-[#349302] tranisiton-all duration-200"
            type="number"
          ></input>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1.5 mt-2 rounded-xl shadow-md shadow-blue-500/30 hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-200 w-full"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddCourseComponent;
