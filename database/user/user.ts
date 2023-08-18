import prismaClient from "../../prisma/prisma";

export const login = (email: string, password: string) => {
    prismaClient.user.findFirstOrThrow({
        where: {
            AND : {
                email: email,
                password: password
            }
        },
    })
};
