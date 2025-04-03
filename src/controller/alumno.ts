import AlumnoService from '../db/alumno';

const alumnoService = new AlumnoService();

class AlumnoController {
    async getAllAlumnos() {
        const alumnos = await alumnoService.getAllAlumnos();
        
    }

}

export default AlumnoController;