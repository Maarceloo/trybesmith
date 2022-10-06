import express from 'express';
import 'express-async-errors';
import productRoute from './routes/products.routes';
import userRoute from './routes/users.routes';
import orderRoute from './routes/orders.routes';
import loginRoute from './routes/login.routes';

const app = express();

app.use(express.json());
app.use('/products', productRoute);
app.use('/users', userRoute);
app.use('/orders', orderRoute);
app.use('/login', loginRoute);

export default app;
