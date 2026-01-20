import { Link } from "react-router-dom";

function About() {
  return (
    <div className="page">
      <h1>About</h1>
      <p>This application demonstrates routing in React.</p>

      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default About;
