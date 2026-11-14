import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Privacy from "@/pages/Privacy";
import TermsRefunds from "@/pages/TermsRefunds";

function PublicIntroduction() {
  return (
    <main className="max-w-[1160px] mx-auto px-5 md:px-6 py-8 space-y-8">
      <header className="flex flex-wrap items-center justify-between gap-6 border-b border-white/10 pb-6">
        <a href="/" className="flex items-center gap-4 no-underline text-foreground">
          <img src="/gics-crest.png" alt="GICS crest" className="h-20 w-20 md:h-24 md:w-24 object-contain" />
          <div>
            <strong className="block text-3xl font-black">GICS</strong>
            <span className="block text-sm md:text-base font-bold">Global Institute for Supply Chain &amp; Sustainability</span>
            <p className="text-xs md:text-sm italic text-muted-foreground mt-1">Advancing Professional Capability and Industry Outcomes Through Education.</p>
          </div>
        </a>
        <nav className="flex gap-5 text-sm font-semibold">
          <a href="#about">About GICS</a><a href="#focus">Our focus</a><a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl min-h-[510px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage:"url('/gics-hero-global-supply-chain.webp')"}} aria-hidden="true" />
        <div className="absolute inset-0" style={{background:"linear-gradient(90deg,rgba(4,18,37,.98),rgba(4,18,37,.85) 60%,rgba(4,18,37,.4))"}} aria-hidden="true" />
        <div className="relative z-10 max-w-3xl px-7 py-16 md:px-14 space-y-6">
          <p className="text-sm font-black uppercase tracking-[.2em] text-[hsl(var(--accent))]">Introducing GICS · Launching Soon</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-white">Advancing practical capability in supply chains, operations and sustainability.</h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed">The Global Institute for Supply Chain &amp; Sustainability is developing professionally focused learning opportunities that connect rigorous thinking with real-world organisational challenges.</p>
          <a href="#about" className="inline-block rounded-xl bg-[hsl(var(--accent))] px-7 py-3 font-black text-[hsl(var(--primary-foreground))]">Discover GICS</a>
        </div>
      </section>

      <section id="about" className="glass-panel space-y-4">
        <p className="text-xs font-black uppercase tracking-widest text-[hsl(var(--accent))]">About GICS</p>
        <h2 className="text-3xl font-black">Knowledge that connects with practice</h2>
        <p className="max-w-4xl text-muted-foreground leading-relaxed">GICS is an independent UK-registered education and professional training initiative with a focus on supply chain management, operations and sustainability. Our ambition is to support the development of practical, globally relevant professional capability through applied learning and evidence-informed approaches.</p>
        <p className="text-sm text-muted-foreground">Further information about programmes, delivery arrangements and registration will be announced in due course.</p>
      </section>

      <section id="focus" className="space-y-5">
        <h2 className="text-3xl font-black">Our areas of focus</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            ["Supply Chain Management","Strengthening understanding of connected supply networks, procurement, resilience and performance."],
            ["Operations Management","Building capability in operational decision-making, process improvement and organisational effectiveness."],
            ["Sustainability","Exploring responsible sourcing, sustainable operations and practical approaches to long-term performance."]
          ].map(([title,description])=>(
            <div key={title} className="glass-panel space-y-3"><h3 className="text-xl font-bold">{title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{description}</p></div>
          ))}
        </div>
      </section>

      <section id="contact" className="glass-panel space-y-3">
        <h2 className="text-2xl font-black">Stay connected</h2>
        <p className="text-muted-foreground">We look forward to sharing more about GICS as our work develops.</p>
        <p className="text-sm">General enquiries: <a className="underline" href="mailto:gicsinstituteuk@gmail.com">gicsinstituteuk@gmail.com</a></p>
      </section>
      <footer className="border-t border-white/10 pt-5 pb-4 text-xs text-muted-foreground flex flex-wrap gap-4 justify-between">
        <span>© {new Date().getFullYear()} Global Supply Chain &amp; Sustainability Academy Ltd · Trading as GICS</span>
        <span className="flex gap-4"><a href="/privacy">Privacy</a><a href="/terms-refunds">Terms &amp; Refunds</a></span>
      </footer>
    </main>
  );
}
function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><Toaster /><Switch>
    <Route path="/privacy" component={Privacy} />
    <Route path="/terms-refunds" component={TermsRefunds} />
    <Route component={PublicIntroduction} />
  </Switch></TooltipProvider></QueryClientProvider>;
}
export default App;
