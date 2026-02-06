'use client';

import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

const MovieForm = ({ direction }) => {
  const params = useParams();
  const router = useRouter();
  const isView = direction === "view";

  const [item, setItem] = useState({
    title: '',
    year: '',
    genre: '',
    director: '',
    writer: '',
    actors: '', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "year") {
      const numericValue = value.replace(/[^0-9]/g, "").slice(0, 4);
      setItem((prev) => ({
        ...prev,
        [name]: numericValue,
      }));
      return;
    }
  
    setItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (direction === 'edit') {
      axios(`https://fooapi.com/api/movies/${params.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
        'title': item.title,
        'year':item.year,
        'genre':item.genre,
        'director':item.director,
        'writer':item.writer,
        'actors':item.actors,
         })
      })
      .then(res => res.json())
      .then(data => console.log("Response API:", data))
      .catch(err => console.warn("Fetch Error (Diabaikan):", err));

      try {
        const existingDB = JSON.parse(localStorage.getItem('movies_db')) || [];
        const index = existingDB.findIndex(m => m.id == params.id);
        
        if (index !== -1) {
          existingDB[index] = { ...existingDB[index], ...item };
          
          localStorage.setItem('movies_db', JSON.stringify(existingDB));
          alert("Berhasil mengupdate data!");
        } else {
          alert("Data tidak ditemukan di Local Storage (Mungkin data dummy API).");
        }

        router.refresh();
        router.push('/view'); 
      } catch (err) {
        console.error("Gagal update local:", err);
      }
      return; 
    }
    
    if (direction === 'add') {
      axios.post('http://localhost:3001/movies', JSON.stringify({
        'title': item.title,
        'year': item.year,
        'genre': item.genre,
        'director': item.director,
        'writer': item.writer,
        'actors': item.actors
      }), {
        headers: { 'Content-Type': 'application/json' } 
      })
      .then(res => console.log("Axios Success:", res.data)) 
      .catch(err => console.warn("Axios Error (Simulasi):", err.message));
  } else {
    try {
      const localData = {
        'id': Date.now(), 
        ...item,
      };
  
      const existingDB = JSON.parse(localStorage.getItem('movies_db')) || [];
      localStorage.setItem('movies_db', JSON.stringify([localData, ...existingDB]));
      
      router.refresh();
      router.push(`/movie/view/${params.id}`); 
      
    } catch (err) {
      console.error("Error saving local:", err);
    }
  }
  };

  const getData = useCallback(async () => {
    if (params.id) {
      try {

        const localData = JSON.parse(localStorage.getItem('movies_db')) || [];
        const foundLocal = localData.find(m => m.id == params.id);

        if (foundLocal) {
            setItem(foundLocal);
            return;
        }

        const response = await axios.get(`http://localhost:3001/movies/${params.id}`);
          
        if (response.status === 200) {
          setItem(previous => ({
            ...previous,
            title: response.data.title,
            year: response.data.year,
            genre: response.data.genre,
            director: response.data.director,
            writer: response.data.writer,
            actors: response.data.actors,
          }));
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }
  }, [params.id]);

  useEffect(() => {
    const getData = async () => {
      if (params.id) {
        try {
          const localData = JSON.parse(localStorage.getItem('movies_db')) || [];
          const foundLocal = localData.find(m => m.id == params.id);
  
          if (foundLocal) {
              setItem(foundLocal);
              return;
          }
  
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
        } catch (err) {
          console.error("Error fetching data:", err);
        }
      }
    };

    getData();
  }, [params.id]); 

  const getTitle = () => {
    if (direction === 'add') return "Tambah Movie";
    if (direction === 'edit') return "Edit Movie";
    return "Detail Movie";
  }

  return (
    <div className="card-container">
      <h2 className="form-title">{getTitle()}</h2>
      
      <form>
        <div className="form-group">
          <label className="form-label">Judul</label>
          <input 
            name="title" 
            type="text" 
            className="form-input" 
            value={item.title} 
            onChange={!isView ? handleChange : undefined} 
            readOnly={isView} // Mati jika view
            placeholder="Masukkan judul film"
          />
        </div>

        <div className="form-row">
          <div className="form-col">
            <div className="form-group">
              <label className="form-label">Tahun</label>
              <input 
                name="year"
                type="text"
                inputMode="numeric"
                className="form-input" 
                value={item.year} 
                onChange={!isView ? handleChange : undefined}
                disabled={isView}
                placeholder="Contoh: 2024"
                >
              </input>
            </div>
          </div>
          <div className="form-col">
            <div className="form-group">
              <label className="form-label">Genre</label>
              <input 
                name="genre"
                type="text" 
                className="form-input" 
                value={item.genre} 
                onChange={!isView ? handleChange : undefined}
                readOnly={isView} 
                placeholder="Masukkan genre"
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Sutradara</label>
          <input 
            name="director"
            type="text" 
            className="form-input" 
            value={item.director} 
            onChange={!isView ? handleChange : undefined}
            readOnly={isView} 
            placeholder="Masukkan nama sutradara"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Penulis</label>
          <input 
            name="writer"
            type="text" 
            className="form-input" 
            value={item.writer} 
            onChange={!isView ? handleChange : undefined}
            readOnly={isView} 
            placeholder="Masukkan nama penulis"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Aktor</label>
          <input 
            name="actors"
            type="text" 
            className="form-input" 
            value={item.actors} 
            onChange={!isView ? handleChange : undefined}
            readOnly={isView} 
            placeholder="Masukkan nama aktor"
          />
        </div>

        <div className="btn-group">
          <Link href="/view" className="btn btn-secondary">
            Kembali
          </Link>
          
          {isView ? (
             <Link href={`/movie/edit/${params.id}`} className="btn btn-primary">
               Ubah
             </Link>
          ) : (
             <button type="button" onClick={handleSubmit} className="btn btn-primary">
               {direction === 'add' ? 'Tambah' : 'Simpan'}
             </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MovieForm;