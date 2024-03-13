import React, { useState } from "react";
import axios from 'axios'

export const PostForm = () => {
  
  const [formValues, setFormValues] = useState({
    userId: "",
    title: "",
    body: "",
  });

  function submitHandler(e) {
    e.preventDefault();
    console.log(formValues);
    axios.post('https://jsonplaceholder.typicode.com/posts',formValues)
    .then((res)=>{
        console.log(res)
    })
  }

  function formHandler(e) {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="userId"
        onChange={formHandler}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <input
        type="text"
        name="title"
        onChange={formHandler}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <input
        type="text"
        name="body"
        onChange={formHandler}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};
