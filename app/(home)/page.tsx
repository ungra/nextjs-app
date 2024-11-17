import { resolve } from "path";
import MovieDetail from "../(movies)/movies/[id]/page";

export const metadata = {
  title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
async function getMovies() {
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      <h1>Hello Home!!</h1>
      <p>{JSON.stringify(movies)}</p>
    </div>
  );
}
