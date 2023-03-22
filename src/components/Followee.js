import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeFollowee } from '../redux/followees/followeesSlice';

function Followee({}) {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeFollowee(id));
  };
  return (
    <div className="followee">
      <div>
        <span className="followee-category">{category}</span>
        <span className="followee-title">{title}</span>
        <span className="followee-author">{author}</span>

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
      
    </div>
  );
}

Followee.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Followee;
