import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <h1>Welcome</h1>
      <p>This is a multi-page React app using React Router.</p>

      <Link to="/about">Go to About</Link>
      <br />
      <Link to="/users">View Users</Link>
    </div>
  );
}

export default Home;
