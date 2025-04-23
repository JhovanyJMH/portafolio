import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BotonPDF from './components/BotonPDF'  // Asegúrate de importar BotonPDF

function App() {
  return (
    <div>
      <Navbar />
      <main style={{
          maxWidth: '1000px',
          margin: '0 auto',
          paddingTop: '6rem',
          paddingLeft: '1rem',
          paddingRight: '1rem'
        }}>

        <Header />
        <Experience />
        <Projects />
        
        {/* Sección para descargar el currículum */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <h2>Descargar Currículum</h2>
          <BotonPDF />
        </div>
        
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
