"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 max-w-6xl"> {/* Added max-w-6xl */}
        <div className="flex items-center justify-between h-14"> {/* Reduced height from 16 to 14 */}
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold"> {/* Reduced from text-2xl */}
              AI<span className="text-primary">Saas</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="px-2 py-1 text-xs hover:text-primary transition-colors" 
                    href="#features"
                  >
                    Features
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="px-2 py-1 text-xs hover:text-primary transition-colors" 
                    href="#pricing"
                  >
                    Pricing
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="px-2 py-1 text-xs hover:text-primary transition-colors" 
                    href="#testimonials"
                  >
                    Testimonials
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden md:flex items-center space-x-3"> {/* Reduced space-x-4 to space-x-3 */}
            <Button variant="ghost" size="sm"> {/* Added size="sm" */}
              Sign In
            </Button>
            <Button size="sm"> {/* Added size="sm" */}
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" /> 
              ) : (
                <Menu className="h-5 w-5" /> 
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden" data-testid="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors" 
              >
                Features
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors" 
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors" 
              >
                Testimonials
              </a>
              <div className="pt-3 flex flex-col space-y-2"> {/* Reduced pt-4 to pt-3 */}
                <Button variant="ghost" className="justify-start" size="sm"> {/* Added size="sm" */}
                  Sign In
                </Button>
                <Button size="sm"> {/* Added size="sm" */}
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}