// Todos os controllers relacionados a rota de user
import { centrais } from "../database/centralDatabase.js";
import { Central } from "../models/central.models.js";
export const getCentrais = (req, res) => {
	res.status(200).send(centrais);
};

export const createCentral = (req, res) => {

	const newCentral = req.body;

	const dadoFormartado = new Central(
		newCentral.name,
		newCentral.email,
		newCentral.password
	);

  users.push(dadoFormartado)

  res.status(201).send(`O usuário ${dadoFormartado.name} foi criado com sucesso!`)
};