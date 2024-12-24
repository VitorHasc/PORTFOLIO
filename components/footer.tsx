export default function Footer() {
  return (
    <footer className="border-t border-[#ABB2BF] py-8 px-4 sm:px-8 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
          <span>Vitor Hugo A. Schell</span>
          <span className="text-[#ABB2BF]">vitorschell@gmail.com</span>
        </div>
        <span className="text-[#ABB2BF] text-center">Fullstack developer</span>
      </div>
      <div className="mt-4 text-center">
        <span className="text-[#ABB2BF]">
          Design baseado na criação de{' '}
          <a
            href="https://www.figma.com/community/file/1164933568884615740/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C778DD] hover:underline"
          >
            Elias
          </a>
        </span>
      </div>
    </footer>
  );
}
