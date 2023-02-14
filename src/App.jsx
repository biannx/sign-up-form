import React, { useState } from 'react'
import Header from '/src/components/header.jsx'
import Alert from '/src/components/alert.jsx'
import Footer from '/src/components/footer.jsx'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    newsLetter: false
  })


  function handleChange() {
    const { name, value, type, checked } = event.target
    setFormData(prevData => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    const success = document.getElementById("alert-success")
    const failed = document.getElementById("alert-failed")
    const successJoined = document.getElementById("alert-success-joinNewsletter")

    if (formData.password != formData.confirmPassword) {
      success.style.display = "none";
      successJoined.style.display = "none";
      failed.style.display = "block";
      return
    }
    else {
      failed.style.display = "none";
      successJoined.style.display = "none";
      success.style.display = "block";

    }

    if (formData.newsLetter) {
      success.style.display = "none";
      failed.style.display = "none";
      successJoined.style.display = "block";

    }

  }

  return (
    <>
      <Header />
      <main className="container">
        <Alert />
        <div className="d-flex justify-content-center align-items-center">
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email address"
              className="form--input"
              name="email"
              onChange={handleChange}
              value={formData.emil}
            />
            <input
              type="password"
              placeholder="Password"
              className="form--input"
              name="password"
              onChange={handleChange}
              value={formData.password}
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="form--input"
              name="confirmPassword"
              onChange={handleChange}
              value={formData.confirmPasswrd}
            />

            <div className="form--marketing">
              <input
                id="okayToEmail"
                type="checkbox"
                onChange={handleChange}
                value={formData.newsLetter}
                name="newsLetter"
              />
              <label htmlFor="okayToEmail">I want to join the newsletter</label>
            </div>
            <button
              type="submit"
              className="form--submit"
            >
              Sign up
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
