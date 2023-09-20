import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/logo-black.svg" alt="JackAReis.com Logo" className={styles.logo} />
      </footer>
    </>
  )
}
