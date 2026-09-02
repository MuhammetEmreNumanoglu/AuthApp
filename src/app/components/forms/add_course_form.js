"use client";

import { useState, forwardRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomPickerInput = forwardRef(
  ({ value, onClick, error, touched }, ref) => (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      className={`w-full rounded-xl border px-4 py-2 text-left focus:outline-none focus:ring-2 focus:ring-[#349302] ${
        error && touched ? "border-red-500" : "border-gray-500"
      }`}
    >
      {value || "Select Date"}
    </button>
  ),
);

CustomPickerInput.displayName = "CustomPickerInput";

function AddCourseComponent({ categoryList }) {
  const [startDate, setStartDate] = useState(null);

  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
      description: "",
      price: "",
      date: null,
    },

    validationSchema: Yup.object({
      title: Yup.string().required("Sorry, title is required"),

      category: Yup.string().required("Sorry, category is required"),

      description: Yup.string().required("Sorry, description is required"),

      price: Yup.number()
        .typeError("Sorry, price must be a number")
        .required("Sorry, price is required")
        .min(1, "Sorry, price must be greater than 0"),

      date: Yup.date().nullable().required("Sorry, date is required"),
    }),

    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <form
        className="mx-auto m-5 w-2/3 rounded-4xl p-6 shadow-lg shadow-gray-600 md:w-1/2"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="mb-2 text-center text-2xl font-semibold">Add Course</h1>

        <hr className="mb-6" />

        {/* TITLE */}
        <div className="mb-5">
          <label className="mb-4 block text-sm font-medium text-gray-700">
            Title
          </label>

          <input
            placeholder="Write a title"
            {...formik.getFieldProps("title")}
            className={`w-full rounded-lg border px-3 py-2 transition-all duration-200 focus:outline-none focus:ring focus:ring-[#349302] ${
              formik.errors.title && formik.touched.title
                ? "border-red-500"
                : "border-gray-500"
            }`}
            type="text"
          />

          {formik.errors.title && formik.touched.title && (
            <p className="mt-1 text-sm text-red-500">{formik.errors.title}</p>
          )}
        </div>

        {/* CATEGORY */}
        <div className="mb-5">
          <label className="mb-4 block text-sm font-medium text-gray-700">
            Category
          </label>

          <select
            {...formik.getFieldProps("category")}
            className={`w-full rounded-lg border px-3 py-2 transition-all duration-200 focus:outline-none focus:ring focus:ring-[#349302] ${
              formik.errors.category && formik.touched.category
                ? "border-red-500"
                : "border-gray-500"
            }`}
          >
            <option value="">Select a category</option>

            {categoryList?.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>

          {formik.errors.category && formik.touched.category && (
            <p className="mt-1 text-sm text-red-500">
              {formik.errors.category}
            </p>
          )}
        </div>

        {/* DESCRIPTION */}
        <div className="mb-5">
          <label className="mb-4 block text-sm font-medium text-gray-700">
            Description
          </label>

          <textarea
            rows={4}
            {...formik.getFieldProps("description")}
            className={`w-full rounded-lg border px-3 py-2 transition-all duration-200 focus:outline-none focus:ring focus:ring-[#349302] ${
              formik.errors.description && formik.touched.description
                ? "border-red-500"
                : "border-gray-500"
            }`}
          />

          {formik.errors.description && formik.touched.description && (
            <p className="mt-1 text-sm text-red-500">
              {formik.errors.description}
            </p>
          )}
        </div>

        {/* DATE */}
        <div className="mb-5">
          <label className="mb-4 block text-sm font-medium text-gray-700">
            Date
          </label>
          <DatePicker
            selected={startDate}
            dateFormat="MMMM d, yyyy"
            placeholderText="Select Date"
            onChange={(date) => {
              setStartDate(date);
              formik.setFieldValue("date", date, true);
              formik.setFieldTouched("date", true, true);
            }}
            onCalendarClose={() => {
              formik.setFieldTouched("date", true, true);
            }}
            customInput={
              <CustomPickerInput
                error={formik.errors.date}
                touched={formik.touched.date}
              />
            }
          />

          {formik.errors.date && formik.touched.date && (
            <p className="mt-1 text-sm text-red-500">{formik.errors.date}</p>
          )}
        </div>

        {/* PRICE */}
        <div className="mb-5">
          <label className="mb-4 block text-sm font-medium text-gray-700">
            Price
          </label>

          <input
            placeholder="Write a price"
            name="price"
            type="number"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full rounded-lg border px-3 py-2 transition-all duration-200 focus:outline-none focus:ring focus:ring-[#349302] ${
              formik.errors.price && formik.touched.price
                ? "border-red-500"
                : "border-gray-500"
            }`}
          />

          {formik.errors.price && formik.touched.price && (
            <p className="mt-1 text-sm text-red-500">{formik.errors.price}</p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          className="mt-2 w-full rounded-xl bg-blue-500 py-1.5 font-semibold text-white shadow-md shadow-blue-500/30 transition-all duration-200 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/40"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddCourseComponent;
