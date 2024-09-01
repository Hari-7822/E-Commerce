/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Building', 'Electrical', 'Plumbing', 'HVAC', 'Tools', 'Finishing', 'Hardware', 'Safety', 'Landscaping', 'Environmental', 'interior', 'exterior');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin', 'Manager', 'supervisor', 'Client');

-- CreateEnum
CREATE TYPE "employee_role" AS ENUM ('Manager', 'Architect', 'Surveyor', 'Civil_Engineer', 'Contractor', 'Estimator', 'Structural_Engineer', 'Field_Engineer', 'Inspector', 'Electrician', 'Heavy_equipment_operator', 'Plumber', 'Superintendent', 'Supervisor', 'Accountant', 'Carpenter', 'Collaboration', 'Operator', 'Planner');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "email",
ADD COLUMN     "bio" TEXT,
ADD COLUMN     "profilepic" TEXT,
ADD COLUMN     "role" "Role" NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "name" TEXT NOT NULL,
    "postedById" INTEGER NOT NULL,
    "invested" DOUBLE PRECISION,
    "cashFlow" DOUBLE PRECISION,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
