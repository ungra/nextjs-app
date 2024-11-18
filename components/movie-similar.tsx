import { URL } from "../app/constants";

async function getMovieSimilar(id: string) {
  try {
    const response = await fetch(`${URL}/${id}/similar`);
    if (!response.ok) {
      throw new Error(`Fail to the Movie similar data for ID ${id}`);
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function MovieSimilar({ id }: { id: string }) {
  const movieSimilar = await getMovieSimilar(id);
  return (
    <div>
      {movieSimilar.slice(0, 5).map((similar) => (
        <h3>{similar.title}</h3>
      ))}
    </div>
  );
}
