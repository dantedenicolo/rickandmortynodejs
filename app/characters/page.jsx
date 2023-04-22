import style from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

const fetchCharacters = async () => {
  return fetch('https://rickandmortyapi.com/api/character', {
    next: {
      revalidate: 60,
    }
  })
    .then((res) => res.json())
}

export default async function Characters() {
  const { results } = await fetchCharacters()

  return <div>
    <ul className={style.container}>
      {results.slice(0,18).map((character) => (
        <li key={character.id}>
          <Link href={`/characters/${character.id}`}>
          <Image width={300} height={300} src={character.image} alt={character.name} />
          </Link>
        </li>
      ))}
    </ul>
    </div>
}