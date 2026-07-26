import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowLeft, BriefcaseBusiness } from "lucide-react";
import GicsConcierge from "@/components/GicsConcierge";

export default function CorporateLearning() {
  const routes = [
    {
      title: "Capability Conversation",
      price: "Complimentary",
      desc: "Initial discussion to understand organisational learning needs and recommend an appropriate solution."
    },
    {
      title: "Bespoke Workshop",
      price: "Tailored quotation",
      desc: "A focused training session designed around a specific organisational challenge or capability need."
    },
    {
      title: "Team Development Programme",
      price: "Tailored quotation",
      desc: "Multi-session capability-building support for teams or departments."
    },
    {
      title: "Executive Education Partnership",
      price: "Tailored quotation",
      desc: "A tailored professional development solution designed for organisations seeking long-term capability development."
    }
  ];

  return (
    <main className="max-w-[1160px] mx-auto px-5 md:px-6 py-8 space-y-10">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground">
        <ArrowLeft className="w-4 h-4" /> Back to GICS
      </Link>

      <header className="relative overflow-hidden rounded-[2rem] min-h-[420px] border border-white/10 bg-[hsl(var(--primary))] shadow-2xl">
        <img src="/gics-corporate-learning-hero.webp" alt="" className="absolute inset-0 h-full w-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(4,18,37,0.92)] via-[rgba(4,18,37,0.42)] to-[rgba(4,18,37,0.00)]" aria-hidden="true" />
        <div className="relative z-10 flex min-h-[420px] items-center px-6 py-12 md:px-10 lg:px-14">
          <div className="max-w-3xl space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[hsl(var(--accent))]">
              <BriefcaseBusiness className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent))]">GICS Corporate Learning Solutions</p>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">Corporate Learning</h1>
              <p className="text-white/82 leading-relaxed text-base md:text-lg">
                Executive education, bespoke organisational training and team capability development designed to strengthen professional capability and organisational performance.
              </p>
              <p className="text-sm text-white/90 leading-relaxed font-semibold">
                Every organisation has different learning needs. Tell us about your objectives and GICS will recommend a suitable learning route with a tailored quotation.
              </p>
              <Button asChild className="h-12 bg-[hsl(var(--accent))] px-7 font-black text-[hsl(var(--primary-foreground))] shadow-lg hover:brightness-110">
                <Link href="/corporate-enquiry">Start Your Enquiry</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section id="learning-routes" className="space-y-5 scroll-mt-8">
        <div>
          <h2 className="text-2xl font-black text-foreground">Corporate Learning Routes</h2>
          <p className="text-sm text-muted-foreground mt-2">Corporate Learning remains consultative. Pricing is confirmed after understanding your objectives, learner needs and preferred delivery format.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {routes.map((route) => (
            <Card key={route.title} className="bg-white/5 border-white/10 rounded-2xl p-6 space-y-4 hover:border-[hsl(var(--accent))]/40 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-black text-foreground">{route.title}</h3>
                <span className="text-sm font-black text-[hsl(var(--accent))] text-right">{route.price}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{route.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="training-areas" className="glass-panel space-y-5 scroll-mt-8">
        <h2 className="text-2xl font-black text-foreground">Potential Training Areas</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "Operations and process improvement",
            "Supply chain and logistics capability development",
            "Sustainability, ESG and responsible sourcing",
            "Business analytics and decision-making workshops",
            "Leadership, management and professional development",
            "Tailored organisational training for teams and institutions"
          ].map((item) => (
            <div key={item} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent))] mt-0.5 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="enquiry" className="glass-panel scroll-mt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent))]">Step 1</p>
          <h2 className="text-2xl font-black text-foreground">Start Your Enquiry</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Use the organisation enquiry form to share your team size, learning needs, delivery preference and intended timeline. GICS will review the enquiry before recommending next steps.
          </p>
        </div>
        <Button asChild className="h-12 px-8 bg-[hsl(var(--accent))] text-[hsl(var(--primary-foreground))] font-black shrink-0">
          <Link href="/corporate-enquiry">Start Your Enquiry</Link>
        </Button>
      </section>
      <GicsConcierge context="corporate-learning" />
    </main>
  );
}
