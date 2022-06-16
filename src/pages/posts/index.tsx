import { createClient, predicate } from '@prismicio/client';
import { GetStaticProps } from 'next';
import { getPrismicClient } from '../../services/prismic';
import { RichText } from 'prismic-dom';

import Head from 'next/head';
import styles from './styles.module.scss'

type Post = {
  title: string,
  slug: string,
  excerpt: string,
  updatedAt: string
}

type PostProps = {
  posts: Post[]
}

export default function Posts({ posts }: PostProps) {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {
            posts.map( post => (
              <a key={post.slug} href="#">
                <time>{post.updatedAt}</time>
                <strong>{post.title}</strong>
                <p>{post.excerpt}</p>
              </a>
            ))
          }
        </div>
      </main>
    </>
  );
}

export const  getStaticProps: GetStaticProps = async () => {
  const client = getPrismicClient()

  const response = await client.getAllByType('post-type')
  const posts = response.map( post => {
    return {
      title: RichText.asText(post.data.tittle),
      slug: post.uid,
      excerpt: post.data.content.find( (content: any )=> content.type === 'paragraph' )?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })

  return {
    props: { posts },
  }
}