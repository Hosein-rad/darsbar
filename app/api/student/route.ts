import {prisma} from '@/lib/prisma'
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<Response> {
  const { name, age, national_id, phone_number, school, grade, branch }: { name: string, age: number, national_id: string, phone_number: string, school: string, grade: number, branch:string } = await request.json()
  const user = await prisma.student.create(
    {data: { name, age: Number(age), national_id, phone_number, school, grade: Number(grade), branch }}
  )

  return NextResponse.json({ success: true, user: user })
}