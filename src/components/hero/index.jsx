import './styles.css'
import photo from '../../assets/isaac-photo.png'
export function Hero () {
  return (
    <div className='container'>
      <img src={photo} alt="Isaac's photo" />
      <div>
        <h1>Isaac <span>Andrade</span></h1>
        <p>I design and build things on the internet.</p>
      </div>
    </div>
  )
}