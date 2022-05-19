import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header() { 
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent} >
        <img src="/images/logo.svg" alt="Logo" />
        <nav>
          <a href="">Home</a>
          <a className={styles.active} href="">Posts</a>
        </nav>
        
        <SignInButton />
      </div>
    </header>
  )
}