"use client";

import { useState } from "react";

export default function Home() {
  const [nationalID, setNationalID] = useState();
  const [phone_number, setPhoneNumber] = useState();

  return (
    <div className="h-screen">
      <form
        action=""
        className="h-full flex flex-col my-auto justify-center items-center"
      >
        <h1 className="pb-10 text-3xl text-center">
          دانش‌آموز عزیز
          <br />
          به <b className="text-4xl text-blue-900">درس‌بار</b>
          <br /> خوش آمدید.
        </h1>
        <label
          className="w-[60dvw] pt-5 pb-1 text-[18px] text-right"
          htmlFor="nationalID"
        >
          کد ملی: <b className="text-[14px]">(10 رقم)</b>
        </label>
        <input
          className="w-[50%] p-1 border-1 border-gray-400 rounded-[10px]"
          type="number"
          name="nationalID"
          placeholder=" مثال: 4261234567"
          defaultValue={nationalID}
          onChange={(e) => setNationalID(e.target.value)}
        />
        <label
          className="w-[60dvw] pt-5 pb-1 text-[18px] text-right"
          htmlFor="phone_number"
        >
          شماره موبایل:
        </label>
        <input
          className="w-[50%] p-1 border-1 border-gray-400 rounded-[10px]"
          type="number"
          name="phone_number"
          placeholder=" مثال: 09171234567"
          defaultValue={phone_number}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button
          className="mt-10 pb-2 px-8 bg-gray-800 text-white rounded-full"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            console.log(nationalID, phone_number);
            if (nationalID?.length == 10 && phone_number?.length == 11) {
              fetch("/api/student", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  nationalID: nationalID,
                  phone_number: phone_number,
                }),
              })
                .then((data) => data.json())
                .then((user) =>
                  user?.success ? alert("ثبت شد!") : alert("مشکلی پیش آمد!")
                );
            } else {
              console.log(nationalID?.length, phone_number?.length);
              alert("لطفا ورودی ها را به درستی پر کنید");
            }
          }}
        >
          ورود
        </button>
      </form>
    </div>
  );
}
