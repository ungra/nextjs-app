import { URL } from "../app/constants";

async function getMovieProviders(id: string) {
  try {
    const response = await fetch(`${URL}/${id}/providers`);
    if (!response.ok) {
      throw new Error(`Fail to the movie provider for ID ${id}`);
    }
    return response.json();
  } catch (e) {
    console.log(e);
  }
}

export default async function MovieProviders({ id }: { id: string }) {
  const providers = await getMovieProviders(id);
  console.log(Object.keys(providers));
  return (
    <div>
      {Object.keys(providers)
        .slice(0, 5)
        .map((country) => {
          const { link } = providers[country];
          return <h3>{link}</h3>;
        })}
    </div>
  );
}
