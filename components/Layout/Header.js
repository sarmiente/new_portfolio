import React from 'react';
import ThemeToggle from '../ThemeToggle';

export default function Header() {
  return (
    <>
      <header className="dark:text-white body-font ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="dark:text-white ml-3 text-3xl font-logo">
              Carlosarmiento
            </span>
          </a>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="#services" className="mr-5 hover:text-blue-500">
              Servicios
            </a>
            <a href="#features" className="mr-5 hover:text-blue-500">
              Beneficios
            </a>
            <a href="#steps" className="mr-5 hover:text-blue-500">
              Proceso
            </a>
            <a href="#contact" className="mr-5 hover:text-gray-500">
              Contacto
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </header>
    </>
  );
}
