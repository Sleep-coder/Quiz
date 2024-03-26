// components/Home.js
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Choose a Topic</h2>
      <ul>
        <li>
          <Link to="/questions/festivals">Festivals</Link>
        </li>
        <li>
          <Link to="/questions/web-development">Web Development</Link>
        </li>
        <li>
          <Link to="/questions/solarsystem">Solar System</Link>
        </li>
        <li>
          <Link to="/questions/history">History</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
