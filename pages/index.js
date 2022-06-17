import Head from 'next/head'
import indexStyles from '../styles/Index.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={indexStyles.body}>
      <Head>
        <title>Student page</title>
      </Head>
      <Link href='/login'>Student</Link>
      <Link href='/login'>Teacher</Link>
    </div>
  )
}