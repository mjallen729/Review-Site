// Setting up the server for json and linking object containing API routings
import express from 'express'
import cors from 'cors'
import restaurants from './api/restaurants.route.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1/restaurants', restaurants)
app.use('/api/v1', (req,res) => res.status(200).json({status: 'success'}))
app.use('*', (req, res) => res.status(404).json({error: 'not found'}))

export default app