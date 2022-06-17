import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Nav></Nav>
      <div className={styles.container}>
          <main className={styles.main}>
              {children}
          </main>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Layout