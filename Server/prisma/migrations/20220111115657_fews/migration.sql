-- CreateTable
CREATE TABLE `post` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `First_Name` VARCHAR(200) NOT NULL,
    `Last_Name` VARCHAR(200) NOT NULL,
    `Title` TINYTEXT NOT NULL,
    `Subtitle` TINYTEXT NOT NULL,
    `Message` LONGTEXT NOT NULL,
    `Email` TINYTEXT NOT NULL,
    `Image` LONGTEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
