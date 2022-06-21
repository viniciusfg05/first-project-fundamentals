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
      </header>
    </article>
  )
}
