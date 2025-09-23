import React, { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  openBooking: () => void;
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ activeSection, scrollToSection, openBooking, isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  const navItems = [
    { id: 'start', label: 'Start' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'process', label: 'Process' },
    { id: 'compare', label: 'Compare' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const handleViewPlans = () => {
    scrollToSection('pricing');
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle escape key and focus trap
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isMobileMenuOpen || !mobileMenuRef.current) return;

      const focusableElements = mobileMenuRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('keydown', handleKeyDown);
      firstFocusableRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const logoSrc = isScrolled 
    ? 'https://i.ibb.co/p6RtDyzW/LOGO-MF-BW.png'
    : 'https://i.ibb.co/p6RtDyzW/LOGO-MF-BW.png';

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src={logoSrc}
                alt="MF Intel Logo"
                className="h-10 w-auto"
                loading="eager"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-black ${
                    activeSection === item.id
                      ? 'text-black border-b-2 border-black pb-1'
                      : isScrolled
                        ? 'text-gray-600'
                        : 'text-gray-800'
                  }`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex">
              <button
                onClick={handleViewPlans}
                className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
                data-open-modal="pricing"
              >
                View Plans
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-black hover:bg-gray-100"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg">
            <div className="flex items-center justify-between p-4 border-b">
              <img 
                src="https://i.ibb.co/p6RtDyzW/LOGO-MF-BW.png"
                alt="MF Intel Logo"
                className="h-10 w-auto"
              />
              <button
                ref={firstFocusableRef}
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-md text-black hover:bg-gray-100"
                aria-label="Close navigation menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="p-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left py-3 px-2 text-lg font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-black bg-gray-100 rounded-md'
                      : 'text-gray-600 hover:text-black hover:bg-gray-50 rounded-md'
                  }`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleViewPlans}
                className="w-full mt-6 bg-black text-white py-3 px-6 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors duration-200"
              >
                View Plans
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;