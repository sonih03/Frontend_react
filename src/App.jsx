import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const scores = [
  { 이름: "John",국어: 90, 영어: 90, 수학: 80, 과학: 90},
  { 이름: "Nick",국어: 90, 영어: 90, 수학: 80, 과학: 90},
  { 이름: "Asher",국어: 90, 영어: 90, 수학: 80, 과학: 90},
  { 이름: "Edward",국어: 90, 영어: 90, 수학: 80, 과학: 90},
]

// const sources = [0,1,2,3]
// tmp = []
// for (let item of source){
//   tmp.push(item*2)
// }

// sources.map(item => (item*2))

// let numbers = [0,1,2,3]//데이터가 변형을 해야하기 때문에 let을 사용

// let newScores= numbers.map(item => {return item*2})
// console.log(newScores)

function App() {

  return (
    <table>
      
      <tr>
        {
          Object.keys(scores[0]).map(key => (
            <th>{key}</th>
          ))
        }
        {/* <th>이름</th>
        <th>국어</th>
        <th>영어</th>
        <th>수학</th>
        <th>과학</th> */}
      </tr>
      {scores.map(item => 
      (
        <tr>
          {
            Object.values(item).map(
              values => (<td>{values}</td>)
            )
          }
        </tr>
    ))}

    </table>
  )
}

export default App
