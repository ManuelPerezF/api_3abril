import { Request, Response, NextFunction } from 'express';
import AlumnoController from '../controller/alumno';

const alumnoController = new AlumnoController();

class AlumnoHttpHandler{
    async getAlumnos(request: Request, response: Response, next: NextFunction) {
        try {
            const alumnos = await alumnoController.getAllAlumnos();
            response.json(alumnos);
        } catch (error) {
            next(error);
        }
    }

}

export default AlumnoHttpHandler;