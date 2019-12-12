import axios from 'axios'

const config = {
  baseURL: 'https://api.nytimes.com/svc/books/v3/',
  timeout: 1000
}

const protocolo = axios.create(config)

export function getMelhores () {
  const url = 'lists/overview.json?api-key=3sbcchrmAuDWG3vXagfPGU5gV3CGDAwJ'
  return protocolo.get(url)
}

export function getAutores(nomeAutor) {
  const url = `reviews.json?author=${nomeAutor}&api-key=3sbcchrmAuDWG3vXagfPGU5gV3CGDAwJ`
  return protocolo.get(url)
}
