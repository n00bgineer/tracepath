/*
  Warnings:

  - The values [AWS] on the enum `ProviderType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `apiKey` on the `Region` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Region` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[regionName]` on the table `Region` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[authKey]` on the table `Region` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ipAddress]` on the table `Region` will be added. If there are existing duplicate values, this will fail.
  - The required column `authKey` was added to the `Region` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `ipAddress` to the `Region` table without a default value. This is not possible if the table is not empty.
  - Added the required column `portNo` to the `Region` table without a default value. This is not possible if the table is not empty.
  - Added the required column `regionName` to the `Region` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ProviderType_new" AS ENUM ('AWSEC2', 'AWSLS', 'GOOGLE', 'AZURE', 'DIGITALOCEAN', 'ALIBABA');
ALTER TABLE "Region" ALTER COLUMN "providerType" TYPE "ProviderType_new" USING ("providerType"::text::"ProviderType_new");
ALTER TYPE "ProviderType" RENAME TO "ProviderType_old";
ALTER TYPE "ProviderType_new" RENAME TO "ProviderType";
DROP TYPE "ProviderType_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Report" DROP CONSTRAINT "Report_regionName_fkey";

-- DropIndex
DROP INDEX "Region_apiKey_key";

-- DropIndex
DROP INDEX "Region_name_key";

-- DropIndex
DROP INDEX "Region_url_key";

-- AlterTable
ALTER TABLE "Region" DROP COLUMN "apiKey",
DROP COLUMN "url",
ADD COLUMN     "authKey" TEXT NOT NULL,
ADD COLUMN     "ipAddress" TEXT NOT NULL,
ADD COLUMN     "portNo" TEXT NOT NULL,
ADD COLUMN     "regionName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Region_regionName_key" ON "Region"("regionName");

-- CreateIndex
CREATE UNIQUE INDEX "Region_authKey_key" ON "Region"("authKey");

-- CreateIndex
CREATE UNIQUE INDEX "Region_ipAddress_key" ON "Region"("ipAddress");

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_regionName_fkey" FOREIGN KEY ("regionName") REFERENCES "Region"("regionName") ON DELETE RESTRICT ON UPDATE CASCADE;
