import prisma from "../utils/db";

const getAllProducts = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      products: true,
    },
  });

  res.json({ data: user.products });
};

const getProductById = async (req, res) => {
  const id = req.params.id;

  const product = await prisma.product.findFirst({
    where: {
      id,
      belongsToId: req.user.id,
    },
  });

  res.json({ data: product });
};

const updateProductById = async (req, res) => {
  const id = req.params.id;

  const updated_product = await prisma.product.update({
    where: {
      id: req.params.id,
      belongsToId: req.user.id,
    },
    data: {
      name: req.body.name,
    },
  });

  res.json({ data: updated_product });
};

const deleteProductById = async (req, res) => {
  const deleted = await prisma.product.delete({
    where: {
      // id: req.params.id,
      // belongsToId: req.user.id,
      // can also do this ^ but this down here optimized by indexing the schema in prisma file
      id_belongsToId: {
        id: req.params.id,
        belongsToId: req.user.id,
      },
    },
  });

  res.json({ data: deleted });
};

const addProduct = async (req, res) => {
  const product = await prisma.product.create({
    data: {
      name: req.body.name,
      belongsToId: req.user.id,
    },
  });

  res.json({ data: product });
};

export {
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  addProduct,
};
