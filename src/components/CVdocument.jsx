import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 }
})

const CVDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Desarrollador Web</Text>
      </View>
      <View style={styles.section}>
        <Text>Experiencia: Empresa ABC - Frontend Developer</Text>
      </View>
    </Page>
  </Document>
)

export default CVDocument
