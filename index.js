import express from "express";
import { centralRouter } from "./src/routes/central.routes.js";
import { denunciaRouter } from "./src/routes/denuncia.routes.js";

const app = express();

app.use(express.json());

app.use('/central', centralRouter);
app.use('/denuncia', denunciaRouter);
const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Nosso app tá rodando na porta: http://localhost:${PORT}`);
});


