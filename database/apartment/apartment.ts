import { Apartment } from "models/apartment/apartment.interface";
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

export const insertApartment = async (aparments: Apartment[]) => {
    return await prismaClient.apartment.createMany({
        data: aparments
    });
}