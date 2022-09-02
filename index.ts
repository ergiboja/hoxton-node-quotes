import express from 'express'

const cors = require('cors')

const app = express()
app.use(express.json())
const port = 4000
const quotes = [
    {
        id:0,
     quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
     
    author:{
        name:"Thomas ",
        surname:"Edison",
        photo:'url'
    } 
    },
    {
        id:1,
     quote:  "You can observe a lot just by watching.",
     
    author:{
        name: "Yogi ",
        surname: "Berra",
        photo:'url'
    }
    },
    {
        id:2,
     quote: "A house divided against itself cannot stand.",
     
    author:{
        name:"Abraham ",
        surname:"Lincoln",
        photo:'url'
    }
    },
    {
        id:3,
     quote: "Fate is in your hands and no one elses",
     
    author:{
        name:"Byron ",
        surname:"Pulsifer",
        photo:'url'
    } 
    },
    {
        id:4,
     quote: "Nothing happens unless first we dream.",
     
    author:{
        name:"Carl ",
        surname:"Sandburg",
        photo:'url'
    } 
    },
    {
        id:5,
     quote:  "Be the chief but never the lord.",
     
     
    author:{
        name:"Lao ",
        surname:"Tzu",
        photo:'url'
    } 
    },
    {
        id:6,
     quote: "Well begun is half done.",
     
    author:{
        name:"Aristotle",
        surname:"",
        photo:'url'
    } 
    },
    {
        id:7,
     quote: "Life is a learning experience, only if you learn.",
     
    author:{
        name:"Yogi ",
        surname:"Berra",
        photo:'url'
    } 
    },
    {
        id:8,
     quote: "What you give is what you get.",
     
    author:{
        name:"Byron ",
        surname:"Pulsifer",
        photo:'url'
    } 
    },
    

]

const randomQuote= quotes[Math.floor(Math.random() * quotes.length)]

app.get('/quotes', cors(),(req, res) => {
  res.send(quotes)
})
app.get('/random', cors(),(req, res) => {
    res.send(quotes[Math.floor(Math.random() * quotes.length)])
  })

  app.post('/quotes',cors() ,(req, res) => {
  console.log(req.body)
  let newitem = {
    id:quotes[quotes.length - 1].id+1,
    quote:req.body.quote,
    author:{
        name:req.body.author.name,
        surname:req.body.author.surname,
        photo:req.body.author.photo
    }
  }
  quotes.push(newitem)
  res.send(newitem)
   
})
app.get('/quotes/:id', function (req, res) {
    let id = Number(req.params.id)
    let match = quotes.find(quote => quote.id === id)
    if(match){
        res.send(match);
    }else{
        res.status(404).send({ error: 'Quote not found.' })
        res.send("DataNot Found")
    }
    
    
    });

app.listen(port, () => {
  console.log(`srv is running in port ${port}`)
})
