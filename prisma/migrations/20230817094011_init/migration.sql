-- CreateTable
CREATE TABLE "Apartment" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "floor" TEXT NOT NULL,
    "doorNumber" TEXT NOT NULL,

    CONSTRAINT "Apartment_pkey" PRIMARY KEY ("id")
);
