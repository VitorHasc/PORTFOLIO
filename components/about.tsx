import AnimatedSection from './animated-section'

export default function About() {
  return (
    <AnimatedSection>
      <section id="about" className="px-20 py-32 pb-1">
        <h2 className="text-2xl mb-12">
          <span className="text-[#C778DD]">#</span>sobre mim
        </h2>

        <div className="max-w-2xl">
          <p className="text-[#ABB2BF] mb-8 leading-relaxed">
            Sou desenvolvedor fullstack e formando do curso técnico em Informática integrado ao ensino médio na 
            Escola Técnica Estadual Monteiro Lobato. Atualmente, estou em busca de oportunidades de estágio na área de 
            TI. Sempre procuro estudar novas tecnologias para aprimorar meus conhecimentos na área e estar alinhado 
            às tendências do mercado.
          </p>
        </div>

        <div className="absolute right-20 dot-pattern w-20 h-20" />
      </section>
    </AnimatedSection>
  )
}

