import './styles.css';
import photo from '../../assets/isaac-photo.png';
import { Heading } from '../heading';
// import { Info } from '../info';
export function About() {

  return (
    <section id='about'>
<Heading title="About Me"/>

<div id='container'>
  <img src={photo} alt="temp photo" />

  <div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quia fugiat reprehenderit tenetur quasi distinctio. Deleniti earum commodi autem praesentium odio quo quas. Facilis sit laborum officiis rem, doloremque repudiandae!</p>
   {/* <Info /> */}
  </div>

</div>

<div id='experience'>
  <div>
    <h1>2+</h1>
    <p>Years of experience</p>
  </div>
  <div>
    <h1>10+</h1>
    <p>Completed projects</p>
  </div>
  <div>
    <h1>2+</h1>
    <p>Satisfied clients</p>
  </div>
</div>

    </section>
  )
}