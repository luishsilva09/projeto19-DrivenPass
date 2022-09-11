/*
  Warnings:

  - You are about to drop the column `expirationData` on the `Cards` table. All the data in the column will be lost.
  - Added the required column `expirationDate` to the `Cards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cards" DROP COLUMN "expirationData",
ADD COLUMN     "expirationDate" TEXT NOT NULL;
