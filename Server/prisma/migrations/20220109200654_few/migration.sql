-- CreateTable
CREATE TABLE `userinput` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Trener` VARCHAR(200) NOT NULL,
    `Plan` VARCHAR(200) NOT NULL,
    `Program` TINYTEXT NOT NULL,
    `Number_Trening` TINYTEXT NOT NULL,
    `Working_team` TINYTEXT NOT NULL,
    `Food` LONGTEXT NOT NULL,
    `Height` INTEGER NOT NULL,
    `Weight` INTEGER NOT NULL,
    `User_name` VARCHAR(200) NOT NULL,
    `User_email` VARCHAR(200) NOT NULL,

    UNIQUE INDEX `userinput_User_email_key`(`User_email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `Role` VARCHAR(45) NOT NULL DEFAULT 'visitor',
    `Status` VARCHAR(45) NOT NULL DEFAULT 'active',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `trening` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `UserName` VARCHAR(200) NOT NULL,
    `Treningtype` VARCHAR(200) NOT NULL,
    `Ponavljanje` VARCHAR(200) NOT NULL,
    `Date` TINYTEXT NOT NULL,
    `Hour` LONGTEXT NOT NULL,
    `Opistreninga` LONGTEXT NOT NULL,
    `Pauze` VARCHAR(200) NOT NULL,
    `UserId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `trening` ADD CONSTRAINT `trening_UserId_fkey` FOREIGN KEY (`UserId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
