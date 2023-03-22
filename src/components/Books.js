import { useSelector } from 'react-redux';
import { booksState } from '../redux/books/booksSlice';
import BookForm from './BookForm';
import BooksList from './BooksList';
import LoadingSpinner from './LoadingSpinner';

export default function Books() {
  const { status } = useSelector(booksState);
  return (
    <div className="books-page">
      <BooksList />
      <LoadingSpinner status={status} />
      <BookForm />
    </div>
  );
}
