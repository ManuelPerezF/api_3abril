class AlumnoService {

    async getAllAlumnos() {
        const alumnos = [
            { nombre: 'Manuel', matricula: 'A001', calificacion: 95, adeudos: false },
            { nombre: 'Juan', matricula: 'A002', calificacion: 95, adeudos: true },
            { nombre: 'Maria', matricula: 'A003', calificacion: 80, adeudos: false },
            { nombre: 'Jose', matricula: 'A004', calificacion: 60, adeudos: true },
            { nombre: 'Ana', matricula: 'A005', calificacion: 60, adeudos: false }
        ]
        return alumnos;
    }
}

export default AlumnoService;