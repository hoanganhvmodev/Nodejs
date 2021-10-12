-- MySQL Script generated by MySQL Workbench
-- Tue Oct  5 09:04:21 2021
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema db_project
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db_project
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_project` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `db_project` ;

-- -----------------------------------------------------
-- Table `db_project`.`api`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_project`.`api` (
  `id` VARCHAR(36) NOT NULL,
  `url` VARCHAR(50) NOT NULL,
  `method` VARCHAR(36) NOT NULL,
  `description` VARCHAR(50) NOT NULL,
  `isDeleted` INT NULL DEFAULT NULL,
  `createBy` VARCHAR(50) NULL DEFAULT NULL,
  `createAt` DATETIME NULL DEFAULT NULL,
  `updateAt` DATETIME NULL DEFAULT NULL,
  `updateaBy` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id` (`id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `db_project`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_project`.`user` (
  `id` VARCHAR(36) NOT NULL,
  `username` VARCHAR(50) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `age` INT NULL DEFAULT NULL,
  `email` VARCHAR(30) NULL DEFAULT NULL,
  `phone` VARCHAR(12) NULL DEFAULT NULL,
  `address` VARCHAR(100) NULL DEFAULT NULL,
  `isActive` INT NULL DEFAULT NULL,
  `isDelated` INT NULL DEFAULT NULL,
  `createBy` VARCHAR(50) NULL DEFAULT NULL,
  `createAt` DATETIME NULL DEFAULT NULL,
  `updateAt` DATETIME NULL DEFAULT NULL,
  `updateaBy` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id` (`id` ASC) VISIBLE,
  UNIQUE INDEX `username` (`username` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `db_project`.`employee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_project`.`employee` (
  `id` VARCHAR(36) NOT NULL,
  `userid` VARCHAR(36) NOT NULL,
  `firsName` VARCHAR(20) NOT NULL,
  `lastName` VARCHAR(20) NOT NULL,
  `avatar` VARCHAR(50) NULL DEFAULT NULL,
  `managerid` VARCHAR(36) NOT NULL,
  `isDeleted` INT NULL DEFAULT NULL,
  `createBy` VARCHAR(50) NULL DEFAULT NULL,
  `createAt` DATETIME NULL DEFAULT NULL,
  `updateAt` DATETIME NULL DEFAULT NULL,
  `updateaBy` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id` (`id` ASC) VISIBLE,
  UNIQUE INDEX `userid` (`userid` ASC) VISIBLE,
  CONSTRAINT `employee_ibfk_1`
    FOREIGN KEY (`userid`)
    REFERENCES `db_project`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `db_project`.`form`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_project`.`form` (
  `id` VARCHAR(36) NOT NULL,
  `userid` VARCHAR(36) NOT NULL,
  `content` VARCHAR(250) NOT NULL,
  `status` VARCHAR(100) NOT NULL,
  `dueDate` VARCHAR(100) NULL DEFAULT NULL,
  `isDeleted` INT NULL DEFAULT NULL,
  `createBy` VARCHAR(50) NULL DEFAULT NULL,
  `createAt` DATETIME NULL DEFAULT NULL,
  `updateAt` DATETIME NULL DEFAULT NULL,
  `updateaBy` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id` (`id` ASC) VISIBLE,
  UNIQUE INDEX `userid` (`userid` ASC) VISIBLE,
  CONSTRAINT `form_ibfk_1`
    FOREIGN KEY (`userid`)
    REFERENCES `db_project`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `db_project`.`formdetail`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_project`.`formdetail` (
  `id` VARCHAR(36) NOT NULL,
  `formid` VARCHAR(36) NOT NULL,
  `content` VARCHAR(250) NOT NULL,
  `managerComment` VARCHAR(250) NOT NULL,
  `isDeleted` INT NULL DEFAULT NULL,
  `createBy` VARCHAR(50) NULL DEFAULT NULL,
  `createAt` DATETIME NULL DEFAULT NULL,
  `updateAt` DATETIME NULL DEFAULT NULL,
  `updateaBy` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id` (`id` ASC) VISIBLE,
  UNIQUE INDEX `formid` (`formid` ASC) VISIBLE,
  CONSTRAINT `formdetail_ibfk_1`
    FOREIGN KEY (`formid`)
    REFERENCES `db_project`.`form` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `db_project`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_project`.`role` (
  `id` VARCHAR(36) NOT NULL,
  `name` VARCHAR(20) NOT NULL,
  `description` VARCHAR(36) NOT NULL,
  `isDeleted` INT NULL DEFAULT NULL,
  `createBy` VARCHAR(50) NULL DEFAULT NULL,
  `createAt` DATETIME NULL DEFAULT NULL,
  `updateAt` DATETIME NULL DEFAULT NULL,
  `updateaBy` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id` (`id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `db_project`.`role_permission`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_project`.`role_permission` (
  `id` VARCHAR(36) NOT NULL,
  `roleid` VARCHAR(36) NOT NULL,
  `apiid` VARCHAR(36) NOT NULL,
  `isDeleted` INT NULL DEFAULT NULL,
  `createBy` VARCHAR(50) NULL DEFAULT NULL,
  `createAt` DATETIME NULL DEFAULT NULL,
  `updateAt` DATETIME NULL DEFAULT NULL,
  `updateaBy` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id` (`id` ASC) VISIBLE,
  INDEX `roleid` (`roleid` ASC) VISIBLE,
  INDEX `apiid` (`apiid` ASC) VISIBLE,
  CONSTRAINT `role_permission_ibfk_1`
    FOREIGN KEY (`roleid`)
    REFERENCES `db_project`.`role` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `role_permission_ibfk_2`
    FOREIGN KEY (`apiid`)
    REFERENCES `db_project`.`api` (`id`)
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `db_project`.`user_role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_project`.`user_role` (
  `id` VARCHAR(36) NOT NULL,
  `userid` VARCHAR(36) NOT NULL,
  `roleid` VARCHAR(36) NOT NULL,
  `isDeleted` INT NULL DEFAULT NULL,
  `createBy` VARCHAR(50) NULL DEFAULT NULL,
  `createAt` DATETIME NULL DEFAULT NULL,
  `updateAt` DATETIME NULL DEFAULT NULL,
  `updateaBy` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id` (`id` ASC) VISIBLE,
  INDEX `userid` (`userid` ASC) VISIBLE,
  INDEX `roleid` (`roleid` ASC) VISIBLE,
  CONSTRAINT `user_role_ibfk_1`
    FOREIGN KEY (`userid`)
    REFERENCES `db_project`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `user_role_ibfk_2`
    FOREIGN KEY (`roleid`)
    REFERENCES `db_project`.`role` (`id`)
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
