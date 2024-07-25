import express from "express";
import { centralRouter } from "./src/routes/central.routes.js";

const app = express();

app.use(express.json());

app.use('/central', centralRouter);

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Nosso app tá rodando na porta: http://localhost:${PORT}`);
});


