import { useState, type FormEvent } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";

const fieldClass = "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-[hsl(var(--accent))] focus:ring-2 focus:ring-[hsl(var(--accent))]/20 [&>option]:bg-white [&>option]:text-slate-900";
const labelClass = "mb-2 block text-sm font-bold text-foreground";

export default function Register() {
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
          "form-name": "student-registration",
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
          <h1 className="text-3xl font-black text-foreground">Registration received</h1>
          <p className="text-muted-foreground leading-relaxed">
            Thank you for registering your interest in the September 2026 GC-PSSO cohort. GICS will review your information and contact you about the next steps.
          </p>
          <Button asChild><Link href="/">Return to the GICS website</Link></Button>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-10 space-y-8">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground">
        <ArrowLeft className="w-4 h-4" /> Back to GICS
      </Link>

      <header className="space-y-3">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent))]">September 2026 cohort</p>
        <h1 className="text-4xl font-black text-foreground">Student registration</h1>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          Register your interest in the Global Certificate in Practical Supply Chain & Sustainable Operations. This is an initial registration, not a payment form, confirmed enrolment or commitment to pay. If you are offered a place, GICS will provide the applicable fee, cancellation and refund terms before you decide whether to enrol. No advanced mathematics background is required.
        </p>
      </header>

      <form name="student-registration" method="POST" data-netlify="true" onSubmit={handleSubmit} className="glass-panel space-y-10">
        <input type="hidden" name="form-name" value="student-registration" />

        <section className="space-y-5">
          <h2 className="text-xl font-black text-foreground">Contact details</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <label><span className={labelClass}>Full name *</span><input className={fieldClass} name="fullName" autoComplete="name" required /></label>
            <label><span className={labelClass}>Email address *</span><input className={fieldClass} type="email" name="email" autoComplete="email" required /></label>
            <label><span className={labelClass}>Telephone / WhatsApp</span><input className={fieldClass} type="tel" name="phone" autoComplete="tel" /></label>
            <label><span className={labelClass}>Country of residence *</span><input className={fieldClass} name="country" autoComplete="country-name" required /></label>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-xl font-black text-foreground">Education and experience</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <label><span className={labelClass}>Highest level of education *</span><select className={fieldClass} name="educationLevel" required defaultValue=""><option value="" disabled>Select one</option><option>Secondary education</option><option>Diploma or professional qualification</option><option>Bachelor's degree</option><option>Postgraduate degree</option><option>Doctorate</option><option>Other</option></select></label>
            <label><span className={labelClass}>Employment status *</span><select className={fieldClass} name="employmentStatus" required defaultValue=""><option value="" disabled>Select one</option><option>Employed full-time</option><option>Employed part-time</option><option>Self-employed</option><option>Student</option><option>Seeking work</option><option>Other</option></select></label>
            <label><span className={labelClass}>Current or most recent role/capacity *</span><input className={fieldClass} name="currentRole" required /></label>
            <label><span className={labelClass}>Sector or industry *</span><input className={fieldClass} name="industry" required /></label>
            <label><span className={labelClass}>Years of professional experience *</span><select className={fieldClass} name="experienceYears" required defaultValue=""><option value="" disabled>Select one</option><option>No formal experience yet</option><option>Less than 1 year</option><option>1–3 years</option><option>4–7 years</option><option>8–12 years</option><option>More than 12 years</option></select></label>
            <label><span className={labelClass}>Optional LinkedIn profile</span><input className={fieldClass} type="url" name="linkedIn" placeholder="https://linkedin.com/in/..." /></label>
          </div>
        </section>

        <section className="space-y-5">
          <div>
            <h2 className="text-xl font-black text-foreground">Learning readiness</h2>
            <p className="text-xs text-muted-foreground mt-1">These self-assessments help GICS plan appropriate learning support; they are not tests.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <label><span className={labelClass}>English confidence *</span><select className={fieldClass} name="englishConfidence" required defaultValue=""><option value="" disabled>Select one</option><option>Developing</option><option>Competent</option><option>Proficient</option><option>Native / bilingual</option></select></label>
            <label><span className={labelClass}>Numeracy confidence *</span><select className={fieldClass} name="numeracyConfidence" required defaultValue=""><option value="" disabled>Select one</option><option>Basic</option><option>Competent</option><option>Confident</option></select></label>
            <label><span className={labelClass}>Excel experience *</span><select className={fieldClass} name="excelExperience" required defaultValue=""><option value="" disabled>Select one</option><option>None</option><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select></label>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-xl font-black text-foreground">Programme preferences</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <label><span className={labelClass}>Preferred learning option *</span><select className={fieldClass} name="learningOption" required defaultValue=""><option value="" disabled>Select one</option><option>Live cohort</option><option>Self-paced</option><option>Not sure yet</option></select></label>
            <label><span className={labelClass}>How did you hear about GICS?</span><select className={fieldClass} name="referralSource" defaultValue=""><option value="">Select one</option><option>LinkedIn</option><option>Google or another search engine</option><option>Colleague or friend</option><option>Employer or professional network</option><option>Social media</option><option>Other</option></select></label>
          </div>
          <label><span className={labelClass}>Why would you like to join this programme? * <span className="font-normal text-muted-foreground">(approximately 100–150 words)</span></span><textarea className={fieldClass} name="motivation" rows={5} required /></label>
          <label><span className={labelClass}>What do you hope to achieve?</span><textarea className={fieldClass} name="goals" rows={3} /></label>
        </section>

        <section className="space-y-4 border-t border-white/10 pt-6">
          <p className="text-xs text-muted-foreground leading-relaxed">
            GICS will use the information provided to assess your registration, plan learner support and contact you about this programme. Submitting this form does not create an enrolment contract or payment obligation. Please do not include confidential, sensitive or unnecessary personal information. Read our <Link href="/privacy" className="font-bold text-foreground underline underline-offset-2">Privacy Notice</Link> and <Link href="/terms-refunds" className="font-bold text-foreground underline underline-offset-2">Terms &amp; Refunds</Link>.
          </p>
          <label className="flex items-start gap-3 text-sm text-foreground">
            <input type="checkbox" name="declaration" required className="mt-1 accent-[hsl(var(--accent))]" />
            <span>I confirm that the information provided is accurate and understand how GICS will use it. *</span>
          </label>
          <label className="flex items-start gap-3 text-sm text-muted-foreground">
            <input type="checkbox" name="marketingConsent" className="mt-1 accent-[hsl(var(--accent))]" />
            <span>Optional: I would like to receive information about future GICS programmes.</span>
          </label>
        </section>

        <Button type="submit" disabled={status === "sending"} className="h-12 px-8 bg-[hsl(var(--accent))] text-[hsl(var(--primary-foreground))] font-black">
          {status === "sending" ? "Submitting…" : "Submit registration"}
        </Button>
        {status === "error" && <p role="alert" className="text-sm text-red-300">Your registration could not be submitted. Please try again or email gicsinstituteuk@gmail.com.</p>}
      </form>
    </main>
  );
}
