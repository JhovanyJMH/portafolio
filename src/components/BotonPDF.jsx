import React from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import CVDocument from './CVdocument'

const BotonPDF = () => (
  <PDFDownloadLink
    document={<CVDocument />}
    fileName="mi-cv.pdf"
    style={{
      display: 'inline-block',
      backgroundColor: '#0d6efd',
      color: 'white',
      padding: '0.75rem 1.5rem',
      borderRadius: '8px',
      textDecoration: 'none',
      fontWeight: 'bold',
      marginTop: '1rem'
    }}
  >
    {({ loading }) => (loading ? 'Generando PDF...' : 'Descargar CV')}
  </PDFDownloadLink>
)

export default BotonPDF
