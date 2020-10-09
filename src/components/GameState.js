import React from 'react';

export default ({state, userChoice, computerChoice, clicked}) => {
  return (
    <div 
    onClick={clicked}
    className={`game-state ${state}`}>
      <div>
        <div className="game-state-content">
          <p>{userChoice}</p>
          { state === 'win' && <p>Congrats! You won!</p> }
          { state === 'lose' && <p>Sorry! You lost!</p> }
          { state === 'draw' && <p>Sorry! You lost!</p> }
          <p>{computerChoice}</p>
        </div>
      </div>
    </div>
  )
}