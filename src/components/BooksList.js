import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { booksState, fetchBooks } from '../redux/books/booksSlice';
import Book from './Book';

export default function BooksList() {
  const dispatch = useDispatch();
  const { books, error, status } = useSelector(booksState);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
  }, [dispatch, status]);

  if (status === 'succeeded') {
    return (
      <div className="books-list">
        {books.map((item) => (
          <Book
            key={item.item_id}
            id={item.item_id}
            category={item.category}
            title={item.title}
            author={item.author}
          />
        ))}
      </div>
    );
  }
  if (status === 'failed') {
    return (<p>{ error }</p>);
  }
}
