import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Navbar from './components/Navbar/Navbar';
import AlumnoCard from './components/AlumnoCard/AlumnoCard';
import Contador from './components/Contador/Contador'
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
          estadoInicial="Matriculado" 
        />
        <AlumnoCard 
          nombre="Maria Perez" 
          carrera="Diseño Gráfico" 
          estadoInicial="Inactivo" 
        />
        <AlumnoCard 
          nombre="Carlos Mendoza" 
          carrera="Administración Industrial" 
          estadoInicial="Matriculado" 
        />
        <AlumnoCard 
          nombre="Lucía Fernández" 
          carrera="Ciberseguridad" 
          estadoInicial="Matriculado" 
        />
        <AlumnoCard 
          nombre="Jorge Ramírez" 
          carrera="Redes y Comunicaciones" 
          estadoInicial="Inactivo" 
        />
        <AlumnoCard 
          nombre="Sofía Quispe" 
          carrera="Desarrollo Web" 
          estadoInicial="Matriculado" 
        />
        <AlumnoCard 
          nombre="Mateo Rossi" 
          carrera="Diseño Gráfico" 
          estadoInicial="Inactivo" 
        />
        <AlumnoCard 
          nombre="Camila Torres" 
          carrera="Ingeniería de Software" 
          estadoInicial="Matriculado" 
        />
        <AlumnoCard 
          nombre="Alejandro Castro" 
          carrera="Sistemas de Información" 
          estadoInicial="Matriculado" 
        />
        
        <Contador 
        
        />

        </div>
      </div>
    </>
  );
}

export default App;