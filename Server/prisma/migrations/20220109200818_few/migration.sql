/*
  Warnings:

  - You are about to drop the column `UserId` on the `trening` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `trening` DROP FOREIGN KEY `trening_UserId_fkey`;

-- AlterTable
ALTER TABLE `trening` DROP COLUMN `UserId`;
