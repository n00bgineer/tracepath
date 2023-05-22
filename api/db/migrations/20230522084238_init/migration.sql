-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('INDIVIDUAL', 'ORGANIZATION');

-- CreateEnum
CREATE TYPE "RoleType" AS ENUM ('USER', 'BOT', 'ADMIN');

-- CreateEnum
CREATE TYPE "SubscriptionType" AS ENUM ('FREE', 'PRO_MONTHLY', 'PRO_ANNUAL');

-- CreateEnum
CREATE TYPE "ProviderType" AS ENUM ('AWS', 'GOOGLE', 'AZURE', 'DIGITALOCEAN', 'ALIBABA');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "guid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "lastLoginAt" TIMESTAMP(3) NOT NULL,
    "roleType" "RoleType" NOT NULL DEFAULT 'USER',
    "accountType" "AccountType" NOT NULL DEFAULT 'INDIVIDUAL',
    "subscriptionType" "SubscriptionType" NOT NULL DEFAULT 'FREE',
    "userName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "displayName" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Report" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "reportVersion" TEXT NOT NULL,
    "lhVersion" TEXT DEFAULT '10.2.0',
    "executionTime" DOUBLE PRECISION NOT NULL,
    "isPrivate" BOOLEAN DEFAULT false,
    "isTracerouteError" BOOLEAN DEFAULT false,
    "isLighthouseError" BOOLEAN DEFAULT false,
    "regionName" TEXT NOT NULL,
    "traceroute" JSONB,
    "fcpScore" DOUBLE PRECISION,
    "fcpValue" DOUBLE PRECISION,
    "lcpScore" DOUBLE PRECISION,
    "lcpValue" DOUBLE PRECISION,
    "tbtScore" DOUBLE PRECISION,
    "tbtValue" DOUBLE PRECISION,
    "ttiScore" DOUBLE PRECISION,
    "ttiValue" DOUBLE PRECISION,
    "clsScore" DOUBLE PRECISION,
    "srtValue" DOUBLE PRECISION,
    "srtItems" DOUBLE PRECISION,
    "speedIndexScore" DOUBLE PRECISION,
    "speedIndexValue" DOUBLE PRECISION,
    "bootupTimeScore" DOUBLE PRECISION,
    "bootupTimeValue" DOUBLE PRECISION,
    "bootupTimeItems" JSONB,
    "bootupTimeSummary" JSONB,
    "thirdPartyItems" JSONB,
    "thirdPartySummary" JSONB,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Region" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "expiryAt" TIMESTAMP(3) NOT NULL,
    "providerType" "ProviderType",
    "name" TEXT NOT NULL,
    "apiKey" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "machineConfig" JSONB,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_guid_key" ON "User"("guid");

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Region_name_key" ON "Region"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Region_apiKey_key" ON "Region"("apiKey");

-- CreateIndex
CREATE UNIQUE INDEX "Region_url_key" ON "Region"("url");

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_regionName_fkey" FOREIGN KEY ("regionName") REFERENCES "Region"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
