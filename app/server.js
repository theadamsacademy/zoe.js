import app from './config/app.js'

app.listen(process.env.WEB_SERVER_PORT, () => {
  console.log('Server is started')
})
