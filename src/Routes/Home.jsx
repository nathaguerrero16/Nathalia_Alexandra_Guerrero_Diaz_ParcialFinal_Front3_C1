import React from 'react'
import Card from '../Components/Card'
import { useGlobalStates } from '../Components/utils/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useGlobalStates();
  return (
    <main className="" >
      <h1>Inicio</h1>
      <div className='card-grid'>
        {state.dentists.map((dentist) => (
            <Card key={dentist.id} dentist={dentist} />
          ))}
      </div>
    </main>
  )
}

export default Home