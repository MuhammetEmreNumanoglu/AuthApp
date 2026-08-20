"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import { useState } from "react";
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
  });
  return (
    <div>
      <form action=""></form>
    </div>
  );
}
