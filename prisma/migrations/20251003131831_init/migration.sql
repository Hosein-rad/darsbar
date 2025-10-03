-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "national_id" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "school" TEXT NOT NULL,
    "grade" INTEGER NOT NULL,
    "branch" TEXT,
    "city" TEXT NOT NULL DEFAULT 'Yasuj',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teacher" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "national_id" TEXT NOT NULL,
    "personal_id" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "city" TEXT NOT NULL DEFAULT 'Yasuj',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_national_id_key" ON "Student"("national_id");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_national_id_key" ON "Teacher"("national_id");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_personal_id_key" ON "Teacher"("personal_id");
