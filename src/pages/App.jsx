import { useState } from 'react'
import gitLogo from '../assets/github.png'
import Input from '../components/Input'
import ItemRepo from '../components/ItemRepo'
import { Container } from './style'
import Button from '../components/Button'
import { api } from '../services/api/api'

function App() {

  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([])

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`)

    if (data.id) {
      const isExist = repos.find(repo => repo.id === data.id)

      if (!isExist) {
        setRepos(prev => [...prev, data]);
        return
      }
    }

    alert('Repositório não encontrado')
  }

  const handleRemoveRepo = (id) => {
    const filtro = repos.filter((repo) => repo.id !== id)
    setRepos(filtro)
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="" />
      <Input value={currentRepo} onChange={({ target }) => setCurrentRepo(target.value)} />
      <Button onClick={handleSearchRepo}>Buscar</Button>
      <Button onClick={() => setCurrentRepo('')}>Limpar</Button>
      {repos.map(repo => <ItemRepo key={repo.name} handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
    </Container>
  )
}

export default App
