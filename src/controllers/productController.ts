import prisma from "../utils/db";

const getAllProducts = async (req, res) => {
  const { id } = req.user;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
      include: {
        products: true,
      },
    });

    res.json({ data: user.products });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await prisma.product.findFirst({
      where: {
        id,
        belongsToId: req.user.id,
      },
    });

    res.json({ data: product });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateProductById = async (req, res) => {
  const { id } = req.params;

  try {
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
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await prisma.product.delete({
      where: {
        id_belongsToId: {
          id,
          belongsToId: req.user.id,
        },
      },
    });

    res.json({ data: deleted });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addProduct = async (req, res) => {
  try {
    const product = await prisma.product.create({
      data: {
        name: req.body.name,
        belongsToId: req.user.id,
      },
    });

    res.json({ data: product });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export {
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  addProduct,
};
