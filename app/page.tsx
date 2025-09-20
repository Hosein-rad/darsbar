import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="mb-10 text-6xl text-blue-900">درس‌بار</h1>
      <h2 className="text-xl text-center mb-8">
        ابزار کار دانش‌آموزان و معلمان
        <br />
        برای ارتباط، یادگیری، آزمون و...
      </h2>
      <p className="mt-8 text-center font-bold">ورود به عنوان:</p>
      <div className="grid grid-cols-2 grid-rows-1 my-5 gap-[10dvw]">
        <Link
          className="size-[40dvw] flex mx-auto justify-center items-center border-4 rounded-3xl bg-blue-100 hover:scale-110 text-center text-3xl"
          href="/student"
        >
          دانش
          <br />
          آموز
        </Link>

        <Link
          className="size-[40dvw] flex mx-auto justify-center items-center border-4 rounded-3xl bg-blue-100 hover:scale-110 text-center text-3xl"
          href="/teacher"
        >
          معلم
        </Link>
      </div>
    </div>
  );
}
