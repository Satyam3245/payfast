import { CreditCard, Twitter, Github, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Connect With Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Services</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">UPI</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Transfer</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Use As Product</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <div className="flex items-center space-x-2 bg-gray-700 p-4 rounded-lg">
              <CreditCard className="w-10 h-10 text-green-400" />
              <span className="text-3xl font-bold text-green-400">Payfast</span>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          © {new Date().getFullYear()} Payfast. All rights reserved.
        </div>
      </div>
    </footer>
  )
}