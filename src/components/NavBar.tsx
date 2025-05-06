
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">Lovable</span>
              </a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">Sign In</Button>
            <Button className="gradient-bg">Get Started</Button>
          </div>
          
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Features</a>
            <a href="#testimonials" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Testimonials</a>
            <a href="#pricing" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Pricing</a>
            <div className="flex flex-col space-y-2 px-3 py-2">
              <Button variant="outline" className="border-blue-600 text-blue-600 justify-center w-full">Sign In</Button>
              <Button className="gradient-bg justify-center w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
