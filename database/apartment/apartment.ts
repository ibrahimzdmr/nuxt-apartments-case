import prismaClient from "../../prisma/prisma";

export const getApartments = () => {
  return prismaClient.apartment.findMany();
};

export const getApartment = (apartmentId: string) => {
    return prismaClient.apartment.findUnique({
        where: {
            id: apartmentId
        }
    });
}