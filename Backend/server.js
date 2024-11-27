const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
// import path from "path";
const path = require("path")

const adminRoutes = require("./routes/adminRoutes");
const blogRoutes = require("./routes/blogRoutes");

dotenv.config();
const app = express();


app.use(bodyParser.json());
app.use(cors());

const _dirname = path.resolve();

// Connect to Database
connectDB();

// Error Handling Middleware
app.use(require("./middleware/errorHandler"));

// Routes
app.use("/api/admin", adminRoutes);
app.use("/api", blogRoutes);

app.use(express.static(path.join(_dirname, "/Frontend/blog-app/build")));
app.get('*', (_, res)=>{
  res.sendFile(path.resolve(_dirname, "Frontend", "blog-app", "build", "index.html"));
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
