/*
  Warnings:

  - You are about to drop the column `finalURL` on the `Report` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Report" DROP COLUMN "finalURL",
ADD COLUMN     "finalUrl" TEXT;
