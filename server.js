import express from "express";
import connectDB from "./config/koneksi.js";
import router from "./routes/api.js";

const app = express();
const port = 3000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
