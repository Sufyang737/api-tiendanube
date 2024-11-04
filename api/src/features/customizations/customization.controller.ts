import { NextFunction, Request, Response } from "express";
import { StatusCode } from "@utils";
import { CustomizationService } from "@features/customizations";

class AuthenticationController {
  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      if (!req.body.store_id) {
        return res.status(StatusCode.BAD_REQUEST).json({
          message: "Store id is required",
        });
      }

      const data = await CustomizationService.createCustomization(req.body);
      return res.status(StatusCode.OK).json(data);
    } catch (e) {
      return next(e);
    }
  }

  async get(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const store_id = +req.params.store_id;

      if (!store_id) {
        return res.status(StatusCode.BAD_REQUEST).json({
          message: "Store id is required",
        });
      }

      if (typeof store_id !== "number") {
        return res.status(StatusCode.BAD_REQUEST).json({
          message: "Store id must be a number",
        });
      }

      const data = await CustomizationService.getCustomization(+store_id);
      if (!data) {
        return res.status(StatusCode.BAD_REQUEST).json({
          message: "Store not found",
        });
      }
      return res.status(StatusCode.OK).json(data);
    } catch (e) {
      return next(e);
    }
  }
}

export default new AuthenticationController();
