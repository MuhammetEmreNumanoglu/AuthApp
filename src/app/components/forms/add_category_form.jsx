"use client";
import React from "react";

export default function AddCategoryComponent() {
  return (
    <div>
      <form action="">
        <h1>Add Category</h1>
        <div>
          <label> Category Name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label> Description</label>
          <input type="text" name="description" />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
