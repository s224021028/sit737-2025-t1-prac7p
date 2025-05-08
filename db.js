// MongoDB connection configuration
const mongoose = require("mongoose")

// Get MongoDB connection details from environment variables
const username = process.env.MONGO_USERNAME || "calcuser"
const password = process.env.MONGO_PASSWORD || "calcpassword"
const host = process.env.MONGO_HOST || "localhost"
const database = process.env.MONGO_DATABASE || "calculatordb"

// Construct MongoDB connection string
const uri = `mongodb://${username}:${password}@${host}:27017/${database}?authSource=admin`

// Connect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err))

module.exports = mongoose