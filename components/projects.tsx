import Image from 'next/image'
import AnimatedSection from './animated-section'

const projects = [
  {
    title: 'Sports Match',
    description: 'Aplicativo para unir praticantes de esportes.',
    image: '/APP.png',
    tech: 'ReactNative Expo Node Express Prisma MySQL',
    live: true,
    cached: true,
    linkfront: "https://github.com/VitorHasc/SPORTS-MATCH-REACT-NATIVE",
    linkapi: "https://github.com/VitorHasc/SPORTS-MATCH-API"
  },
  {
    title: 'Spring Boot Fichas',
    description: 'Projeto desenvolvido para estudo do Spring Boot, tendo seu Frontend desenvolvido em React + Typescript.',
    image: '/ficha.png',
    tech: 'Java SpringBoot React TypeScript',
    live: true,
    linkfront: "https://github.com/VitorHasc/FICHA-TYPESCRIPT-REACT",
    linkapi: 'https://github.com/VitorHasc/JAVA-API-SPRING'
  },
  {
    title: 'Casaboa - Catálogo de Imóveis',
    description: 'Site que permite o cadastro e busca de imóveis através de tags e outros fatores.',
    image: '/casaboa.png',
    tech: 'Next Prisma PostgreSQL',
    live: true,
    linkfront: 'https://github.com/VitorHasc/CATALOG-SITE-NEXT'
  }
]

export default function Projects() {
  return (
    <AnimatedSection>
      <section id="projects" className="px-6 md:px-20 pt-16 pb-8 md:pt-32 md:pb-10">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl">
            <span className="text-[#C778DD]">#</span>projetos
          </h2>
          <a href="https://github.com/VitorHasc?tab=repositories" className="text-white hover:underline">Ver Mais →</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="w-full"
              />
              <div className="project-card-header">
                <span className="text-[#ABB2BF] text-sm">{project.tech}</span>
              </div>
              <div className="p-4">
                <h3 className="text-xl mb-2">{project.title}</h3>
                <p className="text-[#ABB2BF] mb-4">{project.description}</p>
                <div className="flex gap-2">
                  {project.linkfront && (
                    <a href={project.linkfront} target="_blank" rel="noopener noreferrer">
                      <button className="live-button">
                        Ver Frontend
                      </button>
                    </a>
                  )}
                  {project.linkapi && (
                    <a href={project.linkapi} target="_blank" rel="noopener noreferrer">
                      <button className="live-button">
                        Ver API
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
  )
}
