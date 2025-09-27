"use server";

import { prisma } from "../prisma";

export const createMovie = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const image = formData.get("imageUrl") as string;

  await prisma.movie.create({
    data: {
      title,
      description,
      image,
    },
  });
};
