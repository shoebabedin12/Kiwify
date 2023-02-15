import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState(false);
  const [sameEmail, setSameEmail] = useState(false);
  const [pass, setPass] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, repEatemail, password, isChecked } = e.target.elements;
    console.log({ email: email.value, repEatemail: repEatemail.value, password: password.value, isChecked: isChecked.value });
    if (email.value === "") {
      setEmail(true);
    } else if (password.value === "") {
      setEmail(false);
      setConfirmEmail(true);
    } 
    else if (password.value === "") {
      setConfirmEmail(false);
      setSameEmail(true);
    }
    else if (password.value === "") {
      setSameEmail(false);
      setPass(true);
    }
    else if (password.value === "") {
      setPass(false);
      setIsChecked(true);
    }
    else {
      setIsChecked(false);
    }
    // console.log(data);
  };
  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          src={require("./../assets/images/logo.png")}
          alt="Kiwify"
          className="mx-auto h-12 w-auto"
        />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>create new account</font>
          </font>
        </h2>
        <p className="mt-2 text-center text-base leading-5 text-gray-600">
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>Or</font>
          </font>
          <Link
            to="/"
            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                log into your existing account
              </font>
            </font>
          </Link>
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <form className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium leading-5 mb-1 text-gray-700">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Email</font>
              </font>
            </label>{" "}
            <div>
              <input
                type="email"
                autoComplete="off"
                name="email"
                className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-red-500 w-full"
              />
              <div className="text-red-500 text-xs mt-1">
                <div></div>
              </div>
            </div>
            <div>
              {email && <div className="text-xs text-red-500">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    This field is mandatory
                  </font>
                </font>
              </div>}
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium leading-5 mb-1 text-gray-700">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>repeat email</font>
              </font>
            </label>
            <div>
              <input
                type="email"
                autoComplete="off"
                name="repeatEmail"
                className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-red-500 w-full"
              />
              <div className="text-red-500 text-xs mt-1">
                <div></div>
              </div>
            </div>{" "}
            <div>
              {sameEmail && <div className="text-xs text-red-500">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    The two emails must be the same.
                  </font>
                </font>
              </div>}
            {confirmEmail &&  <div className="text-xs text-red-500">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    This field is mandatory
                  </font>
                </font>
              </div>}
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium leading-5 text-gray-700">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Password</font>
              </font>
            </label>
            <div>
             
              <input
                type="password"
                autoComplete="off"
                name="password"
                className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-red-500 w-full"
              />{" "}
              <div className="text-red-500 text-xs mt-1">
               {pass && <div>
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      This field is mandatory
                    </font>
                  </font>
                </div>}
              </div>
            </div>
          </div>{" "}
          <div className="mt-6">
            <label className="relative flex items-start mt-2">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"  onChange={(e) => setIsChecked(e)}
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer border-red-500"
                />
              </div>{" "}
              <div className="ml-2 text-sm leading-5">
                <span className="font-medium text-gray-700">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      I have read and accept{" "}
                    </font>
                    <font style={{ verticalAlign: "inherit" }}>Kiwify's </font>
                  </font>
                  <Link
                    to="#"
                    target="_blank"
                    className="underline"
                    rel="noreferrer"
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        terms of use
                      </font>
                    </font>
                  </Link>
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}> , </font>
                  </font>
                  <Link
                    to="#"
                    target="_blank"
                    className="underline"
                    rel="noreferrer"
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        software license terms
                      </font>
                    </font>
                  </Link>
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}> , </font>
                  </font>
                  <Link to="#"
                    target="_blank"
                    className="underline"
                    rel="noreferrer"
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        content policy
                      </font>
                    </font>
                  </Link>
                  <font style={{ verticalAlign: "inherit" }}></font>
                </span>
               {isChecked && <div className="text-red-500 border-b-0">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      (This field is mandatory)
                    </font>
                  </font>
                </div>}
              </div>
            </label>
          </div>
          <div className="mt-6">
            <span className="block w-full rounded-md shadow-sm">
              <button className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    Create an account
                  </font>
                </font>
              </button>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
