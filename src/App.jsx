import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Navbar from './components/Navbar/Navbar';
import AlumnoCard from './components/AlumnoCard/AlumnoCard';

function App() {
  return (
    <>
      {/* 1. Insertamos el Navbar en la parte superior */}
      <Navbar />

      {/* 2. Contenedor principal de la página */}
      <div className="container">
        <h2 className="mb-4">Directorio de Alumnos</h2>
        
        <div className="row">
          {/* 3. Reutilizamos el componente AlumnoCard pasándole Props */}
          <AlumnoCard 
          nombre="Daniel Puccio" 
          carrera="Desarrollo de Software" 
          estado="Matriculado" 
        />
        <AlumnoCard 
          nombre="Maria Perez" 
          carrera="Diseño Gráfico" 
          estado="Inactivo" 
        />
        <AlumnoCard 
          nombre="Carlos Mendoza" 
          carrera="Administración Industrial" 
          estado="Matriculado" 
        />
        <AlumnoCard 
          nombre="Lucía Fernández" 
          carrera="Ciberseguridad" 
          estado="Matriculado" 
        />
        <AlumnoCard 
          nombre="Jorge Ramírez" 
          carrera="Redes y Comunicaciones" 
          estado="Inactivo" 
        />
        <AlumnoCard 
          nombre="Sofía Quispe" 
          carrera="Desarrollo Web" 
          estado="Matriculado" 
        />
        <AlumnoCard 
          nombre="Mateo Rossi" 
          carrera="Diseño Gráfico" 
          estado="Inactivo" 
        />
        <AlumnoCard 
          nombre="Camila Torres" 
          carrera="Ingeniería de Software" 
          estado="Matriculado" 
        />
        <AlumnoCard 
          nombre="Alejandro Castro" 
          carrera="Sistemas de Información" 
          estado="Matriculado" 
        />
        <AlumnoCard 
          nombre="Valeria Gómez" 
          carrera="Administración Industrial" 
          estado="Inactivo" 
        />
        <AlumnoCard 
          nombre="Gabriel Flores" 
          carrera="Desarrollo de Software" 
          estado="Matriculado" 
        />
        <AlumnoCard 
          nombre="Elena Morales" 
          carrera="Marketing Digital" 
          estado="Inactivo" 
        />
        <AlumnoCard 
          nombre="Rodrigo Benítez" 
          carrera="Soporte Técnico" 
          estado="Matriculado" 
        />
        <AlumnoCard 
          nombre="Claudia Rojas" 
          carrera="Diseño Gráfico" 
          estado="Matriculado" 
        />
        <AlumnoCard 
          nombre="Adrián Navarro" 
          carrera="Redes y Comunicaciones" 
          estado="Inactivo" 
        />
        <AlumnoCard 
          nombre="Paola Silva" 
          carrera="Desarrollo Web" 
          estado="Matriculado" 
        />
        <AlumnoCard 
          nombre="Fernando Gutierrez" 
          carrera="Ingeniería de Software" 
          estado="Inactivo" 
        />
        <AlumnoCard 
          nombre="Natalia Vega" 
          carrera="Administración Industrial" 
          estado="Matriculado" 
        />
        <AlumnoCard 
          nombre="Hugo Paredes" 
          carrera="Ciberseguridad" 
          estado="Inactivo" 
        />
        <AlumnoCard 
          nombre="Daniela Herrera" 
          carrera="Desarrollo de Software" 
          estado="Matriculado" 
        />
        <AlumnoCard 
          nombre="Gonzalo Espinoza" 
          carrera="Sistemas de Información" 
          estado="Matriculado" 
        />
        <AlumnoCard 
          nombre="Mariana Alarcón" 
          carrera="Diseño Gráfico" 
          estado="Inactivo" 
        />
        <AlumnoCard 
          nombre="Esteban Vidal" 
          carrera="Soporte Técnico" 
          estado="Matriculado" 
        />
        <AlumnoCard 
          nombre="Isabella Ortiz" 
          carrera="Desarrollo Web" 
          estado="Inactivo" 
        />
        <AlumnoCard 
          nombre="Sebastián Reyes" 
          carrera="Redes y Comunicaciones" 
          estado="Matriculado" 
        />
        <AlumnoCard 
          nombre="Andrea Campos" 
          carrera="Marketing Digital" 
          estado="Matriculado" 
        />
        <AlumnoCard 
          nombre="Kevin Delgado" 
          carrera="Ingeniería de Software" 
          estado="Inactivo" 
        />
        <AlumnoCard 
          nombre="Beatriz Salazar" 
          carrera="Administración Industrial" 
          estado="Matriculado" 
        />
        <AlumnoCard 
          nombre="Javier Villanueva" 
          carrera="Desarrollo de Software" 
          estado="Inactivo" 
        />
        <AlumnoCard 
          nombre="Patricia Medina" 
          carrera="Ciberseguridad" 
          estado="Matriculado" 
        />
        </div>
      </div>
    </>
  );
}

export default App;