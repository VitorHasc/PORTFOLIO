'use client';

interface FooterProps {
  language: 'en' | 'pt';
}

export default function Footer({ language }: FooterProps) {
  const texts = {
    en: {
      name: 'Vitor Hugo A. Schell',
      email: 'vitorschell0@gmail.com',
      role: 'Fullstack developer',
      designCredit: 'Design based on the creation of',
      designer: 'Elias'
    },
    pt: {
      name: 'Vitor Hugo A. Schell',
      email: 'vitorschell0@gmail.com',
      role: 'Desenvolvedor Fullstack',
      designCredit: 'Design baseado na criação de',
      designer: 'Elias'
    }
  };

  const content = texts[language];

  return (
    <footer className="border-t border-[#ABB2BF] py-8 px-4 sm:px-8 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
          <span>{content.name}</span>
          <span className="text-[#ABB2BF]">{content.email}</span>
        </div>
        <span className="text-[#ABB2BF] text-center">{content.role}</span>
      </div>
      <div className="mt-4 text-center">
        <span className="text-[#ABB2BF]">
          {content.designCredit}{' '}
          <a
            href="https://www.figma.com/community/file/1164933568884615740/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C778DD] hover:underline"
          >
            {content.designer}
          </a>
        </span>
      </div>
    </footer>
  );
}
