import AnimatedSection from './animated-section';

export default function About() {
  return (
    <AnimatedSection>
      <section
        id="about"
        className="px-6 md:px-20 py-16 md:py-32 pb-1 flex flex-col items-center md:items-start"
      >
        <h2 className="text-2xl mb-8 md:mb-12 text-center md:text-left">
          <span className="text-[#C778DD]">#</span>sobre mim
        </h2>

        <div className="max-w-xl text-center md:text-left">
          <p className="text-[#ABB2BF] mb-8 leading-relaxed">
            Sou desenvolvedor fullstack e formando do curso técnico em Informática integrado ao ensino médio na 
            Escola Técnica Estadual Monteiro Lobato. Atualmente, estou em busca de oportunidades de estágio na área de 
            TI. Sempre procuro estudar novas tecnologias para aprimorar meus conhecimentos na área e estar alinhado 
            às tendências do mercado.
          </p>
        </div>

        <div className="hidden md:block absolute right-20 dot-pattern w-20 h-20" />
      </section>
    </AnimatedSection>
  );
}
