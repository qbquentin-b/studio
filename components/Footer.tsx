import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Design Web', href: '/services#design' },
    { name: 'Développement', href: '/services#dev' },
    { name: 'Marketing Digital', href: '/services#marketing' },
    { name: 'SEO', href: '/services#seo' },
  ];

  const company = [
    { name: 'À propos', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Carrières', href: '/careers' },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Studio<span className="text-gray-400">.</span>
            </Link>
            <p className="mt-4 text-gray-600 max-w-md leading-relaxed">
              Nous créons des expériences digitales exceptionnelles pour les
              entreprises visionnaires.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-3" />
                <span className="text-sm">contact@studio.com</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-3" />
                <span className="text-sm">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-3" />
                <span className="text-sm">Paris, France</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Entreprise
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            {currentYear} Studio. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
