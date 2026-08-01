import { useState, type FormEvent } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, Presentation } from "lucide-react";
import GicsConcierge from "@/components/GicsConcierge";

const fieldClass = "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-[hsl(var(--accent))] focus:ring-2 focus:ring-[hsl(var(--accent))]/20 [&>option]:bg-white [&>option]:text-slate-900";
const labelClass = "mb-2 block text-sm font-bold text-foreground";

export default function ExecutiveMasterclasses() {
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
          "form-name": "executive-masterclass-interest",
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

  const masterclasses = [
    {
      title: "Applied AI for Operations & Supply Chain Management",
      desc: "Practical applications of AI to forecasting, inventory management, operational analytics, reporting and managerial decision-making."
    },
    {
      title: "Operations Management & Strategy for Senior Managers",
      desc: "A strategic executive programme focused on aligning operations with business strategy, improving organisational performance and leading operational transformation."
    }
  ];

  if (status === "success") {
    return (
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="glass-panel text-center space-y-6">
          <CheckCircle2 className="w-14 h-14 text-[hsl(var(--accent))] mx-auto" />
          <h1 className="text-3xl font-black text-foreground">Interest registered</h1>
          <p className="text-muted-foreground leading-relaxed">
            Thank you. GICS will keep you updated when Executive Masterclass dates and registration details are available.
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

      <header className="relative overflow-hidden rounded-[2rem] min-h-[460px] border border-white/10 bg-[hsl(var(--primary))] shadow-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/gics-executive-masterclasses-hero.webp')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(4,18,37,0.98) 0%, rgba(4,18,37,0.9) 38%, rgba(4,18,37,0.38) 66%, rgba(4,18,37,0.04) 100%)"
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 flex min-h-[420px] items-center px-6 py-12 md:px-10 lg:px-14">
          <div className="max-w-3xl space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[hsl(var(--accent))]">
              <Presentation className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent))]">GICS Executive Masterclasses</p>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">Executive Masterclasses</h1>
              <p className="text-white/82 leading-relaxed text-base md:text-lg">
                Short, focused executive learning experiences designed for professionals and managers who want practical insight into emerging operations, supply chain and strategy challenges.
              </p>
              <p className="text-sm text-white/90 leading-relaxed font-semibold">
                Launching soon. Register your interest to receive updates when dates, formats and fees are confirmed.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section id="upcoming-masterclasses" className="space-y-5 scroll-mt-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent))]">Launching Soon</p>
          <h2 className="text-2xl font-black text-foreground mt-2">Upcoming Executive Masterclasses</h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-3xl">
            These masterclasses are being designed as practical, high-impact sessions for experienced professionals, managers and teams.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {masterclasses.map((masterclass) => (
            <Card key={masterclass.title} className="bg-white/5 border-white/10 rounded-2xl p-6 space-y-5 hover:border-[hsl(var(--accent))]/40 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[hsl(var(--accent))]">Executive Masterclass</p>
                  <h3 className="mt-2 font-black text-foreground text-xl leading-tight">{masterclass.title}</h3>
                </div>
                <span className="rounded-full border border-[hsl(var(--accent))]/30 bg-[hsl(var(--accent))]/10 px-3 py-1 text-xs font-black uppercase tracking-wide text-[hsl(var(--accent))]">
                  Coming Soon
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{masterclass.desc}</p>
              <Button asChild variant="outline" className="w-full bg-white/5 border-white/20 text-foreground font-bold hover:bg-white/10">
                <a href="#waiting-list">Join the Waiting List</a>
              </Button>
            </Card>
          ))}
        </div>
      </section>

      <form id="waiting-list" name="executive-masterclass-interest" method="POST" data-netlify="true" onSubmit={handleSubmit} className="glass-panel scroll-mt-8 space-y-8">
        <input type="hidden" name="form-name" value="executive-masterclass-interest" />
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent))]">Register Interest</p>
          <h2 className="text-2xl font-black text-foreground mt-2">Join the Waiting List</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Tell us which masterclass you are interested in so GICS can send relevant launch updates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <label><span className={labelClass}>Full name *</span><input className={fieldClass} name="fullName" required /></label>
          <label><span className={labelClass}>Email address *</span><input className={fieldClass} type="email" name="email" required /></label>
          <label><span className={labelClass}>Country</span><input className={fieldClass} name="country" /></label>
          <label><span className={labelClass}>Current role or organisation</span><input className={fieldClass} name="roleOrganisation" /></label>
          <label className="md:col-span-2"><span className={labelClass}>Masterclass of interest *</span><select className={fieldClass} name="masterclassInterest" required defaultValue=""><option value="" disabled>Select one</option>{masterclasses.map((masterclass) => <option key={masterclass.title}>{masterclass.title}</option>)}<option>Both masterclasses</option></select></label>
          <label className="md:col-span-2"><span className={labelClass}>Anything else you would like us to know?</span><textarea className={fieldClass} name="additionalInfo" rows={3} /></label>
        </div>

        <div className="space-y-4 border-t border-white/10 pt-6">
          <p className="text-xs text-muted-foreground leading-relaxed">
            GICS will use this information to send relevant updates about Executive Masterclasses. Please do not submit confidential, commercially sensitive or unnecessary personal information through this form. Read our <Link href="/privacy" className="font-bold text-foreground underline underline-offset-2">Privacy Notice</Link>.
          </p>
          <label className="flex items-start gap-3 text-sm text-foreground">
            <input type="checkbox" name="declaration" required className="mt-1 accent-[hsl(var(--accent))]" />
            <span>I confirm that the information provided is accurate and understand how GICS will use it. *</span>
          </label>
        </div>

        <Button type="submit" disabled={status === "sending"} className="h-12 px-8 bg-[hsl(var(--accent))] text-[hsl(var(--primary-foreground))] font-black">
          {status === "sending" ? "Submitting..." : "Join the Waiting List"}
        </Button>
        {status === "error" && <p role="alert" className="text-sm text-red-300">Your interest could not be submitted. Please try again or email gicsinstituteuk@gmail.com.</p>}
      </form>
      <GicsConcierge context="executive-masterclasses" />
    </main>
  );
}
