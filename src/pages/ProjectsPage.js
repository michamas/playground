import { Link, Outlet } from "react-router-dom";

export default function ProjectsPage() {
  return (
    <>
      <h1>Projects page</h1>
      <ul>
        <li>
          <Link to="borderAnimation">Border animation</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
