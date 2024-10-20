import { Link } from 'react-router-dom'
import * as styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <h1>Kevin Cole</h1>
        <nav>
          <ul>
          <li className={styles.active}><a href={process.env.PUBLIC_RESUME}>Resume</a></li>
          <li><Link to={process.env.PUBLIC_BIO || ''}>Bio</Link></li>
          <li><Link to={process.env.PUBLIC_CONTACT || ''}>Contact</Link></li>
        </ul></nav>
      </header>
  )
}

export default Header
