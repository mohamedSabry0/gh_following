import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

export default function BookForm() {
  const [inputs, setInputs] = useState({ title: '', author: '', category: 'Action' });
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const { title, author, category } = inputs;

    const Book = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBook(Book));
    setInputs({
      title: '',
      author: '',
      category: 'Action',
    });
  };
  return (

    <form method="post" onSubmit={submitHandler}>
      <h3>ADD NEW BOOK</h3>
      <label htmlFor="title">
        <input
          id="title"
          name="title"
          placeholder="Book title"
          value={inputs.title}
          onChange={(e) => {
            setInputs({ ...inputs, title: e.target.value });
          }}
        />
      </label>
      <label htmlFor="author">
        <input
          id="author"
          name="author"
          placeholder="Author"
          value={inputs.author}
          onChange={(e) => {
            setInputs({ ...inputs, author: e.target.value });
          }}
        />
      </label>

      <label htmlFor="category">
        <select
          name="category"
          value={inputs.category}
          onChange={(e) => {
            setInputs({ ...inputs, category: e.target.value });
          }}
        >
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
      </label>
      <button className="add-button" type="submit">Add Book</button>
    </form>
  );
}
