"use client";

import Link from "next/link";
import { useState } from "react";

export default function Signup() {
  const [userInfo, setUserInfo] = useState({});

  async function postData(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetch("/api/teacher", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((data) => data.json())
      .then((user) =>
        user?.success
          ? alert("ثبت شد!")
          : alert("مشکلی پیش آمد! لطفا دوباره امتحان کنید")
      );
  }

  return (
    <div className="h-dvh flex flex-col items-center justify-center">
      <h1 className="pb-10 text-3xl text-center">
        لطفا اطلاعات خود
        <br /> را وارد کنید
      </h1>
      <form
        action=""
        className="p-5 flex flex-col gap-3"
        onSubmit={(e) => postData(e)}
      >
        <div>
          <label htmlFor="name">نام و نام‌خانوادگی:</label>
          <input
            type="text"
            className="px-2 border-b-[1px] border-b-gray-400"
            name="name"
            id="name"
            onChange={(e) => {
              setUserInfo((c) => ({ ...c, name: e.target.value }));
            }}
          />
        </div>
        <div>
          <label htmlFor="age">سن:</label>
          <input
            type="number"
            className="px-2 w-10 text-center border-b-[1px] border-b-gray-400"
            name="age"
            id="age"
            onChange={(e) => {
              setUserInfo((c) => ({ ...c, age: e.target.value }));
            }}
          />
        </div>
        <div>
          <label htmlFor="national_id">کدملی:</label>
          <input
            type="number"
            className="px-2 w-24 text-center border-b-[1px] border-b-gray-400"
            name="national_id"
            id="national_id"
            onChange={(e) => {
              setUserInfo((c) => ({ ...c, national_id: e.target.value }));
            }}
          />
        </div>
        <div>
          <label htmlFor="personal_id">کدپرسنلی:</label>
          <input
            type="number"
            className="px-2 w-24 text-center border-b-[1px] border-b-gray-400"
            name="personal_id"
            id="personal_id"
            onChange={(e) => {
              setUserInfo((c) => ({ ...c, personal_id: e.target.value }));
            }}
          />
        </div>
        <div>
          <label htmlFor="phone_number">شماره موبایل:</label>
          <input
            type="number"
            className="px-2 w-24 text-center border-b-[1px] border-b-gray-400"
            name="phone_number"
            id="phone_number"
            onChange={(e) => {
              setUserInfo((c) => ({ ...c, phone_number: e.target.value }));
            }}
          />
        </div>
        <div className="m-6 flex items-center justify-center gap-4">
          <button
            type="submit"
            // onClick={(e) => postData(e)}
            className="p-2 pb-4 px-8 bg-green-300 text-black rounded-full"
          >
            ثبت‌نام
          </button>
          <Link
            className="p-2 pb-4 px-8 bg-red-200 text-black rounded-full"
            href={"/teacher"}
          >
            بازگشت
          </Link>
        </div>
      </form>
    </div>
  );
}
