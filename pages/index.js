import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Link from 'next/link'
import Layout from '../components/layout'

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Home({ allPostsData }) {
  
  return (
    <Layout home>
      <div className={styles.container}>
        <Head>
          <title>Meu programa de computador da Interweb.</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className={styles.title}>
          Meu programa de computador da Interweb
          </h1>

          <Link href="https://google.com">Google</Link>
          <Link href="/posts">Posts</Link>

          <p className={styles.description}>
            Inicie editando o <code>pages/index.js</code>
          </p>

        </main>

        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
          </a>
        </footer>

        <style jsx>{`
          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          footer img {
            margin-left: 0.5rem;
          }
          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: inherit;
          }
          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
      <h2>Blog</h2>
      Length: {allPostsData.length}
      <ul>
      {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              {date}
            </li>
          ))}
      </ul>
    </Layout>
  )
}