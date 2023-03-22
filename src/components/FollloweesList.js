import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followeesState, fetchFollowees } from '../redux/followees/followeesSlice';
import Followee from './Followee';

export default function FolloweesList() {
  const dispatch = useDispatch();
  const { followees, error, status } = useSelector(followeesState);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchFollowees());
    }
  }, [dispatch, status]);

  if (status === 'succeeded') {
    return (
      <div className="followees-list">
        {followees.map((item) => (
          <Followee
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
