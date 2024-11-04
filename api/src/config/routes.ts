import { Router } from "express";
import { AuthenticationController } from "@features/auth";
import { CustomizationController } from "@features/customizations";
import { ProductController } from "@features/product";
import { checkUserCredentialsMiddleware } from "@middlewares";

const routes = Router();
routes.get("/hola", (req, res) => {
  res.send("its Alive");
});
routes.get("/auth/install", AuthenticationController.install);
routes.post("/auth/login", AuthenticationController.login);
routes.param("user_id", checkUserCredentialsMiddleware);
routes.post("/:user_id/products", ProductController.create);
routes.get("/:user_id/products/total", ProductController.getTotal);
routes.get("/:user_id/products", ProductController.getAll);
routes.get("/:user_id/product/:product_id", ProductController.getSingleProduct);
routes.delete("/:user_id/products/:id", ProductController.delete);
routes.get("/customizations/:store_id", CustomizationController.get);
routes.post("/customizations", CustomizationController.create);

export default routes;
