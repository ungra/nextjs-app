import styles from "../styles/movie-videos.module.css";

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getVideo(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  //   await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const video = await getVideo(id);
  return (
    <div className={styles.container}>
      {video.map((v) => (
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
