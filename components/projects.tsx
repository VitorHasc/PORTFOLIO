import Image from 'next/image';
import AnimatedSection from './animated-section';

type Language = 'en' | 'pt';

interface Project {
  title: {
    en: string;
    pt: string;
  };
  description: {
    en: string;
    pt: string;
  };
  image: string;
  tech: string;
  live: boolean;
  cached?: boolean;
  linkfront?: string;
  linkapi?: string;
}

const projects: Project[] = [
  {
    title: {
      en: 'Sports Match',
      pt: 'Sports Match',
    },
    description: {
      en: 'An app to connect sports enthusiasts.',
      pt: 'Aplicativo para unir praticantes de esportes.',
    },
    image: '/APP.png',
    tech: 'ReactNative Expo Node Express Prisma MySQL',
    live: true,
    cached: true,
    linkfront: "https://github.com/VitorHasc/SPORTS-MATCH-REACT-NATIVE",
    linkapi: "https://github.com/VitorHasc/SPORTS-MATCH-API"
  },
  {
    title: {
      en: 'Spring Boot Fichas',
      pt: 'Spring Boot Fichas',
    },
    description: {
      en: 'Project developed to study Spring Boot, with its frontend built in React + Typescript.',
      pt: 'Projeto desenvolvido para estudo do Spring Boot, tendo seu Frontend desenvolvido em React + Typescript.',
    },
    image: '/ficha.png',
    tech: 'Java SpringBoot React TypeScript',
    live: true,
    linkfront: "https://github.com/VitorHasc/FICHA-TYPESCRIPT-REACT",
    linkapi: 'https://github.com/VitorHasc/JAVA-API-SPRING'
  },
  {
    title: {
      en: 'Casaboa - Real Estate Catalog',
      pt: 'Casaboa - Catálogo de Imóveis',
    },
    description: {
      en: 'A website that allows users to register and search for properties by tags and other filters.',
      pt: 'Site que permite o cadastro e busca de imóveis através de tags e outros fatores.',
    },
    image: '/casaboa.png',
    tech: 'Next Prisma PostgreSQL',
    live: true,
    linkfront: 'https://github.com/VitorHasc/CATALOG-SITE-NEXT'
  }
];

export default function Projects({ lang = 'pt' }: { lang?: Language }) {
  return (
    <AnimatedSection>
      <section id="projects" className="px-6 md:px-20 pt-16 pb-8 md:pt-32 md:pb-10">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl">
            <span className="text-[#C778DD]">#</span>{lang === 'en' ? 'projects' : 'projetos'}
          </h2>
          <a href="https://github.com/VitorHasc?tab=repositories" className="text-white hover:underline">
            {lang === 'en' ? 'See More →' : 'Ver Mais →'}
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title[lang]} className="project-card">
              <Image
                src={project.image}
                alt={project.title[lang]}
                width={400}
                height={250}
                className="w-full"
              />
              <div className="project-card-header">
                <span className="text-[#ABB2BF] text-sm">{project.tech}</span>
              </div>
              <div className="p-4">
                <h3 className="text-xl mb-2">{project.title[lang]}</h3>
                <p className="text-[#ABB2BF] mb-4">{project.description[lang]}</p>
                <div className="flex gap-2">
                  {project.linkfront && (
                    <a href={project.linkfront} target="_blank" rel="noopener noreferrer">
                      <button className="live-button">
                        {lang === 'en' ? 'View Frontend' : 'Ver Frontend'}
                      </button>
                    </a>
                  )}
                  {project.linkapi && (
                    <a href={project.linkapi} target="_blank" rel="noopener noreferrer">
                      <button className="live-button">
                        {lang === 'en' ? 'View API' : 'Ver API'}
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
