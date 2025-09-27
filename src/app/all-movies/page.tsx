import { prisma } from "@/lib/prisma";
import ShowMovie from "@/components/custom-components/ShowMovie";

const AllMovies = async () => {
  const movies = await prisma.movie.findMany();
  return (
    <div className="w-10/12 mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">All Movies</h1>
      <div className="grid grid-cols-3 gap-3">
        {movies.length > 0 ? (
          movies.map((m) => <ShowMovie key={m.id} data={m} />)
        ) : (
          <p>No Movies added yet.</p>
        )}
      </div>
    </div>
  );
};

export default AllMovies;
