import React from 'react'
import * as styles from './app.module.css'

const App = () => {
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <h1>Kevin Cole</h1>
        <nav>

          <ul>
          <li className={styles.active}><a href="https://cdpn.io/rnHyB">Home</a></li>
          <li><a href="https://cdpn.io/rnHyB" target="_blank">Portfolio</a></li>
          <li><a href="https://cdpn.io/rnHyB" target="_blank">Blog</a></li>
          <li><a href="https://cdpn.io/rnHyB" target="_blank">Contact</a></li>
        </ul></nav>
      </header>

      <div className={styles.mainContent}>
        <div className={styles.content}>
            <article className={styles.content_1}>
              <header>
                <h2>
            LOOK @ MY other Template    <a href="   https://codepen.io/studio-klik-hr/pen/rnHyB">codepen.io/studio-klik-hr/pen/rnHyB</a></h2>
              </header>

              <footer>
                <p className={styles.post_from}>This was posted on the 25nd of October 2013 by Studio Klik</p>
              </footer>

              <div>
                <p>I asked an angel to guard you as you sleep, the angel replied and said angels don't guard angels, besides she's an higher angel. Love you my angel of angels.</p>
                <p>'I' stopped to pick a meaning of 'LOVE'. Just then,a paper dropped inscribed 'YOU'. A voice whispered, you're the best meaning of love.</p>
                            <p>I asked an angel to guard you as you sleep, the angel replied and said angels don't guard angels, besides she's an higher angel. Love you my angel of angels.</p>
                <p>'I' stopped to pick a meaning of 'LOVE'. Just then,a paper dropped inscribed 'YOU'. A voice whispered, you're the best meaning of love.</p>
              </div>

            </article>

            <article className={styles.content_2}>
              <header>
                <h2><a href="#" rel="bookmark" title="Permalink to this POST TITLE">Header post</a></h2>
              </header>

              <footer>
                <p className={styles.post_from}>This was posted on the 25th of October 2013 by Studio Klik</p>
              </footer>

              <div>
                <p>I asked an angel to guard you as you sleep, the angel replied and said angels don't guard angels, besides she's an higher angel. Love you my angel of angels.</p>
                <p>'I' stopped to pick a meaning of 'LOVE'. Just then,a paper dropped inscribed 'YOU'. A voice whispered, you're the best meaning of love.</p>
                            <p>I asked an angel to guard you as you sleep, the angel replied and said angels don't guard angels, besides she's an higher angel. Love you my angel of angels.</p>
                <p>'I' stopped to pick a meaning of 'LOVE'. Just then,a paper dropped inscribed 'YOU'. A voice whispered, you're the best meaning of love.</p>
              </div>

            </article>
        </div>

            <aside className={styles.sidebar_1}>
              <article>
              <h2>Sidebar 1</h2>
              <p>You are my coca in the cola, My one and only, there are many fish in the sea but you're my only Nemo..</p>
                </article>
            </aside>

            <aside className={styles.sidebar_2}>
              <article>
              <h2>Sidebar 2</h2>
              <p>Tears may dry, Years may fly, But my love for you will never die.</p>
                </article>
            </aside>

            <aside className={styles.sidebar_3}>
              <article>
              <h2>Sidebar 3</h2>
              <p>Babe, sorry I didn't give you anything for valentine, I prefer my money remains mine.</p>
                </article>
            </aside>
      </div>

      <footer className={styles.footer}>
        <p>Copyright &copy; 2013 <a href="">Your Name</a></p>
      </footer>

    </div>
  )
}

export default App