import Link from "next/link";

import styles from '../styles/Home.module.css';

export default function Layout({ children, home }) {
  return (
    <>
    INICIO
    {home && <>Página principal!</>}

    {!home && (
      <div  >
        <Link href="/">← Back to home</Link>
      </div>
    )}

      <div className={styles.container}>{children}</div>

    FIM
    </>
    )
}