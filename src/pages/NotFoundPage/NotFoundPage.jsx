import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.notFoundPage}>
      <h1 className={css.notFoundTitle}>404 - Page Not Found</h1>
      <Link to="/" className={css.notFoundLink}>
        Go back to Home
      </Link>
    </div>
  );
}
