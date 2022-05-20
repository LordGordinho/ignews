import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { useSession, signIn, signOut } from "next-auth/react"

import styles from './styles.module.scss'


export function SignInButton() {
  const { data: session } = useSession();

  return session ? (
    <button 
      type="button" 
      className={styles.signInButton}
    >
      <FaGithub color='#04d361' />
        Ramon Barros
      <FiX color='#747480' className={styles.closeIcon} onClick={( () => signOut())}/>
    </button>
  ) : (
    <button 
      type="button" 
      className={styles.signInButton}
      onClick={() => signIn('github')}
    >
      <FaGithub color='#eba417' />
      Sign in with Github
    </button>
  )
}