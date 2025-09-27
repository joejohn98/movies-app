import { prisma } from "@/lib/prisma";
import ShowMovie from "@/components/custom-components/ShowMovie";

const AllMovies = async () => {
  const movies = await prisma.movie.findMany();
  return (
    <div>
      <h1>All Movies</h1>

      <div>
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
