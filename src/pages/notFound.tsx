import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '25px' }}>
      <h1 style={{ fontSize: '30px', color: 'black', padding: '20px' }}>404 - Page Not Found</h1>
      <Link to='/main' style={{ fontSize: '15px', color: 'black', padding: '10px' }}>Back to main page</Link>
    </div>
  );
}

