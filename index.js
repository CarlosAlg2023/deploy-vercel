const app = require("./src/app.js")

const port = process.env.PORT || 3001;
app.listen(port)

console.log("Todo en orden...")