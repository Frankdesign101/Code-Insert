import { useState, type FormEvent } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowLeft, GraduationCap } from "lucide-react";

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

  return (
    <main className="max-w-5xl mx-auto px-6 py-10 space-y-10">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground">
        <ArrowLeft className="w-4 h-4" /> Back to GICS
      </Link>

      <header className="glass-panel space-y-5">
        <div className="w-12 h-12 rounded-2xl bg-[hsl(var(--accent))]/10 flex items-center justify-center text-[hsl(var(--accent))]">
          <GraduationCap className="w-6 h-6" />
        </div>
        <div className="space-y-3">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent))]">GICS Higher Education Advisory Service</p>
          <h1 className="text-4xl md:text-5xl font-black text-foreground">Higher Education Pathways</h1>
          <p className="text-muted-foreground leading-relaxed max-w-4xl">
            Academic guidance for prospective undergraduate, postgraduate, MBA and PhD applicants seeking admission to UK Business School programmes, including Business, Management, Operations, Supply Chain, Business Analytics, Marketing, Finance, Human Resource Management, International Business, Entrepreneurship and related disciplines.
          </p>
          <p className="text-sm text-foreground/90 leading-relaxed font-semibold">
            GICS helps applicants make informed choices and submit stronger applications. We do not guarantee admission, secure offers, control university decisions or represent any university unless a formal agreement exists.
          </p>
        </div>
      </header>

      <section className="space-y-5">
        <div>
          <h2 className="text-2xl font-black text-foreground">Support Options</h2>
          <p className="text-sm text-muted-foreground mt-2">Pricing is provided after enquiry review, based on scope, learner needs and delivery format.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            ["Application Planning", "Programme/course-fit guidance and initial application strategy."],
            ["Application Review", "Review of personal statement, CV and supporting application documents."],
            ["Complete Application Support", "Course selection guidance, application strategy, document review and interview preparation where applicable."],
            ["PhD Pathway Support", "Research-fit guidance, proposal positioning, supervisor/programme suitability and application document review."]
          ].map(([title, desc]) => (
            <Card key={title} className="bg-white/5 border-white/10 rounded-2xl p-6 space-y-2">
              <h3 className="font-black text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </Card>
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

      <form name="higher-education-pathways" method="POST" data-netlify="true" onSubmit={handleSubmit} className="glass-panel space-y-8">
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
    </main>
  );
}
