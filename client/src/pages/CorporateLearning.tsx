import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowLeft, BriefcaseBusiness } from "lucide-react";

export default function CorporateLearning() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-10 space-y-10">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground">
        <ArrowLeft className="w-4 h-4" /> Back to GICS
      </Link>

      <header className="glass-panel space-y-5">
        <div className="w-12 h-12 rounded-2xl bg-[hsl(var(--accent))]/10 flex items-center justify-center text-[hsl(var(--accent))]">
          <BriefcaseBusiness className="w-6 h-6" />
        </div>
        <div className="space-y-3">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent))]">GICS Corporate Learning Solutions</p>
          <h1 className="text-4xl md:text-5xl font-black text-foreground">Corporate Learning</h1>
          <p className="text-muted-foreground leading-relaxed max-w-4xl">
            Executive education, bespoke organisational training and team capability development designed to strengthen professional capability and organisational performance.
          </p>
          <p className="text-sm text-foreground/90 leading-relaxed font-semibold">
            Every organisation has different learning needs. Tell us about your objectives and GICS will recommend a suitable learning route with a tailored quotation.
          </p>
        </div>
      </header>

      <section className="space-y-5">
        <div>
          <h2 className="text-2xl font-black text-foreground">Corporate Learning Routes</h2>
          <p className="text-sm text-muted-foreground mt-2">Pricing is provided after understanding your organisation's objectives, learner needs and preferred delivery format.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            ["Capability Conversation", "Initial discussion to understand organisational learning needs and recommend an appropriate solution."],
            ["Bespoke Workshop", "A focused training session designed around a specific organisational challenge or capability need."],
            ["Team Development Programme", "Multi-session capability-building support for teams or departments."],
            ["Executive Education Partnership", "A tailored professional development solution designed for organisations seeking long-term capability development."]
          ].map(([title, desc]) => (
            <Card key={title} className="bg-white/5 border-white/10 rounded-2xl p-6 space-y-2">
              <h3 className="font-black text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="glass-panel space-y-5">
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

      <section className="glass-panel flex flex-col md:flex-row md:items-center justify-between gap-6">
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
    </main>
  );
}
