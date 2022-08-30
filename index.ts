import express from 'express'

const cors = require('cors')

const app = express()
const port = 4000
const quotes = [
    {
        id:0,
    quoteText: "One today is worth two tomorrows.",
    quoteAuthor: "Benjamin Franklin"
    },{
    id:1,
    quoteText: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    quoteAuthor: "Thomas Edison"
    }, {
        id:2,
    quoteText: "You can observe a lot just by watching.",
    quoteAuthor: "Yogi Berra"
    }, {
        id:3,
    quoteText: "A house divided against itself cannot stand.",
    quoteAuthor: "Abraham Lincoln"
    }, {
        id:4,
    quoteText: "Difficulties increase the nearer we get to the goal.",
    quoteAuthor: "Johann Wolfgang von Goethe"
    }, {
        id:5,
    quoteText: "Fate is in your hands and no one elses",
    quoteAuthor: "Byron Pulsifer"
    }, {
        id:6,
    quoteText: "Be the chief but never the lord.",
    quoteAuthor: "Lao Tzu"
    }, {
        id:7,
    quoteText: "Nothing happens unless first we dream.",
    quoteAuthor: "Carl Sandburg"
    }, {
        id:8,
    quoteText: "Well begun is half done.",
    quoteAuthor: "Aristotle"
    }, {
        id:9,
    quoteText: "Life is a learning experience, only if you learn.",
    quoteAuthor: "Yogi Berra"
    }, {
        id:10,
    quoteText: "Self-complacency is fatal to progress.",
    quoteAuthor: "Margaret Sangster"
    }, {
        id:11,
    quoteText: "Peace comes from within. Do not seek it without.",
    quoteAuthor: "Buddha"
    }, {
        id:12,
    quoteText: "What you give is what you get.",
    quoteAuthor: "Byron Pulsifer"
    }, {
        id:13,
    quoteText: "We can only learn to love by loving.",
    quoteAuthor: "Iris Murdoch"
    }, {
        id:14,
    quoteText: "Life is change. Growth is optional. Choose wisely.",
    quoteAuthor: "Karen Clark"
    }, {
        id:15,
    quoteText: "You'll see it when you believe it.",
    quoteAuthor: "Wayne Dyer"
    }, {
        id:16,
    quoteText: "Today is the tomorrow we worried about yesterday.",
    quoteAuthor: ""
    }, {
        id:17,
    quoteText: "It's easier to see the mistakes on someone else's paper.",
    quoteAuthor: ""
    }, {
        id:18,
    quoteText: "Every man dies. Not every man really lives.",
    quoteAuthor: ""
    }, {
        id:19,
    quoteText: "To lead people walk behind them.",
    quoteAuthor: "Lao Tzu"
    }, {
        id:20,
    quoteText: "Having nothing, nothing can he lose.",
    quoteAuthor: "William Shakespeare"
    }, {
        id:21,
    quoteText: "Trouble is only opportunity in work clothes.",
    quoteAuthor: "Henry J. Kaiser"
    }, {
        id:22,
    quoteText: "A rolling stone gathers no moss.",
    quoteAuthor: "Publilius Syrus"
    }, {
        id:23,
    quoteText: "Ideas are the beginning points of all fortunes.",
    quoteAuthor: "Napoleon Hill"
    }, {
        id:24,
    quoteText: "Everything in life is luck.",
    quoteAuthor: "Donald Trump"
    }, {
        id:25,
    quoteText: "Doing nothing is better than being busy doing nothing.",
    quoteAuthor: "Lao Tzu"
    }, {
        id:26,
    quoteText: "Trust yourself. You know more than you think you do.",
    quoteAuthor: "Benjamin Spock"
    }, {
        id:27,
    quoteText: "Study the past, if you would divine the future.",
    quoteAuthor: "Confucius"
    }, {
        id:28,
    quoteText: "The day is already blessed, find peace within it.",
    quoteAuthor: ""
    }, {
        id:29,
    quoteText: "From error to error one discovers the entire truth.",
    quoteAuthor: "Sigmund Freud"
    }, {
        id:30,
    quoteText: "Well done is better than well said.",
    quoteAuthor: "Benjamin Franklin"
    }, {
        id:31,
    quoteText: "Bite off more than you can chew, then chew it.",
    quoteAuthor: "Ella Williams"
    }, {
        id:32,
    quoteText: "Work out your own salvation. Do not depend on others.",
    quoteAuthor: "Buddha"
    }, 

]

const randomQuote= quotes[Math.floor(Math.random() * quotes.length)]

app.get('/quotes', cors(),(req, res) => {
  res.send(quotes)
})
app.get('/random', cors(),(req, res) => {
    res.send(quotes[Math.floor(Math.random() * quotes.length)])
  })

app.listen(port, () => {
  console.log(`srv is running in port ${port}`)
})
