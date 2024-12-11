import express from 'express';


const app = express();


app.use("/",(req,res) => {
res.send ("server berjalan");
}

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
