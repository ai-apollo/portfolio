
import { Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-apollo-secondary text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">あぽろ</h3>
            <p className="text-gray-300 mb-4">
              吸って吐いたらコンテンツまで
            </p>
            <p className="text-gray-300">
              非エンジニアでも、AIと自動化で価値を創出
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">リンク</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-apollo-primary transition-colors">About</a></li>
              <li><a href="#works" className="text-gray-300 hover:text-apollo-primary transition-colors">Works</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-apollo-primary transition-colors">Skills</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-apollo-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">SNS / コミュニティ</h4>
            <div className="flex space-x-4 mb-4">
              <a href="https://twitter.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-apollo-primary transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="https://instagram.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-apollo-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
            <p className="text-gray-300">
              <span className="font-semibold">AIの社:</span> 初心者からプロまで、AIの可能性を探求するコミュニティ
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            © {currentYear} あぽろ. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-apollo-primary text-sm transition-colors">プライバシーポリシー</a>
            <a href="#" className="text-gray-400 hover:text-apollo-primary text-sm transition-colors">利用規約</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
