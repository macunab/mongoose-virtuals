import dotenv from 'dotenv';
const dotenvResult = dotenv.config();
if(dotenvResult.error) {
    throw dotenvResult.error;
}
import express, { Application } from 'express';
import DbConfig from './db/dbConfig';
import { CommonRoutesConfig } from './helpers/commonRoutesConfig';
import { CollectionRoute } from './routes/collection.route';
import { RequestRoute } from './routes/request.route';
import { UserRoute } from './routes/user.route';

DbConfig.connectDb(process.env.DB_CNN as string);

const PORT: number = parseInt(process.env.PORT as string, 10);
const app: Application = express();
const routes: Array<CommonRoutesConfig> = [];

app.use(express.json());

routes.push(new UserRoute(app));
routes.push(new CollectionRoute(app));
routes.push(new RequestRoute(app));

app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`);
})