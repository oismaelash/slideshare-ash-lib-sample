import express from 'express'
import cors from 'cors'
import apicache from 'apicache'
import * as Slideshare from 'slideshare-ash'

const app = express()
const cache = apicache.middleware

app.use(cors())
app.use(cache('1 minutes'))

app.get('/', (request, response) => {
  return response.json({ message: 'api works!' })
})

app.get('/user/:username', async (request, response) => {
  try {
    const USERNAME = request.params.username
    console.log(USERNAME)
    const user = await Slideshare.getUser(USERNAME)
    return response.json(user)
  } catch (error: any) {
    console.log(error)
    return response.status(404).send(error)
  }
})

app.get('/presentations/:username', async (request, response) => {
  try {
    const USERNAME = request.params.username
    console.log(USERNAME)
    const presentations = await Slideshare.getAllPresentations(USERNAME)
    return response.json(presentations)
  } catch (error) {
    return response.status(404).send(error)
  }
})

app.get('/presentations', async (request, response) => {
  try {
    const URL = request.query.url.toString()
    console.log(URL)
    const presentation = await Slideshare.getOnePresentation(URL)
    return response.json(presentation)
  } catch (error) {
    return response.status(404).send(error)
  }
})

const PORT = process.env.PORT ?? 3333

app.listen(PORT, () => {
  console.log(`server listening at http://localhost:${PORT}`)
})
