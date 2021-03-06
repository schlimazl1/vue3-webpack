// 测试 dist 文件
import express from 'express'

const app = express()
const PORT = 4200

app.use(express.static('./dist'))

app.use((req, res) => {
  res.redirect(301, '/home.html')
})

app.listen(PORT, () => {
  console.log('app is running at port ' +  PORT)
})