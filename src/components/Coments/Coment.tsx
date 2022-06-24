import styles from './Coment.module.css'
import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'
import { useState } from 'react'

interface ContentProps {
  content: string;
  onDeleteComment: (commentDelete: string) => void; 
}

export function Coment({ content, onDeleteComment }: ContentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleLinkComment() {
    // sempre quando formos atualizar uma informação depende do valor que ele tinha anteriormente dela mesma precisamos usar esse padrao
    setLikeCount(state => {
      return state + 1
    })
  }

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return (
    <div className={styles.coment}>
      <Avatar hasBorder={false} src="https://github.com/viniciusfg05.png" alt=""/>

      <div className={styles.comentBox}>
        <div className={styles.comentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Vinicius Ferreira</strong>
              <time title="16 de maio às 08h15" dateTime="2022-05-16 08:15:15">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar Comentario">
              <Trash size="24" />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLinkComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

/*
    sempre quando formos atualizar uma informação depende do valor que ele tinha anteriormente dela mesma precisamos usar esse padrao
    ```js 
    function handleLinkComment() {
      setLikeCount((state) => {
        return state +1
      }) 
    }
  */
