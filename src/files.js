var request = require('superagent')

request.get()'../public/lib/music').end((err, res) => {
  console.log(res)
})
