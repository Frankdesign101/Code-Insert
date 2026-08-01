import { useState, type FormEvent } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowLeft, PlaneTakeoff } from "lucide-react";
import GicsConcierge from "@/components/GicsConcierge";

const fieldClass = "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-[hsl(var(--accent))] focus:ring-2 focus:ring-[hsl(var(--accent))]/20 [&>option]:bg-white [&>option]:text-slate-900";
const labelClass = "mb-2 block text-sm font-bold text-foreground";

export default function StudentSuccess() {
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
          "form-name": "student-success-enquiry",
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

  if (status === "success") {
    return (
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="glass-panel text-center space-y-6">
          <CheckCircle2 className="w-14 h-14 text-[hsl(var(--accent))] mx-auto" />
          <h1 className="text-3xl font-black text-foreground">Enquiry received</h1>
          <p className="text-muted-foreground leading-relaxed">
            Thank you. GICS will review your Student Success enquiry and contact you about suitable support options.
          </p>
          <Button asChild><Link href="/">Return to the GICS website</Link></Button>
        </div>
      </main>
    );
  }

  const supportOptions = [
    {
      title: "Pre-Departure Essentials",
      price: "\u00a395",
      points: [
        "One focused pre-departure session",
        "UK academic expectations",
        "Practical preparation guidance",
        "Follow-up summary email"
      ]
    },
    {
      title: "Complete Transition",
      price: "\u00a3195",
      points: [
        "Pre-departure guidance",
        "Academic readiness support",
        "Early-stage settling guidance",
        "Practical transition checklist"
      ]
    },
    {
      title: "Premium Transition",
      price: "\u00a3325",
      points: [
        "Personalised pre-departure support",
        "Academic readiness guidance",
        "Early transition support",
        "Follow-up support during initial adjustment"
      ]
    }
  ];

  return (
    <main className="max-w-[1160px] mx-auto px-5 md:px-6 py-8 space-y-10">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground">
        <ArrowLeft className="w-4 h-4" /> Back to GICS
      </Link>

      <header className="relative overflow-hidden rounded-[2rem] min-h-[420px] border border-white/10 bg-[hsl(var(--primary))] shadow-2xl">
        <img src="/gics-student-success-hero.webp" alt="" className="absolute inset-0 h-full w-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(4,18,37,0.92)] via-[rgba(4,18,37,0.42)] to-[rgba(4,18,37,0.00)]" aria-hidden="true" />
        <div className="relative z-10 flex min-h-[420px] items-center px-6 py-12 md:px-10 lg:px-14">
          <div className="max-w-3xl space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[hsl(var(--accent))]">
              <PlaneTakeoff className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent))]">GICS UK Student Success Programme</p>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">Student Success</h1>
              <p className="text-white/82 leading-relaxed text-base md:text-lg">
                Practical pre-departure and UK study-transition support for international students preparing to begin their studies in the United Kingdom.
              </p>
              <p className="text-sm text-white/90 leading-relaxed font-semibold">
                The programme helps learners understand UK academic expectations, practical preparation and early transition into university study. GICS does not provide legal or immigration advice.
              </p>
              <Button asChild className="h-12 bg-[hsl(var(--accent))] px-7 font-black text-[hsl(var(--primary-foreground))] shadow-lg hover:brightness-110">
                <a href="#enquiry">Start Your Enquiry</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section id="personalised-support" className="space-y-5 scroll-mt-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent))]">Personalised Student Support</p>
          <h2 className="text-2xl font-black text-foreground mt-2">Flexible One-to-One Guidance</h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-3xl">
            Available throughout the year for students who prefer individual support, have specific concerns, are travelling outside the main intake periods or want flexible scheduling.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {supportOptions.map((option) => (
            <Card key={option.title} className="bg-white/5 border-white/10 rounded-2xl p-6 space-y-5 hover:border-[hsl(var(--accent))]/40 transition-colors">
              <div className="space-y-1">
                <h3 className="font-black text-foreground text-lg">{option.title}</h3>
                <span className="block text-2xl font-black text-[hsl(var(--accent))]">{option.price}</span>
              </div>
              <ul className="space-y-3">
                {option.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent))] mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="w-full bg-white/5 border-white/20 text-foreground font-bold hover:bg-white/10">
                <a href="#enquiry">Enquire Now</a>
              </Button>
            </Card>
          ))}
        </div>
      </section>

      <section id="bootcamp" className="glass-panel space-y-5 scroll-mt-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent))]">GICS UK Student Success Bootcamp</p>
          <h2 className="text-2xl font-black text-foreground mt-2">Live Online Pre-Departure Programme</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mt-2 max-w-4xl">
            A live online programme delivered once or twice each year, subject to demand, for international students preparing for major UK university intakes. Registration opens in advance of each scheduled bootcamp, with dates and fees announced when available.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "Understanding UK Higher Education",
            "Learning for Academic Success",
            "Academic Integrity and Responsible AI",
            "Managing Yourself for Success",
            "Living and Thriving in the UK",
            "Ask the Experts"
          ].map((item) => (
            <div key={item} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent))] mt-0.5 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed">
            The bootcamp may also include guidance on making the most of university opportunities, networking, volunteering, internships, societies and building employability from the first semester.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Guest contributors may include UK university lecturers, academic skills or student support professionals, careers professionals, industry guests, and current or recent international students.
          </p>
          <Button asChild className="h-12 bg-[hsl(var(--accent))] px-7 font-black text-[hsl(var(--primary-foreground))] shadow-lg hover:brightness-110">
            <a href="#enquiry">Register Your Interest</a>
          </Button>
        </div>
      </section>

      <form id="enquiry" name="student-success-enquiry" method="POST" data-netlify="true" onSubmit={handleSubmit} className="glass-panel scroll-mt-8 space-y-8">
        <input type="hidden" name="form-name" value="student-success-enquiry" />
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent))]">Step 1</p>
          <h2 className="text-2xl font-black text-foreground mt-2">Start Your Enquiry</h2>
          <p className="text-sm text-muted-foreground mt-2">Tell us about your study plans and transition needs so GICS can recommend a suitable support route or record your bootcamp interest.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <label><span className={labelClass}>Full name *</span><input className={fieldClass} name="fullName" required /></label>
          <label><span className={labelClass}>Email address *</span><input className={fieldClass} type="email" name="email" required /></label>
          <label><span className={labelClass}>Country of residence *</span><input className={fieldClass} name="country" required /></label>
          <label><span className={labelClass}>University or intended university</span><input className={fieldClass} name="university" /></label>
          <label><span className={labelClass}>Programme or level of study *</span><input className={fieldClass} name="programmeLevel" required /></label>
          <label><span className={labelClass}>Has your offer been confirmed? *</span><select className={fieldClass} name="offerStatus" required defaultValue=""><option value="" disabled>Select one</option><option>Yes, unconditional offer</option><option>Yes, conditional offer</option><option>Application submitted</option><option>Still considering options</option><option>Other</option></select></label>
          <label><span className={labelClass}>Expected arrival or start date</span><input className={fieldClass} name="arrivalDate" placeholder="For example: September 2027" /></label>
          <label><span className={labelClass}>Preferred support route</span><select className={fieldClass} name="supportOption" defaultValue=""><option value="">Not sure yet</option>{supportOptions.map((option) => <option key={option.title}>{option.title}</option>)}<option>GICS UK Student Success Bootcamp</option></select></label>
          <label className="md:col-span-2"><span className={labelClass}>What support do you need? *</span><textarea className={fieldClass} name="supportNeeded" rows={4} required /></label>
          <label className="md:col-span-2"><span className={labelClass}>Anything else you would like us to know?</span><textarea className={fieldClass} name="additionalInfo" rows={3} /></label>
        </div>

        <div className="space-y-4 border-t border-white/10 pt-6">
          <p className="text-xs text-muted-foreground leading-relaxed">
            This service provides educational and practical transition support only. GICS does not provide legal or immigration advice. Visa-related content, where relevant, is limited to general signposting to official public guidance or authorised advisers. Read our <Link href="/privacy" className="font-bold text-foreground underline underline-offset-2">Privacy Notice</Link>.
          </p>
          <label className="flex items-start gap-3 text-sm text-foreground">
            <input type="checkbox" name="declaration" required className="mt-1 accent-[hsl(var(--accent))]" />
            <span>I confirm that the information provided is accurate and understand how GICS will use it. *</span>
          </label>
        </div>

        <Button type="submit" disabled={status === "sending"} className="h-12 px-8 bg-[hsl(var(--accent))] text-[hsl(var(--primary-foreground))] font-black">
          {status === "sending" ? "Submitting..." : "Start Your Enquiry"}
        </Button>
        {status === "error" && <p role="alert" className="text-sm text-red-300">Your enquiry could not be submitted. Please try again or email gicsinstituteuk@gmail.com.</p>}
      </form>
      <GicsConcierge context="student-success" />
    </main>
  );
}