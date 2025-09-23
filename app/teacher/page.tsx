"use client";

import { useState } from "react";

export default function Home() {
  const [nationalID, setNationalID] = useState();
  const [personalID, setPersonalID] = useState();
  const [phone_number, setPhoneNumber] = useState();

  return (
    <div className="h-screen">
      <form
        action=""
        className="h-full flex flex-col my-auto justify-center items-center"
      >
        <h1 className="pb-10 text-3xl text-center">
          معلم عزیز
          <br />
          به <b className="text-4xl text-blue-900">درس‌بار</b>
          <br /> خوش آمدید.
        </h1>
        <label
          className="w-[60dvw] pt-5 pb-1 text-[18px] text-right"
          htmlFor="national_id"
        >
          کد ملی: <b className="text-[14px]">(10 رقم)</b>
        </label>
        <input
          className="w-[50%] p-1 border-1 border-gray-400 rounded-[10px]"
          type="number"
          name="national_id"
          placeholder=" مثال: 4261234567"
          defaultValue={nationalID}
          onChange={(e) => setNationalID(e.target.value)}
        />
        <label
          className="w-[60dvw] pt-5 pb-1 text-[18px] text-right"
          htmlFor="national_id"
        >
          کد پرسنلی: <b className="text-[14px]">(10 رقم)</b>
        </label>
        <input
          className="w-[50%] p-1 border-1 border-gray-400 rounded-[10px]"
          type="number"
          name="personal_id"
          placeholder=" مثال: 4291234567"
          defaultValue={personalID}
          onChange={(e) => setPersonalID(e.target.value)}
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
            if (
              nationalID?.length == 10 &&
              personalID?.length == 8 &&
              phone_number?.length == 11
            ) {
              fetch("/api/teacher", {
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify({
                  nationalID,
                  personalID,
                  phone_number,
                }),
              });
            } else {
              console.log(
                nationalID?.length,
                personalID?.length,
                phone_number?.length
              );
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
