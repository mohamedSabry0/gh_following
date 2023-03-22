import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

export default function Categories() {
  const { items } = useSelector((store) => store.categories);
  const dispatch = useDispatch();
  return (
    <>
      <p>{items}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(checkStatus('Under construction'));
        }}
      >
        Check status
      </button>
    </>
  );
}
