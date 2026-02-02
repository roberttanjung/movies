'use client';

import { useEffect, useCallback, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const PageView = () => {

  const [data, setData] = useState([]); 
    const {push} = useRouter();  

const onGetData = useCallback(async () => {
    try {
      const response = await axios.get('https://fooapi.com/api/movies');
      console.log('Fetched data:', response);
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  useEffect(() => {
    onGetData();
  }, [onGetData]);

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
            <tr key={item.id}>
              <td>
                <div className="tooltip">
                <Link href={`/movie/view/${item.id}`} className="movie-title">{item.title}</Link>
                </div>
                <div className="movie-meta">
                  <span className="star">★{item.imdbRating}</span> 
                  <span>|</span>
                  <span>{item.year}</span>
                  <span>{item.genre}</span>
                </div>
              </td>
              <td>{item.director}</td>
              <td>{item.writer}</td>
              <td>{item.actors}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PageView;