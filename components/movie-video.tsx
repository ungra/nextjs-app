import { URL } from "../app/(home)/page";

async function getVideo(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  //   await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideo({ id }: { id: string }) {
  const video = await getVideo(id);
  return <h6>{JSON.stringify(video)}</h6>;
}
