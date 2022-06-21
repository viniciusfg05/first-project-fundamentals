import styles from './Header.module.css'
import igniteLogo from '/igniteLogo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="logo inite" />
      <strong>Ignite Feed</strong>
    </header>
  )
}
