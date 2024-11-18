import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideo from "../../../../components/movie-video";
import { Metadata } from "next";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({
  params: { id },
}: IParams): Promise<Metadata> {
  const movie = await getMovie(id);
  return {
    title: movie?.title || "Unknown Movie",
  };
}

export default async function MovieDetail({ params }: IParams) {
  const { id } = params;
  return (
    <div>
      <Suspense fallback={<h1>Loading Movie Info...</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading Movie Video...</h1>}>
        <MovieVideo id={id} />
      </Suspense>
    </div>
  );
}
