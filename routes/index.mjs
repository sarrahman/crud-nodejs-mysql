import express from "express";
import {
  addProducts,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/Products.mjs";

const router = express.Router();

router.get("/api/products", getProducts);
router.post("/api/product", addProducts);
router.get("/api/product/:id", getProductById);
router.patch("/api/product/:id", updateProduct);
router.delete("/api/product/:id", deleteProduct);

export default router;
