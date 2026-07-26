import { useState, type FormEvent } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowLeft, GraduationCap } from "lucide-react";
import GicsConcierge from "@/components/GicsConcierge";

const fieldClass = "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-[hsl(var(--accent))] focus:ring-2 focus:ring-[hsl(var(--accent))]/20 [&>option]:bg-white [&>option]:text-slate-900";
const labelClass = "mb-2 block text-sm font-bold text-foreground";

export default function HigherEducationPathways() {
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
          "form-name": "higher-education-pathways",
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
            Thank you. GICS will review your education pathway enquiry and contact you about suitable support options.
          </p>
          <Button asChild><Link href="/">Return to the GICS website</Link></Button>
        </div>
      </main>
    );
  }

  const supportOptions = [
    {
      title: "Application Planning",
      price: "\u00a395",
      points: [
        "One personalised planning session",
        "Course and programme fit discussion",
        "Initial application strategy",
        "Follow-up summary email"
      ]
    },
    {
      title: "Application Review",
      price: "\u00a3175",
      points: [
        "Personal statement or statement of purpose review",
        "CV review where relevant",
        "Written feedback on application strength",
        "Improvement recommendations"
      ]
    },
    {
      title: "Complete Application Support",
      price: "\u00a3395",
      points: [
        "Course and programme fit guidance",
        "Application strategy",
        "Document review and feedback",
        "Interview preparation where applicable"
      ]
    },
    {
      title: "PhD Pathway Support",
      price: "\u00a3495",
      points: [
        "Research-fit guidance",
        "Proposal positioning feedback",
        "Supervisor or programme suitability discussion",
        "Application document review"
      ]
    }
  ];

  return (
    <main className="max-w-[1160px] mx-auto px-5 md:px-6 py-8 space-y-10">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground">
        <ArrowLeft className="w-4 h-4" /> Back to GICS
      </Link>

      <header className="relative overflow-hidden rounded-[2rem] min-h-[420px] border border-white/10 bg-[hsl(var(--primary))] shadow-2xl">
        <img src="/gics-higher-education-pathways-hero.webp" alt="" className="absolute inset-0 h-full w-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(4,18,37,0.92)] via-[rgba(4,18,37,0.42)] to-[rgba(4,18,37,0.00)]" aria-hidden="true" />
        <div className="relative z-10 flex min-h-[420px] items-center px-6 py-12 md:px-10 lg:px-14">
          <div className="max-w-3xl space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[hsl(var(--accent))]">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent))]">GICS Higher Education Advisory Service</p>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">Higher Education Pathways</h1>
              <p className="text-white/82 leading-relaxed text-base md:text-lg">
                Academic guidance for prospective undergraduate, postgraduate, MBA and PhD applicants seeking admission to UK Business School programmes and related disciplines.
              </p>
              <p className="text-sm text-white/90 leading-relaxed font-semibold">
                GICS helps applicants make informed choices and submit stronger applications. We do not guarantee admission, secure offers, control university decisions or represent any university unless a formal agreement exists.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="grid lg:grid-cols-2 gap-5">
        <Card className="bg-white/5 border-white/10 rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-black text-foreground">Who This Is For</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Undergraduate applicants",
              "Postgraduate applicants",
              "MBA applicants",
              "PhD applicants",
              "Degree apprenticeship applicants",
              "Applicants exploring UK Business School and selected applied social science routes"
            ].map((item) => (
              <div key={item} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent))] mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-white/5 border-white/10 rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-black text-foreground">How GICS Helps</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Course and university-fit guidance",
              "Application strategy",
              "Personal statement review",
              "CV and document review",
              "Interview preparation where required",
              "PhD research-fit discussion"
            ].map((item) => (
              <div key={item} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent))] mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section id="support-options" className="space-y-5 scroll-mt-8">
        <div>
          <h2 className="text-2xl font-black text-foreground">Support Options</h2>
          <p className="text-sm text-muted-foreground mt-2">Transparent launch pricing for academic application guidance. Use the enquiry form below so GICS can confirm the right support route before payment.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {supportOptions.map((option) => (
            <Card key={option.title} className="bg-white/5 border-white/10 rounded-2xl p-6 space-y-5 hover:border-[hsl(var(--accent))]/40 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-black text-foreground text-lg">{option.title}</h3>
                <span className="text-2xl font-black text-[hsl(var(--accent))]">{option.price}</span>
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

      <section id="programmes-supported" className="glass-panel space-y-6 scroll-mt-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent))]">Programme Areas</p>
          <h2 className="text-2xl font-black text-foreground mt-2">Programmes We Support</h2>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-[hsl(var(--accent))]/30 bg-gradient-to-br from-[hsl(var(--primary))]/80 via-white/[0.07] to-[hsl(var(--accent))]/10 p-5 shadow-xl">
          <div className="absolute left-0 top-0 h-full w-1 bg-[hsl(var(--accent))]" aria-hidden="true" />
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[hsl(var(--accent))]">Academic fit matters</p>
          <p className="mt-2 text-sm md:text-base font-semibold leading-relaxed text-foreground">
            Choosing the right UK programme is not just about the title. GICS helps applicants think carefully about academic fit, curriculum content, career direction and the evidence needed to submit a stronger application.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            "Business and Management",
            "Operations and Supply Chain Management",
            "Logistics and Supply Chain Management",
            "Business Analytics and Data Analytics",
            "Marketing",
            "Finance and Accounting",
            "Human Resource Management",
            "International Business",
            "Economics",
            "Entrepreneurship",
            "Business and Management Degree Apprenticeships",
            "Selected Applied Social Science Programmes"
          ].map((item) => (
            <div key={item} className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-muted-foreground leading-relaxed">
              <CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent))] mt-0.5 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-panel space-y-5">
        <h2 className="text-2xl font-black text-foreground">Questions We Can Help You Think Through</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "Is this programme appropriate for my academic background?",
            "Which course best supports my career objectives?",
            "Should I choose Operations Management, Supply Chain Management, Business Analytics or a broader Business School programme?",
            "Does the curriculum provide the technical and professional skills I need?",
            "Is the programme suitable for someone considering doctoral study?",
            "How can I present my experience and motivation more effectively?"
          ].map((item) => (
            <div key={item} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent))] mt-0.5 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <form id="enquiry" name="higher-education-pathways" method="POST" data-netlify="true" onSubmit={handleSubmit} className="glass-panel scroll-mt-8 space-y-8">
        <input type="hidden" name="form-name" value="higher-education-pathways" />
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent))]">Step 1</p>
          <h2 className="text-2xl font-black text-foreground mt-2">Start Your Enquiry</h2>
          <p className="text-sm text-muted-foreground mt-2">Tell us what you are considering so GICS can recommend a suitable support route.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <label><span className={labelClass}>Full name *</span><input className={fieldClass} name="fullName" required /></label>
          <label><span className={labelClass}>Email address *</span><input className={fieldClass} type="email" name="email" required /></label>
          <label><span className={labelClass}>Country of residence *</span><input className={fieldClass} name="country" required /></label>
          <label><span className={labelClass}>Highest qualification *</span><input className={fieldClass} name="highestQualification" required /></label>
          <label><span className={labelClass}>Intended level of study *</span><select className={fieldClass} name="intendedLevel" required defaultValue=""><option value="" disabled>Select one</option><option>Undergraduate</option><option>Master's</option><option>MBA</option><option>PhD</option><option>Not sure yet</option></select></label>
          <label><span className={labelClass}>Intended intake</span><input className={fieldClass} name="intendedIntake" placeholder="For example: September 2027" /></label>
          <label className="md:col-span-2"><span className={labelClass}>Preferred support option</span><select className={fieldClass} name="supportOption" defaultValue=""><option value="">Not sure yet</option>{supportOptions.map((option) => <option key={option.title}>{option.title}</option>)}</select></label>
          <label className="md:col-span-2"><span className={labelClass}>Programme(s), subject area or universities of interest</span><textarea className={fieldClass} name="programmesOfInterest" rows={3} /></label>
          <label className="md:col-span-2"><span className={labelClass}>What support do you need? *</span><textarea className={fieldClass} name="supportNeeded" rows={4} required /></label>
          <label className="md:col-span-2"><span className={labelClass}>Anything else you would like us to know?</span><textarea className={fieldClass} name="additionalInfo" rows={3} /></label>
        </div>

        <div className="space-y-4 border-t border-white/10 pt-6">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Please do not submit unnecessary sensitive information or confidential documents through this initial form. GICS may request relevant documents after reviewing your enquiry. This service does not provide admission guarantees or privileged access to universities. Read our <Link href="/privacy" className="font-bold text-foreground underline underline-offset-2">Privacy Notice</Link>.
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
      <a href="#enquiry" className="fixed bottom-20 right-5 z-40 hidden rounded-full bg-[hsl(var(--primary))] px-5 py-3 text-sm font-black text-white shadow-xl transition hover:brightness-110 md:inline-flex">Enquire Now</a>
      <GicsConcierge context="higher-education" />
    </main>
  );
}
