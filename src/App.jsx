import { useState } from 'react'
import styles from './App.module.css'


function App() {
  const [contador, setContador] = useState(0)
  const [habito, setHabito] = useState('')

  return (
    <>
      <h1>Contador de Hábitos</h1>
       <div className={styles.botoes}>

      <input className={styles.botaoInput} type="text" 
      placeholder='seu habito aqui'
      value={habito}
      id="habito"
      onChange={(e) => setHabito(e.target.value)}
      />

      <p className={styles.contagem}>Contagem: {contador}</p>
     
        <button className={styles.botaoMais} onClick={() => setContador(contador + 1)}>+1</button>
        <button className={styles.botaoMenos} onClick={() => setContador(contador <= 0 ? 0 : contador - 1)}>−1</button>
        <button className={styles.botaoZero} onClick={() => setContador(0)}>Resetar</button>
      
      
      </div>
    </>
  )
}

export default App
