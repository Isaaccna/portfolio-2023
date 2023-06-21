/* eslint-disable react/prop-types */
import './styles.css';
export function Skill(props) {
  return (
    <div className="wrapper" id='skillWrapper'>
      <img src={props.logo} alt="skill logo" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}