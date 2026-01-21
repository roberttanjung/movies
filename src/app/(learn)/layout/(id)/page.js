'use client';

import { useEffect, useCallback, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

export default function FetchingProduct() {
    const [data, setData] = useState({ title: '',year: '',rated: '',released: '' }); 
    const params = useParams();

const onGetData = useCallback(async () => {
    try {
      const response = await axios.get(`https://fooapi.com/api/movies/${params.id}`);
      console.log('Fetched data:', response);
      setData(prev => ({ ...prev, title: response.data.data.title }));
      setData(prev => ({ ...prev, year : response.data.data.year }));
      setData(prev => ({ ...prev, rated: response.data.data.rated }));  
      setData(prev => ({ ...prev, released: response.data.data.released }));  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [params.id])

  useEffect(() => {
    onGetData();
  }, [onGetData]);

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Judul Film</th>
                    <th>Tahun Rilis</th>
                    <th>Rating Umur</th>
                    <th>Tanggal Rilis</th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <td>{data.title}</td>
                        <td>{data.year}</td>
                        <td>{data.rated}</td>
                        <td>{data.released}</td>
                    </tr>
            </tbody>
        </table>
    </div>    
  );
}