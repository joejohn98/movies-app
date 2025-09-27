"use server";

import { redirect } from "next/navigation";
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
  redirect("/all-movies");
};

export const editMovie = async (formData: FormData) => {
  const movieId = formData.get("movieId") as string;
  const newTitle = formData.get("title") as string;
  const newDescription = formData.get("description") as string;
  const newImageUrl = formData.get("imageUrl") as string;

  await prisma.movie.update({
    where: {
      id: movieId,
    },
    data: {
      title: newTitle,
      description: newDescription,
      image: newImageUrl,
    },
  });
};
