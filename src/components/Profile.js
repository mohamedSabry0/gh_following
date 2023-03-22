import { useSelector } from 'react-redux';
import { followeesState } from '../redux/followees/followeesSlice';
import FolloweesList from './FollloweesList';
import LoadingSpinner from './LoadingSpinner';

export default function followees() {
  const { status } = useSelector(followeesState);
  return (
    <div className="followees-page">
      <FolloweesList />
      <LoadingSpinner status={status} />
    </div>
  );
}
