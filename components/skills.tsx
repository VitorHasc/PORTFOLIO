import { FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaGit } from 'react-icons/fa';
import { SiTypescript, SiExpress, SiDjango, SiSpringboot, SiMysql, SiMongodb, SiPostman, SiGithub } from 'react-icons/si';
import AnimatedSection from './animated-section';

interface SkillsProps {
  language: 'en' | 'pt'; // Define o tipo de variável que vai controlar o idioma
}

const frontendIcons = [
  { icon: FaJs, label: { en: 'JavaScript', pt: 'JavaScript' }, color: '#F7DF1E' },
  { icon: SiTypescript, label: { en: 'TypeScript', pt: 'TypeScript' }, color: '#3178C6' },
  { icon: FaReact, label: { en: 'React', pt: 'React' }, color: '#61DBFB' },
  { icon: FaReact, label: { en: 'React Native', pt: 'React Native' }, color: '#61DBFB' },
];

const backendAndDatabaseIcons = [
  { icon: FaNodeJs, label: { en: 'Node.js', pt: 'Node.js' }, color: '#68A063' },
  { icon: SiExpress, label: { en: 'Express', pt: 'Express' }, color: '#000000' },
  { icon: FaPython, label: { en: 'Python', pt: 'Python' }, color: '#306998' },
  { icon: SiDjango, label: { en: 'Django', pt: 'Django' }, color: '#092E20' },
  { icon: FaJava, label: { en: 'Java', pt: 'Java' }, color: '#007396' },
  { icon: SiSpringboot, label: { en: 'Spring Boot', pt: 'Spring Boot' }, color: '#6DB33F' },
  { icon: SiMysql, label: { en: 'MySQL', pt: 'MySQL' }, color: '#00758F' },
  { icon: SiMongodb, label: { en: 'MongoDB', pt: 'MongoDB' }, color: '#4DB33D' },
];

const otherIcons = [
  { icon: SiPostman, label: { en: 'Postman', pt: 'Postman' }, color: '#FF6C37' },
  { icon: FaGit, label: { en: 'Git', pt: 'Git' }, color: '#F1502F' },
  { icon: SiGithub, label: { en: 'GitHub', pt: 'GitHub' }, color: '#181717' },
];

export default function Skills({ language }: SkillsProps) {
  console.log(language + "AAAAAAAAAAA")
  return (
    <AnimatedSection>
      <div className="absolute -top-10 -left-10 dot-pattern w-20 h-20 z-10" />
      <div className="absolute -bottom-1 -right-10 geometric-squares w-20 h-20 z-10" />
      <section id="skills" className="px-6 md:px-20 py-1 md:pt-16 md:pb-2">
        <h2 className="text-2xl mb-12">
          <span className="text-[#C778DD]">#</span>{language === 'en' ? 'skills' : 'habilidades'}
        </h2>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="relative"></div>

          <div className="flex-1 space-y-12">
            <div>
              <h3 className="inline-block border border-[#ABB2BF] px-4 py-1 mb-4">
                {language === 'en' ? 'BackEnd' : 'BackEnd'}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {backendAndDatabaseIcons.map(({ icon: Icon, label, color }) => (
                  <div
                    key={label[language]}
                    className="flex flex-col items-center gap-2 p-4 border border-[#ABB2BF] hover:border-[#C778DD] transition-colors group"
                  >
                    <Icon
                      className="w-8 h-8 transition-colors"
                      style={{
                        color: color,
                      }}
                    />
                    <span className="text-sm text-[#ABB2BF] group-hover:text-[#C778DD] transition-colors">
                      {label[language]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="inline-block border border-[#ABB2BF] px-4 py-1 mb-4">
                {language === 'en' ? 'FrontEnd' : 'FrontEnd'}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {frontendIcons.map(({ icon: Icon, label, color }) => (
                  <div
                    key={label[language]}
                    className="flex flex-col items-center gap-2 p-4 border border-[#ABB2BF] hover:border-[#C778DD] transition-colors group"
                  >
                    <Icon
                      className="w-8 h-8 transition-colors"
                      style={{
                        color: color,
                      }}
                    />
                    <span className="text-sm text-[#ABB2BF] group-hover:text-[#C778DD] transition-colors">
                      {label[language]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="inline-block border border-[#ABB2BF] px-4 py-1 mb-4">
                {language === 'en' ? 'Other' : 'Outros'}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {otherIcons.map(({ icon: Icon, label, color }) => (
                  <div
                    key={label[language]}
                    className="flex flex-col items-center gap-2 p-4 border border-[#ABB2BF] hover:border-[#C778DD] transition-colors group"
                  >
                    <Icon
                      className="w-8 h-8 transition-colors"
                      style={{
                        color: color,
                      }}
                    />
                    <span className="text-sm text-[#ABB2BF] group-hover:text-[#C778DD] transition-colors">
                      {label[language]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
