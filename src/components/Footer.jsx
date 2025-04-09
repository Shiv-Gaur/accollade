
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-cyberdark py-12 border-t border-cyberpink/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          <div>
              <a href="#" className="flex items-center mb-4">
              <span className="text-3xl font-bold cyber-glow">
              ACCOLLADE <sub className="text-cyberblue text-base"> Chapter 3</sub>
              </span>
              </a>

            <p className="text-gray-400 max-w-md">
              The ultimate cyberpunk tech festival experience, bringing together innovation, competition, and cutting-edge technology.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-cyberteal transition-colors">About</a></li>
              <li><a href="#events" className="text-gray-400 hover:text-cyberteal transition-colors">Events</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-cyberteal transition-colors">Gallery</a></li>
              <li>
              <Link to="/events" className="text-gray-400 hover:text-cyberteal transition-colors">
                Register
              </Link>
                </li>

            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-cyberteal mr-3">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-gray-400">
                    Graphic Era University ,<br />
                    Bell Road, Clement Town,<br />
                    Dehradun, Uttarakhand - 248002
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="text-cyberteal mr-3">
                  <Mail size={20} />
                </div>
                <a href="mailto:accoladegeu@gmail.com" className="text-gray-400 hover:text-cyberteal transition-colors">
                accoladegeu@gmail.com
                </a>
              </div>
              
              
              <div className="flex items-start">
                <div className="text-cyberteal mr-3">
                  <Clock size={20} />
                </div>
                <p className="text-gray-400">
                  April 17-19, 2025<br />
                  9:00 AM - 8:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 Accolade. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            
            <a href="#" className="text-gray-400 hover:text-cyberpink transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
              </svg>
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
