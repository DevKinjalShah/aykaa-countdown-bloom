import CountdownTimer from '@/components/CountdownTimer';
import FounderStory from '@/components/FounderStory';
import WaitlistForm from '@/components/WaitlistForm';
import pastelBackground from '@/assets/pastel-hero-background.jpg';
import { Sparkles, Heart, Crown } from 'lucide-react';

const Index = () => {
  console.log('pastelBackground:', pastelBackground); // Debug log
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-secondary/5"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 opacity-20 animate-float">
          <Crown className="w-8 h-8 text-accent" />
        </div>
        <div className="absolute top-40 right-20 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
          <Sparkles className="w-6 h-6 text-secondary" />
        </div>
        <div className="absolute bottom-40 left-20 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
          <Heart className="w-7 h-7 text-accent" />
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="max-w-5xl mx-auto space-y-12 animate-fade-in">
            {/* Brand Logo & Tagline */}
            <div className="space-y-6">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                    House of Aykaa
                  </h1>
                  <div className="absolute -inset-4 bg-gradient-to-r from-accent/10 via-transparent to-secondary/10 rounded-full blur-2xl opacity-60"></div>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-medium text-foreground/80 leading-relaxed">
                A New Chapter in Fashion, Rooted in Heritage
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Soothing Styles, Timeless Confidence — Where tradition meets contemporary elegance
              </p>
            </div>
            
            {/* Countdown Timer */}
            <div className="py-12">
              <CountdownTimer />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <FounderStory />
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background relative">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-secondary/3" />
        
        <div className="relative z-10 container mx-auto px-4">
          <WaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50 bg-card/20">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">House of Aykaa</h3>
            <p className="text-muted-foreground">
              Where Stories Are Woven Into Fabric
            </p>
            <div className="flex justify-center items-center space-x-2 text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4" />
              <span>© 2024 House of Aykaa. Crafted with love and heritage.</span>
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
