import React from 'react'
import Msg from './Msg'

class App extends React.Component {
  render(){
    let nom = 'Gustavo', idad = 20;
    return (
      <div>
        <Msg nome='Jonas' idade='22' />
        <Msg nome={nom} idade={idad} />
      </div>
    )
  }
}

export default App;