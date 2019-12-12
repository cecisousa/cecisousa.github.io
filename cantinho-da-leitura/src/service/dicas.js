import axios from 'axios'

const config = {
  baseURL: 'https://my-json-server.typicode.com/',
  timeout: 1000
}

const protocolo = axios.create(config)

export function getDicas () {
  const url = 'cecisousa/reprograma-cantinho-da-leitura/livros'
  return protocolo.get(url)
}
