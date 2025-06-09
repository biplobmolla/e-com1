"use client";

import FormTitle from "@/components/FormTitle";
import Input from "@/components/Input";
import { useState } from "react";

interface FormValuePropsType {
  email: string;
  password: string;
}

const Page = () => {
  const [formValue, setFormValue] = useState<FormValuePropsType>({
    email: "",
    password: "",
  });

  const onInputChange = (field: keyof FormValuePropsType, value: string) => {
    setFormValue((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="p-6">
      <form>
        <FormTitle text="Signin Form" className="mb-5" />

        <Input
          type="email"
          placeholder="Email Address"
          value={formValue.email}
          onChange={(val) => onInputChange("email", val)}
        />

        <Input
          type="password"
          placeholder="Password"
          value={formValue.password}
          onChange={(val) => onInputChange("password", val)}
        />

        <button
          type="submit"
          className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Page;
