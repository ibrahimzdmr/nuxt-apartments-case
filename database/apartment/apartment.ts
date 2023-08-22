import { Apartment } from "~/models/apartment/apartment.interface";
import prismaClient from "~/prisma/prisma";

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

export const deleteApartment = async (apartmentId: string) => {
    return await prismaClient.apartment.delete({
        where: {
            id: apartmentId
        }
    });
}

export const updateApartment = async (apartment: Apartment) => {
    return await prismaClient.apartment.update({
        where: {
            id: apartment.id
        },
        data: {
            address: apartment.address,
            doorNumber: apartment.doorNumber,
            floor: apartment.floor
        }
    })
}