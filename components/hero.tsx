'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import AnimatedSection from './animated-section';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

interface HeroProps {
  language: 'en' | 'pt';
}

export default function Hero({ language }: HeroProps) {
  const [isTypingFinished, setIsTypingFinished] = useState(false);
  const [isNameFinished, setIsNameFinished] = useState(false);
  const [isTitleFinished, setIsTitleFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNameFinished(true);
    }, 3000);

    const titleTimer = setTimeout(() => {
      setIsTitleFinished(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(titleTimer);
    };
  }, []);

  useEffect(() => {
    if (isNameFinished && isTitleFinished) {
      setIsTypingFinished(true);
    }
  }, [isNameFinished, isTitleFinished]);

  const texts = {
    en: {
      name: 'Vítor Hugo de Abreu Schell',
      title: 'Fullstack Developer',
      contactButton: 'Get in touch!',
      email: 'vitorschell0@gmail.com',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    pt: {
      name: 'Vítor Hugo de Abreu Schell',
      title: 'Desenvolvedor Fullstack',
      contactButton: 'Entre em contato!',
      email: 'vitorschell0@gmail.com',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    }
  };

  const content = texts[language];

  return (
    <AnimatedSection>
      <section
        id="home"
        className="relative px-6 md:px-20 pt-16 pb-8 md:pt-32 md:pb-2 flex flex-col-reverse md:flex-row justify-center md:justify-between items-center text-center md:text-left"
      >
        <div className="max-w-xl">
          <h1
            className={`text-3xl md:text-4xl font-medium mb-2 typing-effect ${isNameFinished ? 'finished' : ''}`}
          >
            {/* Nome para a versão mobile */}
            <span className="block md:hidden">Vítor Hugo</span>
            {/* Nome para a versão desktop */}
            <span className="hidden md:block">{content.name}</span>
          </h1>

          <br />
          <h2
            className={`text-[#C778DD] text-xl md:text-2xl mb-8 typing-effect ${isTitleFinished ? 'finished' : ''}`}
          >
            {content.title}
          </h2>
          <br />
          <button className="border border-[#C778DD] px-4 py-2 hover:bg-[#C778DD] transition-colors">
            {content.contactButton}
          </button>

          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <FiMail className="text-[#C778DD]" />
              <a
                href={`mailto:${content.email}`}
                className="text-lg hover:text-[#C778DD]"
              >
                {content.email}
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <FiGithub className="text-[#C778DD]" />
              <a
                href="https://github.com/VitorHasc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-[#C778DD]"
              >
                {content.github}
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <FiLinkedin className="text-[#C778DD]" />
              <a
                href="https://www.linkedin.com/in/v%C3%ADtor-hugo-schell-b4a9a52b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-[#C778DD]"
              >
                {content.linkedin}
              </a>
            </div>
          </div>
        </div>

        <div className="relative mt-8 md:mt-0">
          {/* Foto de perfil visível fora da faixa de 420px a 1000px */}
          <div className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] relative z-10 mx-auto block sm:block md:hidden lg:block">
            <Image
              src="/vitor.jpeg"
              alt="Profile"
              width={280}
              height={280}
              className="rounded-full border-4 border-yellow-400 object-cover"
              priority
            />
          </div>

          {/* Os quadrados continuam visíveis em todas as larguras */}
          <div className="absolute top-[-20px] left-[50%] translate-x-[-50%] md:translate-x-0 md:left-[-40px] w-[80px] h-[80px] md:w-[100px] md:h-[100px] border border-[#C778DD] z-0"></div>
          <div className="absolute top-[0px] right-[50%] translate-x-[50%] md:translate-x-0 md:right-[0px] w-[80px] h-[80px] md:w-[100px] md:h-[100px] border border-[#C778DD] z-0"></div>
        </div>
      </section>
    </AnimatedSection>
  );
}
