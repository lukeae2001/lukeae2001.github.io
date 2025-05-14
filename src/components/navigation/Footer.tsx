// src/components/navigation/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full p-4 text-center text-sm text-gray-500 border-t border-gray-700">
      <p>© {new Date().getFullYear()} Luke Edwards</p> {/* Dynamic year */}
    </footer>
  );
}