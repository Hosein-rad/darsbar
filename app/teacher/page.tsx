"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [nationalID, setNationalID] = useState<string | undefined>();
  const [personalID, setPersonalID] = useState<string | undefined>();

  return (
    <div className="h-screen">
      <form
        action=""
        className="h-4/5 flex flex-col my-auto justify-center items-center"
      >
        <h1 className="pb-10 text-3xl text-center">
          معلم عزیز
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
          کد پرسنلی: <b className="text-[14px]">(8 رقم)</b>
        </label>
        <input
          className="w-[50%] p-1 border-1 border-gray-400 rounded-[10px]"
          type="number"
          name="personal_id"
          placeholder=" مثال: 4291234567"
          defaultValue={personalID}
          onChange={(e) => setPersonalID(e.target.value)}
        />
        <button
          className="mt-10 pb-2 px-8 bg-gray-800 text-white rounded-full"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (
              nationalID?.toString().length == 10 &&
              personalID?.toString().length == 8
            ) {
              fetch("/api/teacher", {
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify({
                  nationalID,
                  personalID,
                }),
              })
                .then((data) => data.json())
                .then((user) =>
                  user?.success ? (
                    <Link href={"/teacher"}></Link>
                  ) : (
                    alert("مشکلی پیش آمد! لطفا دوباره امتحان کنید")
                  )
                );
            } else {
              console.log(nationalID?.length, personalID?.length);
              alert("لطفا ورودی ها را به درستی پر کنید");
            }
          }}
        >
          ورود
        </button>
        <hr className="w-4/5 h-0.5 mt-7 text-gray-300" />
      </form>
      <h2 className="mt-[-60px] text-3xl text-center text-red-800">
        ‌ثبت نام نکرده‌اید؟؟
      </h2>
      <div className="w-full flex items-center justify-center">
        <Link
          href={"/teacher/signup"}
          className="mt-10 pb-2 px-8 bg-gray-800 text-white rounded-full"
        >
          ثبت نام
        </Link>
      </div>
    </div>
  );
}
