import { Outlet, Link } from "react-router-dom";
import styles from './Layout.module.css'

const Layout = () => {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <h3>React Myself</h3>
          
          <li className={styles.li}>
            <Link className={styles.a} to="/">Home</Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.a} to="/blogs">Blogs</Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.a} to="/contact">Contact</Link>
          </li>

          <Link className={styles.auth} to="/authenticate">Authenticate</Link>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;