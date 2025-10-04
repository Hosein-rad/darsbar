import prisma from '@/lib/prisma'
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<Response> {
  const { name, age, national_id, personal_id, phone_number }: {name: string ,age: number,national_id: string, personal_id: string ,phone_number: string} = await request.json()

  const user = await prisma.teacher.create(
    {data: { name: name, age: Number(age), national_id, personal_id, phone_number }}
  )

  return NextResponse.json({ success: true, user: user })
}