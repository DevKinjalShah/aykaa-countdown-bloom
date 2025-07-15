import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 12,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to 12 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 12);
    targetDate.setHours(0, 0, 0, 0); // Set to midnight

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center animate-fade-in">
      <div className="relative">
        <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground rounded-xl p-4 md:p-6 shadow-elegant border border-primary/20 min-w-[80px] md:min-w-[100px]">
          <div className="text-3xl md:text-5xl font-bold text-center tabular-nums">
            {value.toString().padStart(2, '0')}
          </div>
        </div>
        <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-xl blur opacity-75 animate-pulse-soft"></div>
      </div>
      <span className="text-sm md:text-base font-medium text-muted-foreground mt-2 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          Launching In
        </h2>
        <p className="text-lg text-muted-foreground">
          Unveiling Elegance in Every Thread
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
};

export default CountdownTimer;