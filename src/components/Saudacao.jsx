import React from 'react';

const Saudacao = ({ isMorning }) => {
  return (
    <h1>{isMorning ? 'Bom dia' : 'Boa noite'}</h1>
  )
}

export default Saudacao
