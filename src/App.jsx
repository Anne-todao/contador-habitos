import { useState } from 'react'
import styles from './App.module.css'


function App() {
  const [contador, setContador] = useState(0)

  return (
    <>
      <h1>Contador de Hábitos</h1>
      <p className={styles.contagem}>Contagem: {contador}</p>
      <div className={styles.botoes}>
        <button className={styles.botaoMais} onClick={() => setContador(contador + 1)}>+1</button>
        <button className={styles.botaoMenos} onClick={() => setContador(contador <= 0 ? 0 : contador - 1)}>−1</button>
        <button className={styles.botaoZero} onClick={() => setContador(0)}>Resetar</button>
      </div>
    </>
  )
}

export default App
