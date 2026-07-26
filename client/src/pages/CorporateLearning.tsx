import { useState, type FormEvent } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowLeft, BriefcaseBusiness } from "lucide-react";
import GicsConcierge from "@/components/GicsConcierge";

const fieldClass = "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-[hsl(var(--accent))] focus:ring-2 focus:ring-[hsl(var(--accent))]/20 [&>option]:bg-white [&>option]:text-slate-900";
const labelClass = "mb-2 block text-sm font-bold text-foreground";

export default function CorporateLearning() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "corporate-proposal",
          ...Object.fromEntries(Array.from(data.entries()).map(([key, value]) => [key, String(value)]))
        }).toString()
      });
      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

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

  if (status === "success") {
    return (
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="glass-panel text-center space-y-6">
          <CheckCircle2 className="w-14 h-14 text-[hsl(var(--accent))] mx-auto" />
          <h1 className="text-3xl font-black text-foreground">Corporate enquiry received</h1>
          <p className="text-muted-foreground leading-relaxed">
            Thank you. GICS will review your organisation's requirements and contact you about a suitable corporate learning route.
          </p>
          <Button asChild><Link href="/">Return to the GICS website</Link></Button>
        </div>
      </main>
    );
  }

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
                <a href="#enquiry">Start Your Enquiry</a>
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

      <section id="enquiry" className="glass-panel scroll-mt-8 space-y-8">
        <div className="space-y-2 max-w-2xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent))]">Step 1</p>
          <h2 className="text-2xl font-black text-foreground">Start Your Enquiry</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Use the organisation enquiry form to share your team size, learning needs, delivery preference and intended timeline. GICS will review the enquiry before recommending next steps.
          </p>
        </div>

        <form name="corporate-proposal" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-10">
          <input type="hidden" name="form-name" value="corporate-proposal" />

          <section className="space-y-5">
            <h3 className="text-xl font-black text-foreground">Contact and organisation</h3>
            <div className="grid md:grid-cols-2 gap-5">
              <label><span className={labelClass}>Contact person's full name *</span><input className={fieldClass} name="contactName" autoComplete="name" required /></label>
              <label><span className={labelClass}>Work email address *</span><input className={fieldClass} type="email" name="workEmail" autoComplete="email" required /></label>
              <label><span className={labelClass}>Telephone / WhatsApp</span><input className={fieldClass} type="tel" name="phone" autoComplete="tel" /></label>
              <label><span className={labelClass}>Job title *</span><input className={fieldClass} name="jobTitle" required /></label>
              <label><span className={labelClass}>Organisation name *</span><input className={fieldClass} name="organisation" autoComplete="organization" required /></label>
              <label><span className={labelClass}>Country *</span><input className={fieldClass} name="country" autoComplete="country-name" required /></label>
              <label><span className={labelClass}>Organisation type *</span><select className={fieldClass} name="organisationType" required defaultValue=""><option value="" disabled>Select one</option><option>Private company</option><option>Public-sector organisation</option><option>NGO / charity</option><option>Educational institution</option><option>Professional association</option><option>Other</option></select></label>
              <label><span className={labelClass}>Approximate team size *</span><select className={fieldClass} name="teamSize" required defaultValue=""><option value="" disabled>Select one</option><option>1-5 participants</option><option>6-10 participants</option><option>11-20 participants</option><option>21-50 participants</option><option>More than 50 participants</option><option>Not yet confirmed</option></select></label>
            </div>
          </section>

          <section className="space-y-5">
            <h3 className="text-xl font-black text-foreground">Training requirements</h3>
            <label><span className={labelClass}>What capability or performance challenge should the training address? *</span><textarea className={fieldClass} name="trainingNeeds" rows={5} required /></label>
            <div className="grid md:grid-cols-2 gap-5">
              <label><span className={labelClass}>Main subject area *</span><select className={fieldClass} name="subjectArea" required defaultValue=""><option value="" disabled>Select one</option><option>Supply chain and logistics</option><option>Operations and process improvement</option><option>Sustainability, ESG and responsible sourcing</option><option>Data analytics and performance</option><option>Integrated / multidisciplinary programme</option><option>Not sure - please advise</option></select></label>
              <label><span className={labelClass}>Preferred delivery format *</span><select className={fieldClass} name="deliveryFormat" required defaultValue=""><option value="" disabled>Select one</option><option>Live online</option><option>In person</option><option>Blended</option><option>Self-paced</option><option>Not sure - please advise</option></select></label>
              <label><span className={labelClass}>Preferred timing or proposed dates</span><input className={fieldClass} name="proposedDates" placeholder="For example: October 2026" /></label>
              <label><span className={labelClass}>Indicative budget range</span><select className={fieldClass} name="budget" defaultValue=""><option value="">Prefer to discuss</option><option>Under &pound;1,000</option><option>&pound;1,000-&pound;2,500</option><option>&pound;2,501-&pound;5,000</option><option>Above &pound;5,000</option></select></label>
            </div>
            <label><span className={labelClass}>Desired outcomes or other relevant information</span><textarea className={fieldClass} name="desiredOutcomes" rows={4} /></label>
          </section>

          <section className="space-y-4 border-t border-white/10 pt-6">
            <p className="text-xs text-muted-foreground leading-relaxed">
              GICS will use this information to respond to your enquiry and recommend an appropriate corporate learning route. Please do not submit confidential, commercially sensitive or unnecessary personal information at this initial stage. Read our <Link href="/privacy" className="font-bold text-foreground underline underline-offset-2">Privacy Notice</Link>.
            </p>
            <label className="flex items-start gap-3 text-sm text-foreground">
              <input type="checkbox" name="declaration" required className="mt-1 accent-[hsl(var(--accent))]" />
              <span>I am authorised to make this enquiry and understand how GICS will use the information provided. *</span>
            </label>
            <label className="flex items-start gap-3 text-sm text-muted-foreground">
              <input type="checkbox" name="marketingConsent" className="mt-1 accent-[hsl(var(--accent))]" />
              <span>Optional: I would like to receive information about relevant GICS services and programmes.</span>
            </label>
          </section>

          <Button type="submit" disabled={status === "sending"} className="h-12 px-8 bg-[hsl(var(--accent))] text-[hsl(var(--primary-foreground))] font-black">
            {status === "sending" ? "Submitting..." : "Start Your Enquiry"}
          </Button>
          {status === "error" && <p role="alert" className="text-sm text-red-300">Your request could not be submitted. Please try again or email gicsinstituteuk@gmail.com.</p>}
        </form>
      </section>
      <GicsConcierge context="corporate-learning" />
    </main>
  );
}
