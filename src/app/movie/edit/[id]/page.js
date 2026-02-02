import MovieForm from '@/views/Movies/Form';

const PageMovieForm = () => {
  return (
    <div>
      <MovieForm direction="edit" />
    </div>
  );
};

export default function EditMoviePage() {
  return (
    <div className='card-container'>
      <h1>Halaman Tambah Film</h1>
      <p>Lihat? Sidebar dan Header masih ada di sini!</p>
      <div>
        <MovieForm direction="edit" />
      </div>
    </div>
  );
}
