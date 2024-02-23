import { body } from "express-validator";
import { error } from "console";
import prisma from "../utils/db";

const getAllUpdates = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        belongsToId: req.user.id,
      },
      include: {
        updates: true,
      },
    });

    const updates = products.reduce((allUpdates, product) => {
      return [...allUpdates, ...product.updates];
    }, []);

    res.json({ data: updates });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getUpdateById = async (req, res) => {
  const { id } = req.params;
  try {
    const update = await prisma.update.findUnique({
      where: {
        id,
      },
    });
  } catch (e) {
    console.log(e);
    res(500).json({ error: "Internal Server Error" });
  }
};

const updateUpdateById = async (req, res) => {
  const { id } = req.params;

  try {
    const products = await prisma.product.findMany({
      where: {
        belongsToId: req.user.id,
      },
      include: {
        updates: true,
      },
    });

    const updates = products.reduce((allUpdates, product) => {
      return [...allUpdates, ...product.updates];
    }, []);
    const match = updates.find((update) => update.id === id);
    if (!match) {
      return res.json({ message: "no match found" });
    }
    const updatedUpdates = await prisma.update.update({
      where: {
        id,
      },
      data: req.body,
    });

    res.json({ data: updatedUpdates });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteUpdateById = async (req, res) => {
  const { id } = req.params;

  try {
    const products = await prisma.product.findMany({
      where: {
        belongsToId: req.user.id,
      },
      include: {
        updates: true,
      },
    });

    const updates = products.reduce((allUpdates, product) => {
      return [...allUpdates, ...product.updates];
    }, []);
    const match = updates.find((update) => update.id === id);
    if (!match) {
      return res.json({ message: "no match found" });
    }
    const deleted = await prisma.update.delete({
      where: {
        id,
      },
    });

    res.json({ data: deleted });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addUpdate = async (req, res) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.body.id,
    },
  });

  if (!product) {
    return res.status(500).json({ error: "Product not found" });
  }

  try {
    const update = await prisma.update.create({
      data: req.body,
    });
    res.json({ data: update });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export {
  getAllUpdates,
  getUpdateById,
  updateUpdateById,
  deleteUpdateById,
  addUpdate,
};
