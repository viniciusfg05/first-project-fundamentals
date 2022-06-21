import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Post } from './components/Posts/Post'

import styles from './App.module.css'

import './styles/global.css'

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post />
        </main>
      </div>
    </>
  )
}
