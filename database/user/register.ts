import prismaClient from "../../prisma/prisma";

export const register = async (email: string, password: string) => {
  const user = await prismaClient.user.findFirst({
    where: {
      email: email,
    },
  });
  if (user) createError("Email is already exists");
  return await prismaClient.user.create({
    data: {
        email: email,
        password: password
    }
  });
};
