import Link from "next/link";

export const metadata = {
  title: "Home",
};

export const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  const json = await fetch(URL).then((response) => response.json());
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      <h1>HOME PAGE</h1>
      {movies.map((movie) => (
        <li key={movies.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
