/*
  Warnings:

  - The `srtItems` column on the `Report` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Report" DROP COLUMN "srtItems",
ADD COLUMN     "srtItems" JSONB;
