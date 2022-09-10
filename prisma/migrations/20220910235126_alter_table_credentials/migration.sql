/*
  Warnings:

  - You are about to drop the column `credentialName` on the `Credentials` table. All the data in the column will be lost.
  - You are about to drop the column `rotule` on the `Credentials` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Credentials" DROP COLUMN "credentialName",
DROP COLUMN "rotule";
