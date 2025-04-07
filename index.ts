import express from 'express';
import alumnosRoutes from './src/routes/alumnos';

const app = express();
app.use(express.json());

app.use('/api/alumnos', alumnosRoutes)


const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log('Server running'))