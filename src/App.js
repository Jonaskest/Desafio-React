import React, { useState } from 'react';
import fundo from './vehicle-8767226_1280.jpg';
import posto from './posto-de-gasolina-retro-neon-a-noite-reflexoes-de-chuva-de-neblina-na-ilustracao-3d-de-asfalto_161844-1095.avif'

export default function App() {
  const [alcool, setAlcool] = useState("");
  const [gasolina, setGasolina] = useState("");


  function handleSubmit(e) {
    const melhorPreco = alcool / gasolina;

    if(melhorPreco < 0.7) {
      alert("É mais vantajoso abastecer com Álcool!");
    } else {
      alert("É vantajoso abastecer com Gasolina!");
    }
  }

  return (
    <div style={{
      ...styles.container,
      backgroundImage: `url(${fundo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>

      <img src={posto} alt="Posto no estilo Cyberpunk" style={styles.posto}/>

      <h1 style={styles.title}>Qual a melhor opção?</h1>
      <p style={styles.subtitle}>Álcool (preço por litro)</p>

      <input 
      style={styles.input}
      type="number" 
      value={alcool}
      onChange={(e) => setAlcool(e.target.value)}
      />

      <p style={styles.subtitle}>Gasolina (preço por litro)</p>

      <input 
      style={styles.input}
      type="number" 
      value={gasolina}
      onChange={(e) => setGasolina(e.target.value)}
      />

      <button style={styles.button} onClick={handleSubmit}>Calcular</button>
    </div>
    
  )
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: '100vh',
    backgroundColor: '#5153dfff',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  posto: {
    width: "300px",
    marginBottom: "20px",
    borderRadius: "10px",
    boxShadow: "0 0px 20px rgba(255, 0, 255, 0.7)",
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textShadow: '0px 0px 10px #ff00ff',
  },
  subtitle: {
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: "5px",
    textShadow: '0px 0px 10px #ff00ff',
  },
  input: {
    width: 300,
    height: 30,
    borderColor: '#000',
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    border: 'none',
    outline: 'none',
    boxShadow: "0px 0px 10px #00ffff",
  },
  button: {
    width: 315,
    height: 35,
    backgroundColor: '#f2e81dff',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    borderRadius: 5,
    boxShadow: "0px 0px 10px #f2e81d",
  }
}