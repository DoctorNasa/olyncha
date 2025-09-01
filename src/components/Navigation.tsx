import { Button } from "./ui/button";

export default function Navigation() {
  return (
    <nav className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h2 className="text-primary">YourBrand</h2>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-foreground hover:text-primary px-3 py-2 rounded-md transition-colors">
                Home
              </a>
              <a href="#features" className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md transition-colors">
                Features
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md transition-colors">
                About
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Button variant="outline" className="mr-2">
                Sign In
              </Button>
              <Button>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}