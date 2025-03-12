"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12 max-w-6xl"> {/* Added max-w-6xl, reduced py-16 to py-12 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Reduced gap-12 to gap-8 */}
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white"> {/* Reduced from text-3xl and mb-6 to mb-4 */}
              AI<span className="text-primary">SaaS</span>
            </h3>
            <p className="text-gray-300 mb-4 text-sm"> {/* Reduced from mb-6, added text-sm */}
              Transforming businesses with AI-powered insights and automation solutions.
            </p>
            <div className="flex space-x-3"> {/* Reduced space-x-4 to space-x-3 */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:text-white hover:bg-gray-700 rounded-full transition-all duration-300 brightness-100 hover:brightness-125"
              >
                <Twitter className="h-4 w-4" /> {/* Reduced from h-5 w-5 to h-4 w-4 */}
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:text-white hover:bg-gray-700 rounded-full transition-all duration-300 brightness-100 hover:brightness-125"
              >
                <Github className="h-4 w-4" /> {/* Reduced from h-5 w-5 to h-4 w-4 */}
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:text-white hover:bg-gray-700 rounded-full transition-all duration-300 brightness-100 hover:brightness-125"
              >
                <Linkedin className="h-4 w-4" /> {/* Reduced from h-5 w-5 to h-4 w-4 */}
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg text-white"> {/* Reduced from text-xl and mb-6 to mb-4 */}
              Product
            </h4>
            <ul className="space-y-3"> {/* Reduced from space-y-4 to space-y-3 */}
              {['Features', 'Pricing', 'Testimonials', 'FAQ'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-300 hover:text-white transition-colors duration-300 relative group brightness-100 hover:brightness-150 text-sm" 
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg text-white"> {/* Reduced from text-xl and mb-6 to mb-4 */}
              Company
            </h4>
            <ul className="space-y-3"> {/* Reduced from space-y-4 to space-y-3 */}
              {[
                { text: 'About Us', href: '/about' },
                { text: 'Careers', href: '/careers' },
                { text: 'Privacy Policy', href: '/privacy' },
                { text: 'Terms of Service', href: '/terms' },
              ].map((item) => (
                <li key={item.text}>
                  <a 
                    href={item.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-300 relative group brightness-100 hover:brightness-150 text-sm" 
                  >
                    {item.text}
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-lg text-white"> {/* Reduced from text-xl and mb-6 to mb-4 */}
              Stay Updated
            </h4>
            <p className="text-gray-300 mb-4 text-sm"> {/* Reduced from mb-6, added text-sm */}
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-900 border-gray-800 text-white placeholder-gray-400 focus:ring-primary focus:border-primary text-sm" 
              />
              <Button 
                className="bg-primary hover:bg-primary/90 text-white transition-all duration-300 brightness-100 hover:brightness-110"
                size="sm" 
              >
                <Mail className="h-3 w-3 mr-1" /> {/* Reduced from h-4 w-4 to h-3 w-3, mr-2 to mr-1 */}
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6"> {/* Reduced mt-12 to mt-8, pt-8 to pt-6 */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-300"> {/* Reduced from text-sm to text-xs */}
              © {new Date().getFullYear()} AISaaS. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-3 md:mt-0"> {/* Reduced space-x-6 to space-x-4, mt-4 to mt-3 */}
              {['Privacy', 'Terms', 'Cookies'].map((item) => (
                <a 
                  key={item}
                  href={`/${item.toLowerCase()}`} 
                  className="text-xs text-gray-300 hover:text-white transition-colors duration-300 brightness-100 hover:brightness-150" 
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}