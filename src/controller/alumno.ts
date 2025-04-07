import AlumnoService from '../db/alumno';

const alumnoService = new AlumnoService();

class AlumnoController {
    async getAllAlumnos() {
        const alumnos = await alumnoService.getAllAlumnos();

        const resultado = alumnos.map(alumno => {
            var mensaje = '';

            if (alumno.calificacion > 90 && !alumno.adeudos) {
                mensaje = 'Te graduaste con honores';
            } else if (alumno.calificacion > 90 && alumno.adeudos) {
                mensaje = 'Tenias honores pero tienes un adeudo';
            } else if (alumno.calificacion >= 70 && alumno.calificacion <= 90) {
                mensaje = 'Pasaste muy apenas';
            } else if (alumno.calificacion < 70 && !alumno.adeudos) {
                mensaje = 'Como no tienes adeudo tienes derecho a examen de recuperacion';
            } else if (alumno.calificacion < 70 && alumno.adeudos) {
                mensaje = 'Expulsado';
            }

            return {matricula: alumno.matricula, mensaje};
        });

        return resultado;
    }
}

export default AlumnoController;