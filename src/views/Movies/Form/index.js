'use client';

import axios from "axios";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

const MovieForm = ({ direction }) => {
  const params = useParams();

  const [item, setItem ] = useState({
    title: '',
    year: '',
    genre: '',
    director: '',
    writer: '',
    actor: '',
  });

  const getData = useCallback(async () => {
    if (params.id) {
      const response = await axios.get(`https://fooapi.com/api/movies/${params.id}`);

      if (response.status === 200) {
        setItem(previous => ({
          ...previous,
          title: response.data.data.title,
          year: response.data.data.year,
          genre: response.data.data.genre,
          director: response.data.data.director,
          writer: response.data.data.writer,
          actors: response.data.data.actors,
        }));
      }
    }
  }, [params.id]);

  const setup = useCallback(async () => {
    await getData()
  }, [getData]);

  useEffect(() => {
    setup();
  }, [setup]);

  return (
<div className="card-container">
      <h2 className="form-title">Detail Movie</h2>
      
      <form>
        <div className="form-group">
          <label className="form-label">Judul</label>
          <input 
            type="text" 
            className="form-input" 
            value={item.title} 
            disabled={direction === 'view'}
          />
        </div>

        <div className="form-row">
          <div className="form-col">
            <div className="form-group">
              <label className="form-label">Tahun</label>
              <select className="form-select" value={item.year} disabled>
                 <option value={item.year}>{item.year}</option>
              </select>
            </div>
          </div>
          <div className="form-col">
            <div className="form-group">
              <label className="form-label">Genre</label>
              <input 
                type="text" 
                className="form-input" 
                value={item.genre} 
                readOnly 
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Sutradara</label>
          <input 
            type="text" 
            className="form-input" 
            value={item.director} 
            readOnly 
          />
        </div>

        <div className="form-group">
          <label className="form-label">Penulis</label>
          <input 
            type="text" 
            className="form-input" 
            value={item.writer} 
            readOnly 
          />
        </div>

        <div className="form-group">
          <label className="form-label">Aktor</label>
          <input 
            type="text" 
            className="form-input" 
            value={item.actors} 
            readOnly 
          />
        </div>

        <div className="btn-group">
          <Link href="/view" className="btn btn-secondary">
            Kembali
          </Link>
          
          <Link href={`/movie/${params.id}/edit`} className="btn btn-primary">
            Ubah
          </Link>
        </div>
      </form>
    </div>
  );
};

export default MovieForm;
