"use client";

import Link from "next/link";
import { useState } from "react";

export default function Signup() {
  const [userInfo, setUserInfo] = useState({});

  async function postData(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetch("/api/student", {
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
        onSubmit={(e) => postData(e)}
        className="p-5 flex flex-col gap-3"
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
        <div>
          <label htmlFor="school">مدرسه:</label>
          <select
            id="school"
            defaultValue="non"
            onChange={(e) => {
              setUserInfo((c) => ({ ...c, school: e.target.value }));
            }}
          >
            <option value="non" disabled>
              --انتخاب کنید--
            </option>
            <option value="mofateh">مفتح</option>
            <option value="tangari">تنگاری</option>
            <option value="malek_ashtar">مالک‌اشتر</option>
          </select>
        </div>
        <div>
          <label htmlFor="grade">کلاس:</label>
          <select
            id="grade"
            defaultValue="non"
            onChange={(e) => {
              setUserInfo((c) => ({ ...c, grade: e.target.value }));
            }}
          >
            <option value="non" disabled>
              --انتخاب کنید--
            </option>
            <option value="7">هفتم</option>
            <option value="8">هشتم</option>
            <option value="9">نهم</option>
          </select>
        </div>
        <div>
          <label htmlFor="branch">شعبه:</label>
          <select
            id="branch"
            defaultValue="non"
            onChange={(e) => {
              setUserInfo((c) => ({ ...c, branch: e.target.value }));
            }}
          >
            <option value="non" disabled>
              --انتخاب کنید--
            </option>
            <option value="z">بدون شعبه</option>
            <option value="a">الف</option>
            <option value="b">ب</option>
            <option value="g">ج</option>
            <option value="d">د</option>
          </select>
        </div>
        <div className="m-6 flex items-center justify-center gap-4">
          <button
            type="submit"
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
