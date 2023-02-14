import React, { useState } from 'react'
import Header from '/src/components/header.jsx'
import Alert from '/src/components/alert.jsx'
import Form from '/src/components/form.jsx'
import Footer from '/src/components/footer.jsx'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Alert />
        <Form />
      </main>
      <Footer />
    </>
  )
}

export default App
