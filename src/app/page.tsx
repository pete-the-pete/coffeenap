import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'

import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <p><FontAwesomeIcon icon={faMugSaucer} color="#785e22" border={true}/></p>
        <p>Coffee. Nap. Wake up going a million miles an hour.</p>
      </div>
      <div className={styles.footer}>
        Image by <a href="https://www.freepik.com/free-vector/flat-design-comic-style-background_12065075.htm#query=radial%20background&position=2&from_view=keyword">Freepik</a>
      </div>
    </main>
  )
}
