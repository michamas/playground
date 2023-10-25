import { Link, Outlet } from "react-router-dom";

export default function ProjectsPage() {
  return (
    <>
      <div className="App-container">
        <h2 className="App-title">Projects page</h2>
        <ul>
          <li>
            <Link to="borderAnimation">Border animation</Link>
          </li>
          <li>other</li>
        </ul>
        <Outlet />
      </div>
    </>
  );
}
