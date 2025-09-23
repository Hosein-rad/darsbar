import {prisma} from '@/lib/prisma'
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<Response> {
  const { nationalID, phone_number }: {nationalID: string, phone_number: string} = await request.json()
  const user = await prisma.student.create(
    {data: {
      nationalID: nationalID,
      phone_number: phone_number
    }}
  )

  return NextResponse.json({ success: true, user: user })
}