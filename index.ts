import express from 'express'
import database from 'better-sqlite3'

const cors = require('cors')
const db = database('./db/setup.db', { verbose: console.log })

const app = express()
app.use(express.json())
const port = 4000

const getQuotes = db.prepare(`
    SELECT * FROM quotes;
`)

const getQuotewithId = db.prepare(`
    SELECT * FROM quotes WHERE id = ?;
`)
const updateQuote = db.prepare(`
    UPDATE quotes SET quote = ?,author = ? WHERE id = ?;
`)

const createQuote = db.prepare(`
    INSERT INTO quotes ( quote, author) VALUES (?, ?);
`)

const deleteQuote = db.prepare(`
    DELETE FROM quotes WHERE id = ?;
`)





app.get('/quotes', cors(),(req, res) => {
    const quotes = getQuotes.all()
  res.send(quotes)
})
app.get('/', cors(),(req, res) => {
    res.send("Go to /quotes to find the data u want :)")
  })
app.get('/random', cors(),(req, res) => {
    const quotes = getQuotes.all()
    res.send(quotes[Math.floor(Math.random() * quotes.length)])
  })

//   app.post('/quotes',cors() ,(req, res) => {
//   console.log(req.body)
//   let newitem = {
//     id:quotes[quotes.length - 1].id+1,
//     quote:req.body.quote,
//     author:{
//         name:req.body.author.name,
//         surname:req.body.author.surname,
//         photo:req.body.author.photo
//     }
//   }
//   quotes.push(newitem)
//   res.send(newitem)
   
// })
app.get('/quotes/:id', function (req, res) {
    let id = Number(req.params.id)
    const quote = getQuotewithId.get(id)
    if(quote){
        res.send(quote);
    }else{
        res.status(404).send({ error: 'Quote not found.' })
        res.send("DataNot Found")
    }
    
    
    });

app.listen(port, () => {
  console.log(`srv is running in port ${port}`)
})
