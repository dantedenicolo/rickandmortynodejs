import style from './loading.module.css'
export default function Loading () {
  return <>
  <p className={style.centertextonscreen}>Cargando...</p>
  <div className={style.loader}>
    <div className={style.ldsroller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </div></>
}