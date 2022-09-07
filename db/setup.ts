import Database from "better-sqlite3";
const db = Database('./db/setup.db', { verbose: console.log });
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
    

];
const droptable= db.prepare(`DROP TABLE quotes`)
droptable.run()
const createQuotetbl =db.prepare(`
CREATE TABLE quotes(
    id INTEGER NOT NULL,
    quote TEXT,
    author TEXT,
    PRIMARY KEY(id)

)`);
createQuotetbl.run()

const createQuote = db.prepare(`
        INSERT INTO quotes (quote,author) VALUES (?, ?);
    `)
    for(let quote of quotes){
        createQuote.run(quote.quote,quote.author.name+quote.author.surname)}