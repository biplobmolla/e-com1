"use client";

import FormTitle from "@/components/FormTitle";
import Input from "@/components/Input";
import { useSignupMutation } from "@/services/api/authApi";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface FormValuePropsType {
  name: string;
  email: string;
  phone: string;
  password: string;
  cpassword: string;
}

const Page = () => {
  const [signup, { isLoading: isSignupLoading }] = useSignupMutation();

  const [formValue, setFormValue] = useState<FormValuePropsType>({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  const onInputChange = (field: keyof FormValuePropsType, value: string) => {
    setFormValue((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (
        formValue.name &&
        formValue.email &&
        formValue.phone &&
        formValue.password &&
        formValue.cpassword
      ) {
        if (formValue.password === formValue.cpassword) {
          const { cpassword, ...data } = formValue;
          const responseData = await signup(data);
          toast.success(responseData?.data?.message);
        }
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="p-6">
      <form onSubmit={handleOnSubmit}>
        <FormTitle text="Signup Form" className="mb-5" />

        <Input
          type="text"
          placeholder="Full Name"
          value={formValue.name}
          onChange={(val) => onInputChange("name", val)}
        />

        <Input
          type="email"
          placeholder="Email Address"
          value={formValue.email}
          onChange={(val) => onInputChange("email", val)}
        />

        <Input
          type="tel"
          placeholder="Phone Number"
          value={formValue.phone}
          onChange={(val) => onInputChange("phone", val)}
        />

        <Input
          type="password"
          placeholder="Password"
          value={formValue.password}
          onChange={(val) => onInputChange("password", val)}
        />

        <Input
          type="password"
          placeholder="Confirm Password"
          value={formValue.cpassword}
          onChange={(val) => onInputChange("cpassword", val)}
        />

        <button
          type="submit"
          className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Page;
