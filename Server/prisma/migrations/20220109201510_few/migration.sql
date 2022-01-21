/*
  Warnings:

  - A unique constraint covering the columns `[UserEmail]` on the table `trening` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `trening_UserEmail_key` ON `trening`(`UserEmail`);
