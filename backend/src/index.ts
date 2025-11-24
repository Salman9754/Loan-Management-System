import app from "./server.ts"
import { port } from "./config/env.ts"
import connectToDatabase from "./database/mongodb.ts"

app.listen(port, async () => {
    console.log(`Example app listening on port ${port}`)
    connectToDatabase()
})
