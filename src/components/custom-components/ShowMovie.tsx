"use client";

import { useState } from "react";

// UI
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Dialog, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { DialogContent, DialogHeader } from "../ui/dialog";
import { Label } from "../ui/label";

// Actions
import * as actions from "@/lib/actions/index";

interface MovieProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const ShowMovie = ({ data }: { data: MovieProps }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [updatedMovie, setUpdatedMovie] = useState({ ...data });

  const handleUpdateMovie = (
    field: keyof MovieProps,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUpdatedMovie((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <Card className="w-[340px]">
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
        <CardContent>
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-[340px] object-cover rounded-md"
          />
          <p className="mt-2">{data.description}</p>

          {/* Delete Button */}
          <form action={actions.deleteMovie} className="mt-4">
            <Input type="hidden" name="movieId" value={data.id} />
            <Button className="bg-red-500 px-4 py-2 text-white"> Delete</Button>
          </form>

          {/* Edie Dialog */}
          <Dialog
            open={openDialog}
            onOpenChange={() => setOpenDialog(!openDialog)}
          >
            <DialogTrigger asChild>
              <Button variant="outline" className="mt-2">
                Edit
              </Button>
            </DialogTrigger>

            <DialogContent className="">
              <DialogHeader>
                <DialogTitle>Edit Movie</DialogTitle>
                <form action={actions.editMovie} className="space-y-4">
                  <div>
                    <Label>Title</Label>
                    <Input
                      type="text"
                      name="title"
                      value={updatedMovie.title}
                      onChange={(e) => handleUpdateMovie("title", e)}
                    />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <textarea
                      name="description"
                      value={updatedMovie.description}
                      onChange={(e) => handleUpdateMovie("description", e)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <Label>Image URL</Label>
                    <Input
                      type="text"
                      name="imageUrl"
                      value={updatedMovie.image}
                      onChange={(e) => handleUpdateMovie("image", e)}
                    />
                  </div>
                  <Input type="hidden" name="movieId" value={data.id} />
                  <Button type="submit" onClick={() => setOpenDialog(false)}>
                    {" "}
                    Save
                  </Button>
                </form>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </CardContent>
      </CardHeader>
    </Card>
  );
};
export default ShowMovie;
