import Image from 'next/image'
import style from './char.module.css'
import Link from 'next/link'

const fetchCharacter = async (id) => {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        next: {
        revalidate: 60,
        }
    })
        .then((res) => res.json())
    }

export default async function Character({ params }) {
    const {id} = params
    const character = await fetchCharacter(id)
    return <div className={style.container}>
    <div className={style.char}>
        <h1>{character.name}</h1>
        <Image width={300} height={300} src={character.image} alt={character.name} />
        <p>{character.status}</p>
        <p>{character.species}</p>
        <p>{character.gender}</p>
        <p>{character.origin.name}</p>
        <p>{character.location.name}</p>
        </div>
        <Link href={`/characters`} className={style.btn}>
            Back
        </Link>
        </div>
    }