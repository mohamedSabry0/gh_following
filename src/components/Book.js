import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function Book({
  id, title, author, category,
}) {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeBook(id));
  };
  return (
    <div className="book">
      <div>
        <span className="book-category">{category}</span>
        <span className="book-title">{title}</span>
        <span className="book-author">{author}</span>

        <div className="actions-area">
          <button type="button">Comments</button>

          <button
            type="button"
            className="remove"
            onClick={removeHandler}
          >
            Remove
          </button>

          <button type="button">Edit</button>
        </div>

      </div>
      <div className="progress-section">
        <div className="progress-chart">
          <div className="oval" />
          <div>
            <span className="progress-percentage">64%</span>
            <span className="completed-text">Completed</span>
          </div>
        </div>
        <div className="current-section">
          <span className="current-heading">CURRENT CHAPTER</span>
          <span className="current-chapter">Chapter 17</span>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
