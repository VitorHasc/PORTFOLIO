export default function Footer() {
  return (
    <footer className="border-t border-[#ABB2BF] py-8 px-20">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span>Vitor Hugo A. Schell</span>
          <span className="text-[#ABB2BF]">vitorschell@gmail.com</span>
        </div>
        <span className="text-[#ABB2BF]">Fullstack developer</span>
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
  )
}
