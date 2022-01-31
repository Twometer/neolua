const fs = require('fs')
const express = require('express')

let app = express()
app.use(express.json())

const dataBaseFolder = '/app/data'

app.listen(5050, () => {
    app.get('/api/files', (req, resp) => {
        let f = fs.readdirSync(dataBaseFolder)
        resp.json(f)
    })
    app.post('/api/files', (req, resp) => {
        let fileName = req.body.name
        if (!fileName) return
        if (fileName.includes('/') || fileName.includes('\\')) return

        let filePath = `${dataBaseFolder}/${fileName}`
        console.log(filePath)
        fs.writeFileSync(filePath, req.body.content)
        resp.json({ status: 'ok' })
    })
    app.use('/data', express.static(dataBaseFolder))
    app.use('/', express.static('/app/sr/public'))
})
