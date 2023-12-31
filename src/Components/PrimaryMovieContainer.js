import React, { memo } from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const PrimaryMovieContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movie?.nowPlayingMovies
  );
  if (!nowPlayingMovies?.length) return null;
  const movieFocus = nowPlayingMovies[2];

  return (
    <div>
      <VideoTitle movie={movieFocus} />
      <VideoBackground movieId={movieFocus.id} />
    </div>
  );
};

export default memo(PrimaryMovieContainer);
