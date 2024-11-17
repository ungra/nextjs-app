import { URL } from "../../../(home)/page";

async function getMovies(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  console.log("start fetching");
  const [movie, video] = await Promise.all([getMovies(id), getVideos(id)]);

  return <h1>{movie.title}</h1>;
}
