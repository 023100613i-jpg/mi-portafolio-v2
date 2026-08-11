"use client";

import Image from "next/image";
import Link from "next/link";
import { getImagePrefix } from "../../utils/utils";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Texto - lado izquierdo */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              ¡Hola! Soy Astrit Fernanda {' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Luza Grajeda
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-4">
              Estudiante de Ingenieria de Sistemas
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Soy una estudiante de la carrera de Ingeniera de Sistemas de la universidad UAC 
            </p>
            
            {/* Botones de acción - SIN email ni sign in */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#projects"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
              >
                Ver Proyectos
              </Link>
              <Link
                href="#contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                Contactarme
              </Link>
            </div>
          </div>

          {/* Imagen - lado derecho */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <Image
                width={1024}
                height={1024}
                alt="Foto de perfil"
                src={`${getImagePrefix()}image/avatar1.jpg`}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}