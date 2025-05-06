
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Documentation", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Community", href: "#" },
        { label: "Developers", href: "#" },
        { label: "Support", href: "#" },
        { label: "Status", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
        { label: "Security", href: "#" },
        { label: "Cookies", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-white">Lovable</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-xs">
              AI-powered web application development platform that helps you build better software, faster.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'GitHub', 'LinkedIn', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-white mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            © {currentYear} Lovable. All rights reserved.
          </p>
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-medium text-sm">L</span>
            <span className="text-gray-400">Made with Lovable</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
