import { body } from "express-validator";

// validation rules for create and update senario
export const employeeCreateAndUpdateRules: any[] = [
    
  body("firstname")
    .isString()
    .escape()
    .notEmpty()
    .withMessage("Firstname Required")
    .isLength({ min: 6, max: 10 })
    .withMessage("Firstname must be between 6 and 10 characters")
    .matches(/^[A-Za-z0-9 .,'!&]+$/),

  body("lastname")
    .isString()
    .escape()
    .notEmpty()
    .withMessage("Lastname Required")
    .isLength({ min: 6, max: 10 })
    .withMessage("Lastname must be between 6 and 10 characters")
    .matches(/^[A-Za-z0-9 .,'!&]+$/),

  body("email").isEmail().normalizeEmail(),

  body("phone")
    .isString()
    .escape()
    .notEmpty()
    .withMessage("Phone Required")
    .matches(/^[0-9]{10}$/)
    .withMessage("Phone should have 10 numbers"),

  body("gender")
    .escape()
    .notEmpty()
    .matches(/\b(?:M|F)\b/)
    .withMessage("Gender should be either M or F"),

  body("photo").escape().notEmpty().withMessage("Photo Required").isString(),
];
