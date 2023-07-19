const express = require('express')
const {ScrapBCA} = require("mutasi-scraper");
require('dotenv').config()

const app = express()

app.get('/', (req, res) => {

  (async () => {
    const scraper = new ScrapBCA(process.env.BCAID,process.env.BCAPWD, {
        headless : false
      });
    
      var result = await scraper.getStatement("1", "7", "3", "7");
      console.log(result);
      res.send(result)
    })();
  
})

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`)
})




