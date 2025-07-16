'use client'

import { useState } from 'react'

export default function CookieTestPage() {
  const [cookieValue, setCookieValue] = useState('')
  const [inputValue, setInputValue] = useState('')

  // Lire le cookie depuis l’API (GET)
  const getCookie = async () => {
    const res = await fetch('/api/cookie')
    const data = await res.json()
    setCookieValue(data.value)
  }

  // Enregistrer/modifier le cookie via l’API (POST)
  const setCookie = async () => {
    await fetch('/api/cookie', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value: inputValue })
    })
    getCookie() // Actualiser après la modification
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Test des cookies</h1>

      <div>
        <label>
          Nouvelle valeur du cookie :
          <input
            type="text"
            placeholder="Entrer une valeur"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </label>
        <button onClick={setCookie} style={{ marginLeft: '10px' }}>
          Enregistrer le cookie
        </button>
      </div>

      <div style={{ marginTop: '10px' }}>
        <button onClick={getCookie}>Lire le cookie</button>
      </div>

      <p style={{ marginTop: '10px' }}>
        Valeur actuelle du cookie : <strong>{cookieValue || '(vide)'}</strong>
      </p>
    </div>
  )
}
