import { URL } from "../app/constants";
import styles from "../styles/movie-videos.module.css";

async function getVideo(id: string) {
  // console.log(`Fetching videos: ${Date.now()}`);
  //   await new Promise((resolve) => setTimeout(resolve, 5000));
  try {
    const response = await fetch(`${URL}/${id}/videos`);
    if (!response.ok) {
      throw new Error(`Fetch to the video data for ID ${id}`);
    }
    const json = await response.json();
    return json;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export default async function MovieVideos({ id }: { id: string }) {
  const video = await getVideo(id);
  return (
    <div className={styles.container}>
      {video.slice(0, 8).map((v) => (
        <iframe
          key={v.id}
          src={`https://youtube.com/embed/${v.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={v.name}
        />
      ))}
    </div>
  );
}
