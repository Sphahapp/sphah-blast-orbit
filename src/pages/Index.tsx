import StarField from "@/components/StarField";
import gameMenu from "@/assets/game-menu.jpg";
import gameLevel1 from "@/assets/game-level1.jpg";
import gameLevel2 from "@/assets/game-level2.jpg";
import gameLevel3 from "@/assets/game-level3.jpg";
import gameLevel5 from "@/assets/game-level5.jpg";
import sphaLogo from "@/assets/spha-logo.png";
import { Gamepad2, Zap, Shield, Target, Layers, Rocket } from "lucide-react";

const GAME_URL = "https://sphah.netlify.app/";

const features = [
  { icon: Layers, label: "500 Levels", desc: "Procedurally generated" },
  { icon: Target, label: "Boss Battles", desc: "Every 10 stages" },
  { icon: Zap, label: "Power-Ups", desc: "Lasers, multi-ball & more" },
  { icon: Shield, label: "Shields", desc: "Stay in the fight" },
];

const screenshots = [
  { src: gameLevel1, alt: "Level 1 gameplay" },
  { src: gameLevel2, alt: "Level 2 with colored bricks" },
  { src: gameLevel3, alt: "Level 3 complex patterns" },
  { src: gameLevel5, alt: "Level 5 pyramid formation" },
];

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <StarField />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Glow orb behind title */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

        <div className="text-center mb-8 animate-float">
          <Gamepad2 className="w-12 h-12 mx-auto mb-4 text-primary text-glow-cyan" />
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
            Spha Apps Presents
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-primary text-glow-cyan leading-tight">
            SPHAH
          </h1>
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mt-1">
            BLAST ORBIT
          </h2>
          <p className="font-display text-lg md:text-xl font-semibold text-neon-magenta text-glow-magenta mt-2">
            ULTRA
          </p>
        </div>

        {/* Hero game image */}
        <div className="relative mb-10 group">
          <div className="absolute -inset-1 rounded-2xl bg-primary/20 blur-xl group-hover:bg-primary/30 transition-all duration-500" />
          <img
            src={gameMenu}
            alt="SPHAH Blast Orbit game menu"
            className="relative w-[320px] md:w-[420px] rounded-2xl border border-primary/30 box-glow-cyan"
          />
        </div>

        {/* CTA Button */}
        <a
          href={GAME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-10 py-5 font-display text-xl md:text-2xl font-bold uppercase tracking-wider text-primary-foreground bg-primary rounded-full box-glow-cyan hover:scale-105 transition-all duration-300 animate-pulse-glow"
        >
          <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          Play Now — It's Free!
        </a>

        <p className="mt-6 text-muted-foreground font-body text-sm max-w-md text-center">
          Built with React & TypeScript. Plays on any device — phone, tablet, or desktop.
        </p>
      </section>

      {/* Features */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center p-6 rounded-xl bg-card/50 border border-primary/10 backdrop-blur-sm hover:border-primary/30 hover:box-glow-cyan transition-all duration-300"
            >
              <f.icon className="w-8 h-8 text-primary mb-3" />
              <span className="font-display text-sm font-bold text-foreground">{f.label}</span>
              <span className="font-body text-xs text-muted-foreground mt-1">{f.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="relative z-10 py-16 px-4">
        <h3 className="font-display text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
          <span className="text-primary text-glow-cyan">500</span> Levels of Neon Chaos
        </h3>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {screenshots.map((s, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300">
              <div className="absolute -inset-1 bg-primary/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={s.src}
                alt={s.alt}
                className="relative w-full aspect-[3/4] object-cover rounded-xl"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
            I'm so excited to share <span className="text-foreground font-semibold">SPHAH Blast Orbit</span> — a passion project bringing classic arcade action into the modern era with a neon twist. Built entirely from scratch with React, TypeScript & HTML5 Canvas. Boss battles every 10 stages, named after <span className="text-neon-yellow">Zulu legends</span>.
          </p>

          <a
            href={GAME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 font-display text-lg font-bold uppercase tracking-wider text-primary-foreground bg-primary rounded-full box-glow-cyan hover:scale-105 transition-all duration-300"
          >
            <Gamepad2 className="w-5 h-5" />
            Play Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center border-t border-primary/10">
        <p className="font-body text-sm text-muted-foreground">
          Developed by <span className="text-foreground font-semibold">Vincent Sphamandla Khumalo</span> · Spha Apps
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs text-muted-foreground font-body">
          {["#GameDev", "#IndieGame", "#React", "#TypeScript", "#MadeWithCode", "#SphahApps"].map(tag => (
            <span key={tag} className="px-2 py-1 rounded-full bg-card border border-primary/10">{tag}</span>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Index;
