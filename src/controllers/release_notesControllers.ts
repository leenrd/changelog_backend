import prisma from "../utils/db";

const getAllReleaseNotes = async (req, res) => {
  try {
    const updates = await prisma.update.findMany({
      where: {
        productId: req.user.id,
      },
      include: {
        releaseNotes: true,
      },
    });

    const release_notes = updates.reduce((allReleaseNotes, update) => {
      return [...allReleaseNotes, ...update.releaseNotes];
    }, []);

    res.json({ data: release_notes });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getReleaseNotesById = async (req, res) => {
  const { id } = req.params;
  try {
    const release_note = await prisma.releaseNote.findFirst({
      where: {
        id,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateReleaseNotesById = async (req, res) => {
  const { id } = req.params;
  try {
    const update = await prisma.update.findMany({
      where: {
        productId: req.user.id,
      },
      include: {
        releaseNotes: true,
      },
    });

    const rn_s = update.reduce((allReleaseNotes, rn) => {
      return [...allReleaseNotes, ...rn.releaseNotes];
    }, []);
    const match = rn_s.find((rs) => rs.id === id);

    if (!match) {
      return res.json({ message: "no match found" });
    }
    const updatedReleaseNotes = await prisma.update.update({
      where: {
        id,
      },
      data: req.body,
    });

    res.json({ data: updatedReleaseNotes });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteReleaseNotesById = async (req, res) => {
  const { id } = req.params;
  try {
    const update = await prisma.update.findMany({
      where: {
        productId: req.user.id,
      },
      include: {
        releaseNotes: true,
      },
    });

    const rn_s = update.reduce((allReleaseNotes, rn) => {
      return [...allReleaseNotes, ...rn.releaseNotes];
    }, []);
    const match = rn_s.find((rs) => rs.id === id);

    if (!match) {
      return res.json({ message: "no match found" });
    }
    const deleted = await prisma.releaseNote.delete({
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

const addReleaseNotes = async (req, res) => {
  const update = await prisma.update.findUnique({
    where: {
      id: req.user.id,
    },
  });

  if (!update) {
    return res.status(500).json({ error: "Product not found" });
  }

  try {
    const releaseNote = await prisma.releaseNote.create({
      data: req.body,
    });
    res.json({ data: releaseNote });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export {
  getAllReleaseNotes,
  getReleaseNotesById,
  updateReleaseNotesById,
  deleteReleaseNotesById,
  addReleaseNotes,
};
