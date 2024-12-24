'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import AnimatedSection from './animated-section';
import { FiMail } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';

export default function Hero() {
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

  return (
    <AnimatedSection>
      <section id="home" className="relative px-6 md:px-20 pt-16 pb-8 md:pt-32 md:pb-2 flex flex-col md:flex-row justify-between items-center">
        <div className="max-w-xl text-center md:text-left">
          <h1 className={`text-3xl md:text-4xl font-medium mb-2 typing-effect ${isNameFinished ? 'finished' : ''}`}>
            Vítor Hugo de A. Schell
          </h1>
          <br />
          <h2 className={`text-[#C778DD] text-xl md:text-2xl mb-8 typing-effect ${isTitleFinished ? 'finished' : ''}`}>
            Fullstack Developer
          </h2>
          <br />
          <button className="border border-[#C778DD] px-4 py-2 hover:bg-[#C778DD] transition-colors">
            Entre em contato!
          </button>

          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <FiMail className="text-[#C778DD]" />
              <a href="mailto:vitorschell0@gmail.com" className="text-lg hover:text-[#C778DD]">
                vitorschell0@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <FiGithub className="text-[#C778DD]" />
              <a href="https://github.com/VitorHasc" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-[#C778DD]">
                GitHub
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <FiLinkedin className="text-[#C778DD]" />
              <a href="https://www.linkedin.com/in/v%C3%ADtor-hugo-schell-b4a9a52b6/" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-[#C778DD]">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="relative mt-8 md:mt-0 left-[-100px]">
          <div className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] relative z-10 mx-auto">
            <Image
              src="/vitor.jpeg"
              alt="Profile"
              width={280}
              height={280}
              className="rounded-full border-4 border-yellow-400 object-cover"
              priority
            />
          </div>
          <div className="absolute top-[-20px] left-[-40px] w-[80px] h-[80px] md:w-[100px] md:h-[100px] border border-[#C778DD] z-0"></div>
          <div className="absolute top-[0px] right-[0px] w-[80px] h-[80px] md:w-[100px] md:h-[100px] border border-[#C778DD] z-0"></div>
          <div className="absolute bottom-[-40px] left-[-40px] dot-pattern w-16 h-16 md:w-20 md:h-20" />
        </div>


        <div className="absolute top-20 left-10 dot-pattern w-16 h-16 md:w-20 md:h-20" />
      </section>
    </AnimatedSection>
  );
}
