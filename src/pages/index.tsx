import type { NextPage } from 'next'
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton';

import styles from './home.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Início | ig.news</title>
      </Head>
      
      <main className={styles.homeContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>

          <h1>
            New about <br />
            the <span>React</span> world
          </h1>

          <p>
            Get acess to all the publications <br />
            <span>for $9.90 month</span>
          </p>

          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="Avatar" />
      </main>
    </>
  )
}

export default Home
