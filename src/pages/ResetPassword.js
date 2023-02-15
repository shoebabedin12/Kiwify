import React from "react";

const ResetPassword = () => {
  return (
    <>
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          src={require("./../assets/images/logo.png")}
          alt="workflow"
          class="mx-auto h-12 w-auto"
        />
        <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>reset password</font>
          </font>
        </h2>
        <p class="mt-2 text-center text-base leading-5 text-gray-600">
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>
              You will receive an email with instructions for resetting your
              password.
            </font>
          </font>
        </p>
      </div>
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div>
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-5 mb-1 text-gray-700"
              >
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>Email</font>
                </font>
              </label>
              <div>
                <input
                  type="text"
                  autocomplete="off"
                  name="null"
                  class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
                />
              </div>
            </div>
            <div class="mt-6">
              <span class="block w-full rounded-md shadow-sm">
                <button class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Redefine password
                    </font>
                  </font>
                </button>
              </span>
            </div>
          </div>{" "}
          <div style={{ display: "none" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-32 text-green-400 mx-auto block"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              ></path>
            </svg>{" "}
            <h3 class="mt-4 text-center text-2xl font-medium">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Email sent! </font>
                <font style={{ verticalAlign: "inherit" }}>
                  Check your inbox
                </font>
              </font>
            </h3>{" "}
            <p class="mt-4 text-center"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
