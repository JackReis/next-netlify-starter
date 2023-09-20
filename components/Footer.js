import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a href="https://jack.digital"><img src="/logo-unicorn.svg" alt="JackAReis.com Logo" className={styles.logo} /></a>
      </footer>
    </>
  )
}
