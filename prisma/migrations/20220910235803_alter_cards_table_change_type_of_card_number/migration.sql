/*
  Warnings:

  - You are about to drop the column `number` on the `Cards` table. All the data in the column will be lost.
  - Added the required column `cardNumber` to the `Cards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cards" DROP COLUMN "number",
ADD COLUMN     "cardNumber" TEXT NOT NULL;
