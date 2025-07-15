import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Mail, Sparkles } from 'lucide-react';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "Welcome to House of Aykaa! ✨",
      description: "You're now on our exclusive waitlist. Get ready for something beautiful.",
    });
    setEmail('');
  };

  if (isSubmitted) {
    return (
      <div className="text-center space-y-6 animate-fade-in">
        <div className="relative">
          <div className="absolute inset-0 bg-success/20 rounded-full blur-xl"></div>
          <div className="relative bg-success/10 rounded-full p-4 inline-block">
            <Sparkles className="w-8 h-8 text-success animate-float" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-primary mb-2">
            You're In! 🎉
          </h3>
          <p className="text-muted-foreground">
            Welcome to our exclusive circle. We'll keep you updated on our journey.
          </p>
        </div>
        <Button 
          onClick={() => setIsSubmitted(false)}
          variant="ghost"
          className="text-primary hover:text-primary/80"
        >
          Join Another Email?
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto text-center space-y-6">
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          Join Our Story
        </h3>
        <p className="text-muted-foreground">
          Be the first to experience the elegance of House of Aykaa
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-12 h-12 text-base bg-background/50 backdrop-blur-sm border border-border/50 focus:border-primary/50 transition-colors"
            required
          />
        </div>
        
        <Button 
          type="submit" 
          variant="waitlist" 
          size="lg" 
          className="w-full h-12 text-base"
          disabled={!email}
        >
          Get Early Access
        </Button>
      </form>
      
      <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
        <Sparkles className="w-4 h-4" />
        <span>Exclusive previews • First access • Special offers</span>
        <Sparkles className="w-4 h-4" />
      </div>
    </div>
  );
};

export default WaitlistForm;