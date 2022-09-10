-- CreateTable
CREATE TABLE "Notes" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "note" VARCHAR(100) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Notes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Notes" ADD CONSTRAINT "Notes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
