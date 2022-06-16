import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './styles.module.scss';
import { SignInButton } from '../SignInButton';
import { ActiveLinkParent } from '../ActiveLinkParent';
import { ActiveLink } from '../ActiveLink';

export function Header() { 
  const { asPath } = useRouter()

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent} >
        <img src="/images/logo.svg" alt="Logo" />
        <nav>
          <ActiveLinkParent activeClassName={styles.active} href="/" passHref>
            <a>Home</a>
          </ActiveLinkParent>

          <ActiveLink 
            href={"/posts" }
            asPath={asPath}
            displayName={'Posts'}
            activeClassName={styles.active}
            passHref 
            prefetch
          />
        </nav>
        
        <SignInButton />
      </div>
    </header>
  )
}