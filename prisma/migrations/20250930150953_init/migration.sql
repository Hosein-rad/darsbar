-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "nationalID" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teacher" (
    "id" SERIAL NOT NULL,
    "nationalID" TEXT NOT NULL,
    "personalID" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_nationalID_key" ON "Student"("nationalID");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_nationalID_key" ON "Teacher"("nationalID");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_personalID_key" ON "Teacher"("personalID");
