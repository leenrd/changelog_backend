/*
  Warnings:

  - A unique constraint covering the columns `[id,updateId]` on the table `ReleaseNote` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ReleaseNote_id_updateId_key" ON "ReleaseNote"("id", "updateId");
