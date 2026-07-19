import { footer } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-dark-border py-6 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-gray-600 text-xs">{footer.copyright}</p>
        <p className="text-gray-600 text-xs">{footer.credit}</p>
      </div>
    </footer>
  )
}
