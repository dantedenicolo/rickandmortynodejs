import Link from 'next/link'
import style from './Nav.module.css'

const routes = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/characters', label: 'Characters' }
]

export default function Nav () {
  return (
    <div className={style.header}>
      <header>
        <ul>
          {routes.map(({ href, label }) => (
            <li key={`${href}`}>
              <Link href={`${href}`}>
                {`${label}`}
              </Link>
            </li>
          ))}
        </ul>
      </header>
    </div>
  )
}
