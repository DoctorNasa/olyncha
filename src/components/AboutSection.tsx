import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1603202662706-62ead3176b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzU2NjUxNjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional business team"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl">
                About Our Company
              </h2>
              <p className="text-lg text-muted-foreground">
                We are a team of passionate innovators dedicated to creating exceptional digital experiences. 
                With over 10 years of industry expertise, we've helped thousands of businesses transform 
                their operations and achieve unprecedented growth.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-2xl text-primary">500+</h3>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl text-primary">10+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl text-primary">50+</h3>
                <p className="text-muted-foreground">Team Members</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl text-primary">99%</h3>
                <p className="text-muted-foreground">Success Rate</p>
              </div>
            </div>
            
            <div className="pt-4">
              <Button size="lg">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}