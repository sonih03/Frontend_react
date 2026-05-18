import React, {useState} from 'react'
import ScoresTable from '../components/score/ScoresTable';
import Form from '../components/score/Form'


const intialScores = [ 
  {  이름: "John", 국어: 90, 영어: 90,  수학: 80, 과학: 90 },
  {  이름: "Peter", 국어: 90, 영어: 90,  수학: 80, 과학: 90 },
  {  이름: "Susan", 국어: 90, 영어: 90,  수학: 80, 과학: 90 },
  {  이름: "Sue", 국어: 90, 영어: 90,  수학: 80, 과학: 90 },
]

const initialInfo = {
   이름: "", 
   국어: null,
   영어: null,
   수학: null,
   과학: null,
}

function Scorepage() {
    const [info, setInfo] = useState(initialInfo);
    const [scores, setScores] = useState(intialScores);

    
  return (
    <>
        <ScoresTable scores={scores}/>
      <Form info={info} setInfo={setInfo} setScores={setScores}/>
      
    </>
  )
}

export default Scorepage
