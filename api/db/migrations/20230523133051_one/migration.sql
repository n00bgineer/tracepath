/*
  Warnings:

  - Added the required column `url` to the `Report` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Report" ADD COLUMN     "finalURL" TEXT,
ADD COLUMN     "url" TEXT NOT NULL;
