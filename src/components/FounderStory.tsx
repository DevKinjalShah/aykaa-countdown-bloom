import { Heart, Sparkles } from 'lucide-react';

const FounderStory = () => {
  return (
    <div className="max-w-4xl mx-auto text-center space-y-8">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-secondary/10 rounded-full blur-3xl"></div>
        <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-soft border border-border/50">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-accent/20 rounded-full animate-float">
              <Heart className="w-8 h-8 text-accent" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
            Where Stories Are Woven Into Fabric
          </h2>
          
          <div className="prose prose-lg mx-auto text-foreground/80 space-y-6">
            <p className="text-lg md:text-xl leading-relaxed">
              Born from the dreams of a creative Indian woman who discovered her strength through adversity, 
              <span className="text-primary font-semibold"> House of Aykaa</span> is more than fashion—it's a celebration of resilience.
            </p>
            
            <p className="text-base md:text-lg leading-relaxed">
              After overcoming personal challenges that could have dimmed her spirit, our founder chose to transform 
              her experiences into something beautiful. She saw how fashion could be a language of self-expression, 
              a bridge between tradition and modernity, and a source of confidence for women everywhere.
            </p>
            
            <div className="flex items-center justify-center space-x-2 my-8">
              <Sparkles className="w-5 h-5 text-secondary animate-pulse-soft" />
              <span className="text-secondary font-medium tracking-wide">Heritage • Innovation • Empowerment</span>
              <Sparkles className="w-5 h-5 text-secondary animate-pulse-soft" />
            </div>
            
            <p className="text-base md:text-lg leading-relaxed">
              Every piece tells a story—of ancient Indian artistry meeting contemporary elegance, 
              of comfort that doesn't compromise on style, and of designs that honor the inner strength 
              of every woman who wears them.
            </p>
            
            <div className="bg-gradient-to-r from-accent/5 to-secondary/5 rounded-xl p-6 mt-8">
              <p className="text-lg font-medium text-primary italic">
                "Fashion should be your armor of confidence, your canvas of expression, 
                and your bridge to both heritage and tomorrow."
              </p>
              <p className="text-sm text-muted-foreground mt-2">— Founder, House of Aykaa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderStory;