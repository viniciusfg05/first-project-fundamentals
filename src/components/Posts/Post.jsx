import { Coment } from '../Coments/Coment'
import { Avatar } from '../Avatar/Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Posts.module.css'
import { useState } from 'react'

export function Post({ author, content, publishedAt }) {
  const [comments, setComents] = useState([
    'Post muito bacana, hein?!'
  ])
  const [ newCommentText, setNewComentText ] = useState('')

  const { avatarUrl, name, role } = author

  const formatDatePublished = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateComentNew() {
    // console.log(event.target.comment.value)
    event.preventDefault()

    setComents([
      ...comments,
      newCommentText
    ])
    setNewComentText('')
  }

  function handleCommentChange() {
    setNewComentText(event.target.value);
  }

  function deleteComment(comment) {
    console.log(`deleteComment ${comment}`);
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
            return <p key={content.content}>{content.content}</p>
          } else if (content.type === 'link') {
            return (
              <p key={content.content}>
                <a href="#">{content.content}</a>{' '}
              </p>
            )
          }
        })}
      </div>

      <form onSubmit={handleCreateComentNew} className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentario"
          onChange={handleCommentChange}
          value={newCommentText}
        />

        <footer> 
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.comentList}>
        {comments.map(comment => {
          return (
            <Coment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}
