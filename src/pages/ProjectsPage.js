import { Link, Outlet } from "react-router-dom";

export default function ProjectsPage() {
  return (
    <>
      <div className="App-container">
        <h1 className="App-title">Projects page</h1>
        <ul>
          <li>
            <Link to="borderAnimation">Border animation</Link>
          </li>
          <li>
            <Link to="feedback">Feedback counter</Link>
          </li>
          <li>other</li>
        </ul>
        <Outlet />
      </div>
    </>
  );
}
