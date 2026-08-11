"use client";

import Navbar from '@/components/navbar'
import Hero from './hero'
import Projects from './projects'
import Skills from './skills'
import ContactForm from './contact-form'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <ContactForm />
      <Footer />
    </main>
  )
}