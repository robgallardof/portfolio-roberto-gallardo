'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { JSX } from 'react';

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen w-full font-sans bg-background text-foreground">
      {/* 🚀 Hero */}
      <section className="flex flex-col items-center justify-center py-20 px-6 text-center space-y-4">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src="/avatar.jpg"
          alt="Roberto Gallardo"
          className="w-28 h-28 rounded-full border shadow-sm"
        />

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold tracking-tight text-balance"
        >
          Roberto Gallardo
        </motion.h1>

        <TypeAnimation
          sequence={[
            'Full Stack .NET Developer 💻', 2000,
            'Clean Code Advocate 📐', 2000,
            'DevOps Enthusiast 🚀', 2000,
          ]}
          wrapper="span"
          speed={50}
          className="block text-muted-foreground text-base font-mono"
          repeat={Infinity}
        />
      </section>

      {/* 🧠 About & Skills */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="text-muted-foreground leading-relaxed text-pretty text-sm">
            I’m a software engineer focused on crafting clean, maintainable systems using .NET, React, and cloud-native tools. Passionate about good architecture, testing, and developer experience.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Core Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              'C#', '.NET 8', 'React', 'Next.js', 'TailwindCSS', 'Azure',
              'MongoDB', 'PostgreSQL', 'Node.js', 'CI/CD', 'Docker',
            ].map(skill => (
              <span
                key={skill}
                className="px-3 py-1 text-xs bg-muted text-foreground rounded-full border border-border"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 💼 Experience & Education */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          {[
            ['GEODIS', 'Full-Stack Developer', '2023 – Present'],
            ['BANSÍ', 'Systems Dev Coordinator B', '2022 – 2023'],
            ['MEGACABLE', 'Senior Developer', '2019 – 2022'],
          ].map(([company, role, date], i) => (
            <div key={i} className="mb-5">
              <p className="font-medium">{company}</p>
              <p className="text-sm text-muted-foreground">{role}</p>
              <p className="text-xs text-muted-foreground">{date}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          {[
            ['Universidad Veracruzana', 'B.A. Computer Systems · 2015–2019'],
            ['Microsoft Azure Fundamentals', 'Issued by Microsoft'],
          ].map(([institution, detail], i) => (
            <div key={i} className="mb-5">
              <p className="font-medium">{institution}</p>
              <p className="text-sm text-muted-foreground">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🛠 Projects */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-8">
        <h2 className="text-2xl font-semibold text-center">Projects</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            ['Firmmo.org', 'Digital signature SaaS with cryptographic flows and collaboration.'],
            ['ARQO UI', 'Modular UI system with clean architecture and multi-language support.'],
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-muted/40 border border-border hover:shadow transition-all"
            >
              <p className="font-semibold">{title}</p>
              <p className="text-sm text-muted-foreground mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✉️ Contact */}
      <section className="px-6 py-24 text-center">
        <h2 className="text-2xl font-semibold mb-2">Let’s connect</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto text-pretty">
          I’m open to collaborations and exciting projects. Feel free to reach out and start a conversation.
        </p>
        <a href="mailto:contact@lrobertogallardo.mx">
          <Button size="lg" className="px-6 rounded-full">Contact Me</Button>
        </a>
      </section>

      {/* ⚡ Footer */}
      <footer className="text-center py-6 text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Roberto Gallardo — Built with Next.js & Tailwind.
      </footer>
    </main>
  );
}