'use client';

import { useEffect, useCallback, useState, use } from "react";
import axios from "axios";
import PageViewRow from "./Row";
import { useSearchParams } from "next/navigation";

const PageView = () => {
  const searchParams = useSearchParams();
  const searchTitle = searchParams.get('title');
  const [data, setData] = useState([]);

  useEffect(() => {
    const onGetData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/movies?title=${searchTitle || ''}`);
        console.log('Fetched data:', response);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    onGetData();


  }, [searchTitle]);

  return (
    <div className="table-container">
      <table className="movie-table">
        <thead>
          <tr>
            <th style={{ width: '35%' }}>Judul</th>
            <th style={{ width: '20%' }}>Sutradara</th>
            <th style={{ width: '20%' }}>Penulis</th>
            <th style={{ width: '25%' }}>Aktor</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <PageViewRow
              key={item.id}
              id={item.id}
              title={item.title}
              imdbRating={item.imdbRating}
              year={item.year}
              genre={item.genre}
              director={item.director}
              writer={item.writer}
              actors={item.actors}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PageView;