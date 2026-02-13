import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { registerValidator } from "../validators/register.validator";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const hdlChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // console.log(name , value)
  };

  const hdlSubmit = async (evt) => {
    evt.preventDefault();
    setError({})
   
    const result = registerValidator.safeParse(formData);
    if (!result.success) {
      const { fieldErrors } = result.error.flatten();
      console.log(fieldErrors);
      setError(fieldErrors);
      return;
    }

        try {
            const res = await axios.post(
                "https://drive-accessible-pictures-send.trycloudflare.com/posts",formData,
        );
        console.log("Register successfully", res.data);
        toast.success("ลงทะเบียนสำเร็จ!!")
        navigate('/login')

    }catch(error) {
        console.log("เกิดข้อผิดพลาด");
        toast.error("ลงทะเบียนผิดพลาด")
    }
  };
  console.log("error", error);

  return (
    <div className=" min-h-screen bg-red-500 flex justify-center items-center">
      <div>
        <form
          onSubmit={hdlSubmit}
          className="bg-white p-6 rounded-md w-full max-w-md flex flex-col"
        >
          <h2 className= "text-slate-900 text-center text-3xl font-semibold">
            Create Account
          </h2>
          <label htmlFor="" >Username:</label>
          <input
            type="text"
            className="border p-0.5 px-2 border-gray-500 rounded-md"
            name="username"
            placeholder="username"
            onChange={hdlChange}
            value={formData.username}
          />
          {error?.username && (
            <p className="text-red-600">{error?.username[0]}</p>
          )}

          <label htmlFor="">Password:</label>
          <input
            type="password"
            className="border p-0.5 px-2 border-gray-500 rounded-md"
            name="password"
            placeholder="password"
            onChange={hdlChange}
            value={formData.password}
          />
          {error?.password && (
            <p className="text-red-600">{error?.password[0]}</p>
          )}

          <label htmlFor="">E-mail:</label>
          <input
            type="text"
            className="border p-0.5 px-2 border-gray-500 rounded-md"
            name="email"
            placeholder="example@mail.com"
            onChange={hdlChange}
            value={formData.email}
          />
          {error?.email && <p className="text-red-600">{error?.email[0]}</p>}

          <label htmlFor="">Phone:</label>
          <input
            type="text"
            className="border p-0.5 px-2 border-gray-500 rounded-md"
            name="phone"
            placeholder="090-xxxxxxx"
            onChange={hdlChange}
            value={formData.phone}
          />
          {error?.phone && <p className="text-red-600">{error?.phone[0]}</p>}

          <div className="flex justify-center items-center ">
            <button className="flex justify-center items-center bg-amber-600 w-50 p-0.5 px-2 mt-3 rounded-2xl cursor-pointer hover:bg-emerald-500">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
