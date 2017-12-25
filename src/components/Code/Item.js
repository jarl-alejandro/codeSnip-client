import React from 'react'

const Item = (props) => (
  <li>
    <h3>{ props.username }</h3>
    <p>{ props.language }</p>
    <pre>
      { props.code }
    </pre>
  </li>
)

export default Item