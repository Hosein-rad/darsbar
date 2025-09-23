import {prisma} from '@/lib/prisma'
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<Response> {
  const { nationalID,personalID , phone_number }: {nationalID: string ,personalID: string, phone_number: string} = await request.json()
  const user = await prisma.teacher.create(
    {data: {
      nationalID: nationalID,
      personalID: personalID,
      phone_number: phone_number
    }}
  )

  return NextResponse.json({ success: true, user: user })
}