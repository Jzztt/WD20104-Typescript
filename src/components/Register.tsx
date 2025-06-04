import React from "react";

const Register = () => {
  return (
    <>
      <div className="w-[500px] mx-auto mt-10 shadow-lg p-10 rounded">
        <h1 className="text-2xl font-bold mb-5 text-center">Register</h1>
        <form action="">
          <div className="mb-5">
            <label htmlFor="name" className="block mb-2">
             Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 rounded-lg block w-full p-2"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="price" className="block mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 rounded-lg block w-full p-2"
            />
          </div>

          <button
            type="submit"
            className="text-white mt-5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
