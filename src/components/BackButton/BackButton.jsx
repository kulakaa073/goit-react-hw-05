import { Link } from 'react-router-dom';

export default function BackButton({ to }) {
  return <Link to={to}>Go back</Link>;
}
