'use client';

import Link from "next/link";
import { useState } from "react";

const PageViewRow = ({ id, title, imdbRating, year, genre, director, writer, actors }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <tr>
      <td>
        <div className="tooltip">
        <Link href={`/movie/view/${id}`} className="movie-title">{title}</Link>
        </div>
        <div className="movie-meta">
        <span className="star">★{imdbRating}</span> 
        <span>|</span>
        <span>{year}</span>
        <span>{genre}</span>
        </div>
      </td>
      <td>{director}</td>
      <td>{writer}</td>
      <td>{actors}</td>
  </tr>
  );
}

export default PageViewRow;