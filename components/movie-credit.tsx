import { URL } from "../app/constants";

async function getMovieCredit(id: string) {
  try {
    const response = await fetch(`${URL}/${id}/credits`);
    if (!response.ok) {
      throw new Error(`Fail to the Movie Credit data for ID ${id}`);
    }
    return response.json();
  } catch (e) {
    console.log(e);
  }
}

export default async function MovieCredits({ id }: { id: string }) {
  const credits = await getMovieCredit(id);
  return (
    <div>
      {credits.slice(0, 5).map((credit) => (
        <h3>
          {credit.character}:{credit.name}
        </h3>
      ))}
    </div>
  );
}
