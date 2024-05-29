/*
  Warnings:

  - Made the column `brandsId` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_brandsId_fkey";

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "brandsId" SET NOT NULL;

-- CreateTable
CREATE TABLE "_CartToCombo" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CartToCombo_AB_unique" ON "_CartToCombo"("A", "B");

-- CreateIndex
CREATE INDEX "_CartToCombo_B_index" ON "_CartToCombo"("B");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_brandsId_fkey" FOREIGN KEY ("brandsId") REFERENCES "Brands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CartToCombo" ADD CONSTRAINT "_CartToCombo_A_fkey" FOREIGN KEY ("A") REFERENCES "Cart"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CartToCombo" ADD CONSTRAINT "_CartToCombo_B_fkey" FOREIGN KEY ("B") REFERENCES "Combo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
