import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center py-8 px-20">
      <div className="flex items-center gap-2">
        <span className="text-sm">Vítor Hugo de Abreu Schell</span>
      </div>
      
      <div className="flex items-center gap-8">
        <Link href="#projects" className="nav-link">#projetos</Link>
        <Link href="#about" className="nav-link">#sobre mim</Link>
        <button className="nav-link">BR →</button>
      </div>
    </nav>
  )
}

