"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function RegisterPage() {
  const [formType, setFormType] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("This is not an email")
        .required("Email is required"),
      password: Yup.string()
        .min(3, "Password must at least 3 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {},
  });
  return (
    <div>
      <form
        action=""
        className="bg-gray-800 max-w-sm mx-auto text-white p-6 rounded-xl shadow-xl text-center"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-3xl py-5">{formType ? "Register" : "Sign in"}</h1>
        <div className="">
          <label className="block">Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            className="w-full px-3 py-2 border rounded-xl focus:outline-none"
            {...formik.getFieldProps("email")}
          />
        </div>
        <div className=" mt-5">
          <label className="px-3">Password</label>
          <input
            type="text"
            placeholder="Enter Your Password"
            name="password"
            className="w-full px-3 py-2 border rounded-xl focus:outline-none"
            {...formik.getFieldProps("password")}
          />
        </div>
        <div>
          <button
            type="submit"
            className="mt-5 bg-blue-500 rounded-lg p-2 w-full hover:bg-blue-700 transition-colors"
          >
            {formType ? "Register " : "Sign in "}
          </button>
          <button
            type="button"
            onClick={()=>{setFormType(!formType)}}
            className="mt-5 rounded-lg p-2 w-full hover:bg-blue-600 border border-blue-600 transition-colors"
          >
            {formType ? "Already Registered ? Sign In  " : "New User ? Register Here"}
          </button>
        </div>
      </form>
    </div>
  );
}
