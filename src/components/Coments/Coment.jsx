import styles from './Coment.module.css'
import { Trash, ThumbsUp } from 'phosphor-react'

export function Coment() {
  return (
    <div className={styles.coment}>
      <img src="https://github.com/viniciusfg05.png" />

      <div className={styles.comentBox}>
        <div className={styles.comentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Vinicius Ferreira</strong>
              <time title="16 de maio às 08h15" dateTime="2022-05-16 08:15:15">Cerca de 1h atrás</time>
            </div>

            <button title='Deletar Comentario'>
              <Trash size="24"/>
            </button>
          </header>



          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
