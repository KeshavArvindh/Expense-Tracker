const express = require("express");
const usersController = require("../controllers/usersCtrl");
const isAuthenticated = require("../middlewares/isAuth");
const userRouter = express.Router();

//1. This is for Registering
userRouter.post("/api/v1/users/register", usersController.register);

//2. This is for Logging in
userRouter.post("/api/v1/users/login", usersController.login);

//3. This is for getting the Profile 
userRouter.get(
  "/api/v1/users/profile",
  isAuthenticated,
  usersController.profile
);

//4. This is for changing the password 
userRouter.put(
  "/api/v1/users/change-password",
  isAuthenticated,
  usersController.changeUserPassword
);

//5. This is for updating the profile
userRouter.put(
  "/api/v1/users/update-profile",
  isAuthenticated,
  usersController.updateUserProfile
);

module.exports = userRouter;