import './styles.css';
export function Info() {
  return (
    <div className='info'>
      <div className="column">
<div className="row"> 
<div><p className="question">Email:</p></div>
<div> <p className="answer">isaaccna.007@gmail.com</p></div>

 </div>
<div className="row"> 
<div><p className="question">Location:</p></div>
<div> <p className="answer">Holt,USA</p></div>
</div>
<div className="row"> 
<div><p className="question">Age:</p></div>
<div> <p className="answer">30</p></div>
</div>
      </div>
      <div className="column">
      <div className="row"> 
<div><p className="question">Nationality:</p></div>
<div> <p className="answer">Brazilian</p></div>

 </div>
<div className="row"> 
<div><p className="question">Education:</p></div>
<div> <p className="answer">Universidade Católica, Brazil</p></div>
</div>
<div className="row"> 
<div><p className="question">Degree:</p></div>
<div> <p className="answer">Bachelor</p></div>
</div>
      </div>

    </div>

  )
}