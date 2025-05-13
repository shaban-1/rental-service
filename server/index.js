import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import sequelize from './config/database.js';
import router from "./routes/index.js";
// import './models/user.js';
// import './models/offer.js';
// import './models/review.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);

const start = async () => {
	try {
		await sequelize.authenticate();
		console.log('Соединение с БД установлено');
		await sequelize.sync();
		console.log('Таблицы созданы');
		
		app.listen(PORT, () => {
			console.log(`Сервер запущен на порте ${PORT}`);
		});
	} catch (e) {
		console.error('Ошибка подключения к БД:', e);
	}
};


start();