import MovieForm from '@/views/Movies/Form';

export default function EditMoviePage() {
  return (
    <div className='card-container'>
      <h1>Halaman Edit Film</h1>
      <div>
        <MovieForm direction="edit" />
      </div>
    </div>
  );
}
