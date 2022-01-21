/*
  Warnings:

  - You are about to drop the column `UserEmail` on the `trening` table. All the data in the column will be lost.
  - Added the required column `UserName` to the `trening` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `trening` DROP COLUMN `UserEmail`,
    ADD COLUMN `UserName` VARCHAR(200) NOT NULL;
