import MovieForm from '@/views/Movies/Form';

export default function AddMoviePage() {
  

  return (
    <div style={{ color: 'white' }}>
      <h1>Halaman Tambah Film</h1>
      <div>
        <MovieForm direction="add" />
      </div>
    </div>
  );
}