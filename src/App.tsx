import { useState, useEffect } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // Estado para armazenar a lista de usuários
type GithubUser = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
};

  const [users, setUsers] = useState<GithubUser[]>([])
  // Estado para loading e erro
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // useEffect para buscar usuários ao montar o componente
  useEffect(() => {
    setLoading(true)
    axios.get<GithubUser[]>('https://api.github.com/users')
      .then(response => {
        setUsers(response.data)
        setError('')
      })
      .catch(err => {
        setError('Erro ao buscar usuários')
        setUsers([])
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Lista de Usuários do GitHub</h2>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <ul>
        {loading
          ? Array.from({ length: 8 }).map((_, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#e0e0e0', animation: 'pulse 1.5s infinite' }} />
                <div style={{ width: 100, height: 16, borderRadius: 4, background: '#e0e0e0', animation: 'pulse 1.5s infinite' }} />
              </li>
            ))
          : users.map((user) => (
              <li key={user.id} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <img src={user.avatar_url} alt={user.login} width={32} height={32} style={{ borderRadius: '50%' }} />
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.login}</a>
              </li>
            ))}
      </ul>
      <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.4; }
          100% { opacity: 1; }
        }
      `}</style>
    </>
  )
}

export default App
