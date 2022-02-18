import Products from "../models/Products.mjs";

export const getProducts = async (req, res) => {
  try {
    const products = await Products.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const addProducts = async (req, res) => {
  try {
    await Products.create(req.body);
    res.status(201).json({
      message: "produk berhasil di tambahkan",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Products.findByPk(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    await Products.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({
      message: "produk berhasil di update",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Products.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({
      message: "produk berhasil di hapus",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
