import styles from "../../styles/home.module.css";
import Movie from "../../components/movie";

export const metadata = {
  title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 1000);
  // });
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch movies: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (e) {
    console.log(e);
    return [];
  }
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
