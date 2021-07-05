import React, { useState } from "react";

function DoubleSlider() {
  const [leftSignInPanel, setLeftSignInPanel] = useState("");
  const [leftSignUpPanel, setLeftSignUpPanel] = useState("hidden");
  const [rightSignInPanel, setRightSignInPanel] = useState("hidden");
  const [rightSignUpPanel, setRightSignUpPanel] = useState("translate-x-0");
  const handleSignup = (e) => {
    e.preventDefault();
    // setLeftSignInPanel("transform translate-x-full bg-white z-10");
    // setLeftSignUpPanel("hidden");
    // setRightSignUpPanel("");
    // setRightSignInPanel("hidden");
  };

  const handleSignin = (e) => {
    e.preventDefault();
    setLeftSignUpPanel("");
    setLeftSignInPanel("translate-x-full");
    setRightSignUpPanel("-translate-x-full");
    // setRightSignInPanel("");
  };

  const handleRightSignup = (e) => {
    e.preventDefault();
    setLeftSignInPanel("translate-x-full hidden");
    setLeftSignUpPanel("translate-x-full z-10");
    setRightSignUpPanel("-translate-x-full");
    setRightSignInPanel("");
  };

  const handleRightSignin = (e) => {
    e.preventDefault();
    setLeftSignUpPanel("hidden");
    setLeftSignInPanel("");
    setRightSignUpPanel("");
    setRightSignInPanel("hidden");
  };

  return (
    <div className="flex flex-col justify-center min-w-4/5 h-screen items-center -mx-10 font-sans bg-gray-100 text-gray-800">
      <h2 className="mx-auto justify-center text-xl py-5 font-bold">
        Sign in/up Double Slider
      </h2>
      <div
        className="relative w-4/5 overflow-hidden mx-w-full h-4/5 container rounded-md shadow-lg bg-white px-10"
        id="container"
      >
        <div
          className={`${leftSignUpPanel} absolute w-2/5 top-0 h-full transition duration-500 ease-in-out`}
        >
          <form
            className="flex flex-col px-8 h-full items-center text-center justify-center"
            action=""
          >
            <h1 className="mx-auto mt-20 font-bold text-3xl text-center">
              Create Account
            </h1>
            <div className="my-5 inline-flex space-x-6">
              <a
                href=""
                className="flex rounded-full h-10 w-10 my-1 justify-center items-center border border-1 border-solid border-gray-500"
              >
                <i className=" fab fa-facebook-f"></i>
              </a>
              <a
                href=""
                className="flex rounded-full h-10 w-10  my-1 justify-center items-center border border-1 border-solid border-gray-500"
              >
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a
                href=""
                className="flex rounded-full h-10 w-10 my-1 justify-center items-center border border-1 border-solid border-gray-500"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span className="text-center text-md my-2">
              or use your email for registration
            </span>
            <input
              className="my-2 bg-gray-200 w-4/5 text-md px-3 leading-7"
              type="text"
              placeholder="Name"
            />
            <input
              className="my-2 bg-gray-200 w-4/5 text-md px-3 leading-7"
              type="email"
              placeholder="Email"
            />
            <input
              className="my-2 bg-gray-200 w-4/5 text-md px-3 leading-7"
              type="password"
              placeholder="Password"
            />
            <button
              onClick={handleSignup}
              className="transition ease-in-out duration-500 transform hover:scale-95 uppercase text-center border-solid border-1 border-orange-500 text-md w-40 leading-10 font-semibold my-2 rounded-3xl text-white bg-orange-500"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div
          className={`absolute ${leftSignInPanel} transform left-0 w-1/2 top-0 h-full transition duration-600 ease-in-out`}
        >
          <form
            className="flex flex-col px-16 h-full items-center text-center justify-center"
            action=""
          >
            <h1 className="mx-auto font-bold text-3xl text-center">Sign in</h1>
            <div className="my-5 inline-flex space-x-6">
              <a
                href=""
                className="flex rounded-full h-10 w-10  my-1 justify-center items-center border border-1 border-solid border-gray-500"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href=""
                className="flex rounded-full h-10 w-10  my-1 justify-center items-center border border-1 border-solid border-gray-500"
              >
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a
                href=""
                className="flex rounded-full h-10 w-10  my-1 justify-center items-center border border-1 border-solid border-gray-500"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span className="text-center text-md my-2">
              or use your account
            </span>
            <input
              className="my-2 bg-gray-200 w-full text-md px-3 leading-7"
              type="email"
              placeholder="Email"
            />
            <input
              className="my-2 bg-gray-200 w-full text-md px-3 leading-7"
              type="password"
              placeholder="Password"
            />
            <a href="" className="text-center text-md my-2">
              Forgot your password?
            </a>
            <button
              onClick={handleSignin}
              className="transition ease-in-out duration-500 transform hover:scale-95 uppercase text-center border-solid border-2 border-white text-md w-40 leading-10 font-semibold my-2 rounded-3xl text-white bg-orange-500"
            >
              Sign In
            </button>
          </form>
        </div>

        {/* Overlay */}

        <div
          className={`${rightSignUpPanel} transform overlay-container font-sans absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition duration-500 ease-in-out`}
        >
          <div className="overlay relative transition duration-500 ease-in-out transform translate-x-0 -left-full h-full w-2full bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400">
            <div
              className={`${rightSignInPanel} transform overlay-panel -translate-x-1/5 transition duration-500 ease-in-out text-center justify-center items-center h-full py-4 w-1/2 absolute top-0 flex flex-col overlay-left`}
            >
              <h1 className="mx-auto mt-20 font-bold text-3xl text-white text-center">
                Welcome Back!
              </h1>
              <p className="text-center text-white text-md my-5">
                To keep connected please login with your personal info
              </p>
              <button
                onClick={handleRightSignin}
                className="transition ease-in duration-100 transform hover:scale-95 uppercase text-center border-solid border-2 border-white text-md w-40 leading-10 font-semibold my-2 rounded-3xl text-white bg-red-400"
              >
                Sign In
              </button>
            </div>
            <div className="translate-x-0 transformm absolute top-0 right-0 overlay-panel transition duration-500 ease-in-out text-center justify-center items-center h-full w-1/2 flex flex-col overlay-right">
              <h1 className="mx-auto mt-20 text-white font-bold text-3xl text-center">
                Hello, Friend
              </h1>
              <p className="text-center text-white text-md my-5">
                Enter your personal details and start jorney with us
              </p>
              <button
                onClick={handleRightSignup}
                className="transition ease-in duration-100 transform hover:scale-95 uppercase text-center border-solid border-2 border-white text-md w-40 leading-10 font-semibold my-2 rounded-3xl text-white bg-red-400"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <footer>
        <p>
          Created with <i className="fa fa-heart"></i> by
          <a target="_blank" href="https://florin-pop.com">
            Florin Pop
          </a>
          - Read how I created this and how you can join the challenge
          <a
            target="_blank"
            href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/"
          >
            here
          </a>
        </p>
      </footer> */}
    </div>
  );
}

export default DoubleSlider;
