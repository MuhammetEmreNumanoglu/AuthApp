"use client";
import addCategory from "@/app/lib/actions/actions";
import { useActionState } from "react";
export default function AddCategoryComponent() {
  const [state, action, isPending] = useActionState(addCategory, null);

  return (
    <div>
      <form
        action={action}
        className="w-1/4 mx-auto shadow-lg shadow-gray-600 p-6 m-5 rounded-4xl
       "
      >
        <h1 className="text-2xl text-center mb-2  font-semibold">
          Add Category
        </h1>
        <hr className="mb-6" />
        <div>
          <label className="block text-gray-800 "> Category Name</label>
          <input
            className="w-full border border-gray-500 rounded-lg focus:outline-none focus:ring focus:ring-[#349302] tranisiton-all duration-200"
            type="text"
            name="name"
          />
        </div>
        <div>
          <label> Description</label>
          <textarea
            rows={4}
            className="w-full border border-gray-500 rounded-lg focus:outline-none focus:ring focus:ring-[#349302] tranisiton-all duration-200"
            type="text"
            name="description"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1.5 mt-2 rounded-xl shadow-md shadow-blue-500/30 hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-200 w-full"
          disabled={isPending}
          type="submit"
        >
          {isPending ? "Adding" : "Save"}
        </button>
        {!state?.success ? (
          <div className="text-red-600 mt-3">
            {state?.message.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        ) : (
          <div className="text-green-700 mt-2">Category Added</div>
        )}
      </form>
    </div>
  );
}
