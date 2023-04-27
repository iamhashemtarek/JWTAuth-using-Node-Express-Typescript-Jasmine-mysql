import { Router } from "express";
import * as usersController from "../../controllers/users.controllers";

const router = Router();

router.route("/").get(usersController.getMany).post(usersController.create);

router
  .route("/:id")
  .get(usersController.getOne)
  .put(usersController.updateOne)
  .delete(usersController.deleteOne);

export default router;
