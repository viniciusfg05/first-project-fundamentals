import { Coment } from '../Coments/Coment'
import styles from './Posts.module.css'

export function Post() {
  return (
    <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <img
              className={styles.avatar}
              src="https://github.com/viniciusfg05.png"
            />
            <div className={styles.authorInfo}>
              <strong>Vinicius Ferreira</strong>
              <span>Web Developer</span>
            </div>
          </div>

          <time title="16 de maio às 08h15" dateTime="2022-05-16 08:15:15">
            Puclicado há 1h
          </time>
        </header>

        <div className={styles.content}>
          <p>Fala galeraa 👋</p>

          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>

          <p>
            👉 <a href="#">jane.design/doctorcare</a>
          </p>

          <p>
            <a href="#">#novoprojeto</a> <a href="#">#rocketseat</a>{' '}
            <a href="#">#nlw</a>
          </p>
        </div>

        <form className={styles.comentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea placeholder='Deixe um comentario'/>

          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>

        <div className={styles.comentList}>
          <Coment />
          <Coment />
          <Coment />
        </div>
    </article>
  )
}
