const usersController = require("../controllers/users.controller");

var express = require("express");
var router = express.Router();

router.post("/register", usersController.register);
/**
 * @swagger
 * /users/register:
 *   post:
 *      description: Used to register user
 *      tags:
 *          - users
 *      parameters:
 *          - in: body
 *            name: User
 *            description: User data
 *            schema:
 *              type: object
 *              required:
 *                 - firstName
 *                 - lastName
 *                 - emailId
 *                 - password
 *              properties:
 *                  firstName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Younis
 *                  lastName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Rahman
 *                  emailId:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                      example: younisrahman@gmail.com
 *                  password:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: 12345jk
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 * */

router.post("/login", usersController.login);
/**
 * @swagger
 * /users/login:
 *   post:
 *      description: Used to login user
 *      tags:
 *          - users
 *      parameters:
 *          - in: body
 *            name: User
 *            description: User data
 *            schema:
 *              type: object
 *              required:
 *                 - emailId
 *                 - password
 *              properties:
 *                  emailId:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                      example: younisrahman@gmail.com
 *                  password:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: 12345jk
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

module.exports = router;
