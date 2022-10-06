import express from 'express';
import 'express-async-errors';
import productRoute from './routes/products.routes';
import userRoute from './routes/users.routes';

const app = express();

app.use(express.json());
app.use('/products', productRoute);
app.use('/users', userRoute);

export default app;
