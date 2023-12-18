import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Jogo da Forca</h1>
      <form action="">
        <Link href="/jogo/"><input type="button" value="iniciar"/></Link>
        
        <input type="button" value="creditos"/>
      </form>
    </main>
  )
}
