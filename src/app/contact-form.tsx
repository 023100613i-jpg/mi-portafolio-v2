"use client";

import { useState } from "react";
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    interest: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Formulario enviado:", formData);
    alert("¡Mensaje enviado con éxito! Te contactaré pronto.");
    
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      interest: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="px-4 md:px-8 py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contacto
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ¿Listo para empezar? Completa el formulario y emprendamos juntos 
            un viaje de innovación y éxito.
          </p>
        </div>

        {/* Contenedor principal */}
        <div className="grid md:grid-cols-5 gap-8 bg-white rounded-2xl shadow-xl overflow-hidden">
          
          {/* Lado izquierdo - Información */}
          <div className="md:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white mb-3">
              Información de Contacto
            </h3>
            <p className="text-gray-400 text-sm mb-8">
              Completa el formulario y te responderé en 24 horas.
            </p>
            
            <div className="space-y-5">
              <div className="flex items-center gap-4 text-white">
                <PhoneIcon className="h-6 w-6 text-blue-400 flex-shrink-0" />
                <span>+51 986195166</span>
              </div>
              
              <div className="flex items-center gap-4 text-white">
                <EnvelopeIcon className="h-6 w-6 text-blue-400 flex-shrink-0" />
                <span>astritfe2017@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-4 text-white">
                <TicketIcon className="h-6 w-6 text-blue-400 flex-shrink-0" />
                <span>Abrir Ticket de Soporte</span>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="mt-10 pt-8 border-t border-gray-700">
              <p className="text-gray-400 text-sm mb-4">Sígueme en redes sociales</p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Lado derecho - Formulario */}
          <div className="md:col-span-3 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre y Apellido */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="ej. Lucas"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="ej. Jones"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ej. lucas@mail.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  required
                />
              </div>

              {/* Interés */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ¿En qué estás interesado?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {["Diseño", "Desarrollo", "Soporte", "Otro"].map((option) => {
                    const englishMap: Record<string, string> = {
                      "Diseño": "Design",
                      "Desarrollo": "Development",
                      "Soporte": "Support",
                      "Otro": "Other"
                    };
                    const englishValue = englishMap[option] || option;
                    
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setFormData({ ...formData, interest: englishValue })}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                          formData.interest === englishValue
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Tu Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntame sobre tu proyecto..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                  required
                />
              </div>

              {/* Botón enviar */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;