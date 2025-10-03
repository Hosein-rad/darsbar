/*
  Warnings:

  - You are about to drop the column `nationalID` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `nationalID` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `personalID` on the `Teacher` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[national_id]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[national_id]` on the table `Teacher` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[personal_id]` on the table `Teacher` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `age` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `grade` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `national_id` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `school` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `national_id` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personal_id` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."Student_nationalID_key";

-- DropIndex
DROP INDEX "public"."Teacher_nationalID_key";

-- DropIndex
DROP INDEX "public"."Teacher_personalID_key";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "nationalID",
ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "branch" TEXT,
ADD COLUMN     "city" TEXT NOT NULL DEFAULT 'Yasuj',
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "grade" INTEGER NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "national_id" TEXT NOT NULL,
ADD COLUMN     "school" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Teacher" DROP COLUMN "nationalID",
DROP COLUMN "personalID",
ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL DEFAULT 'Yasuj',
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "national_id" TEXT NOT NULL,
ADD COLUMN     "personal_id" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Student_national_id_key" ON "Student"("national_id");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_national_id_key" ON "Teacher"("national_id");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_personal_id_key" ON "Teacher"("personal_id");
