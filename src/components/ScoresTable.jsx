import React from 'react'

const scores = [
  { 이름: "John",국어: 90, 영어: 90, 수학: 80, 과학: 90},
  { 이름: "Nick",국어: 90, 영어: 90, 수학: 80, 과학: 90},
  { 이름: "Asher",국어: 90, 영어: 90, 수학: 80, 과학: 90},
  { 이름: "Edward",국어: 90, 영어: 90, 수학: 80, 과학: 90},
]

function ScoresTable() {
  return (
     <table>
      
      <tr>
        {
          Object.keys(scores[0]).map(key => (
            <th>{key}</th>
          ))
        }

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

export default ScoresTable
