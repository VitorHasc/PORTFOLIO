'use client';
import { useState, useEffect } from 'react';
import AnimatedSection from './animated-section';

interface AboutProps {
  language: 'en' | 'pt';
}

export default function About({ language }: AboutProps) {
  // Definindo o conteúdo de acordo com o idioma
  const texts = {
    en: {
      title: "about me",
      description: `I'm a fullstack developer and currently completing a technical course in Computer Science integrated with high school at Escola Técnica Estadual Monteiro Lobato. I'm actively looking for internship opportunities in the IT field. I always strive to study new technologies to improve my skills and stay aligned with market trends.`
    },
    pt: {
      title: "sobre mim",
      description: `Sou desenvolvedor fullstack e formando do curso técnico em Informática integrado ao ensino médio na Escola Técnica Estadual Monteiro Lobato. Atualmente, estou em busca de oportunidades de estágio na área de TI. Sempre procuro estudar novas tecnologias para aprimorar meus conhecimentos na área e estar alinhado às tendências do mercado.`
    }
  };

  const content = texts[language]; // Selecione o conteúdo baseado no idioma

  return (
    <AnimatedSection>
      <section
        id="about"
        className="px-6 md:px-20 py-16 md:py-32 pb-1 flex flex-col items-center md:items-start"
      >
        <h2 className="text-2xl mb-8 md:mb-12 text-center md:text-left">
          <span className="text-[#C778DD]">#</span>{content.title}
        </h2>

        <div className="max-w-xl text-center md:text-left">
          <p className="text-[#ABB2BF] mb-8 leading-relaxed">
            {content.description}
          </p>
        </div>

        <div className="hidden md:block absolute right-20 dot-pattern w-20 h-20" />
      </section>
    </AnimatedSection>
  );
}
