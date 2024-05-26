const express = require('express')
const { userRouter } = require('./controller/userRouter')
const { errorHandler } = require('./errors/errorhandler')
const app = express()

const PORT = 5000

app.use(express.json())
app.use(userRouter)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server is running on :${PORT}`);
})

