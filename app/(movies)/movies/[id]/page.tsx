import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideo from "../../../../components/movie-video";

export default async function MovieDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  return (
    <div>
      <h3>Movie detail page!!</h3>
      <Suspense fallback={<h1>Loading Movie Info...</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading Movie Video...</h1>}>
        <MovieVideo id={id} />
      </Suspense>
    </div>
  );
}
