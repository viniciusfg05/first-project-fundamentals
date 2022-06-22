import { Coment } from '../Coments/Coment'
import { Avatar } from '../Avatar/Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Posts.module.css'

const comments = [1, 2]

export function Post({ author, content, publishedAt }) {
  const { avatarUrl, name, role } = author

  const formatDatePublished = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateComentNew() {
    event.preventDefault()

    comments.push(3)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>

        <time title={formatDatePublished} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(content => {
          if (content.type === 'paragraph') {
            return <p>{content.content}</p>
          } else if (content.type === 'link') {
            return (
              <p>
                <a href="#">{content.content}</a>{' '}
              </p>
            )
          }
        })}
      </div>

      <form onSubmit={handleCreateComentNew} className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentario" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.comentList}>
        {comments.map(comment => {
          return <Coment />
        })}
      </div>
    </article>
  )
}
