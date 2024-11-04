import { NextFunction, Request, Response } from "express";
import { StatusCode } from "@utils";
import { ProductService } from "@features/product";

class ProductController {
  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const data = await ProductService.create(+req.params.user_id);
      return res.status(StatusCode.CREATED).json(data);
    } catch (e) {
      next(e);
    }
  }

  async getTotal(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const data = await ProductService.findAllCount(+req.params.user_id);
      return res.status(StatusCode.OK).json(data);
    } catch (e) {
      next(e);
    }
  }

  async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const data = await ProductService.findAll(+req.params.user_id);
      return res.status(StatusCode.OK).json(data);
    } catch (e) {
      next(e);
    }
  }

  async getSingleProduct(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const data = await ProductService.findAll(+req.params.user_id);
      // Asegúrate de convertir el parámetro 'product_id' a número antes de la comparación.
      const result = data.find((item) => +item.id === +req.params.product_id);

      if (result) {
        return res
          .status(StatusCode.OK)
          .json({ imageUrl: result.images[0].src }); // Devuelve solo el producto encontrado
      } else {
        return res
          .status(StatusCode.NOT_FOUND)
          .json({ message: "Product not found" });
      }
    } catch (e) {
      next(e);
    }
  }
  async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const data = await ProductService.delete(
        +req.params.user_id,
        req.params.id as string
      );
      return res.status(StatusCode.OK).json(data);
    } catch (e) {
      next(e);
    }
  }
}

export default new ProductController();
