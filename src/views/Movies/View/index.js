'use client';

import { useEffect, useCallback, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import PageViewRow from "./Row";

const PageView = () => {

  const [data, setData] = useState([]); 
    const {push} = useRouter();  

    useEffect(() => {
      const onGetData = async () => {
        try {
          const response = await axios.get('https://fooapi.com/api/movies');
          console.log('Fetched data:', response);
          setData(response.data.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      onGetData();
    }, []);

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