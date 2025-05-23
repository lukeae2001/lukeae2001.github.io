// src/components/Footer.tsx
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p>© {currentYear} MySite. All rights reserved.</p>
        <p className="text-sm mt-1">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;