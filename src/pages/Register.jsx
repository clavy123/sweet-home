import React from "react";
import { IoClose } from "react-icons/io5";
import InputField from "../components/Global/InputField";
import PasswordInputField from "../components/Global/PasswordInputField";
import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="w-screen h-screen fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center bg-[rgba(0,0,0,0.3)]">
        <form
          onSubmit={handleSubmit}
          className={`w-[90%] h-auto md:h-[92vh] lg:w-2/6 bg-white lg:h-[500px] rounded-xl p-8 md:p-8 xl:p-12 relative flex flex-col justify-center gap-6`}
        >
          <div className="w-full mt-3 md:mt-0">
            <h1 className="text-2xl font-semibold text-center">
              Please Register To Explore Sweethome
            </h1>
          </div>
          <InputField inputType={"text"} labelName={"Name"} value={""} />
          <InputField inputType={"email"} labelName={"Email"} value={""} />
          <PasswordInputField labelName={"Password"} value={""} />
          <div className="w-full">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white text-sm font-medium rounded-lg py-2.5 mt-3"
            >
              Register
            </button>
          </div>
          <p className="text-sm font-medium text-center text-gray-500">
            Already have an account?{" "}
            <Link to="/" className="text-black">
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
