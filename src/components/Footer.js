import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2023 WoodMaster. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="/" className="hover:text-amber-300 transition-colors">Privacy Policy</a>
          <a href="/" className="hover:text-amber-300 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
