import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=60"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/viniciusfg05.png" />

        <strong>Vinicius Ferreira</strong>
        <span>Web developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size="20" />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
