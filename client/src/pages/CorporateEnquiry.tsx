import { useState, type FormEvent } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";

const fieldClass = "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-[hsl(var(--accent))] focus:ring-2 focus:ring-[hsl(var(--accent))]/20 [&>option]:bg-white [&>option]:text-slate-900";
const labelClass = "mb-2 block text-sm font-bold text-foreground";

export default function CorporateEnquiry() {
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

  if (status === "success") {
    return (
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="glass-panel text-center space-y-6">
          <CheckCircle2 className="w-14 h-14 text-[hsl(var(--accent))] mx-auto" />
          <h1 className="text-3xl font-black text-foreground">Proposal request received</h1>
          <p className="text-muted-foreground leading-relaxed">
            Thank you. GICS will review your organisation's requirements and contact you to discuss a suitable training proposal.
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
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent))]">Corporate and team training</p>
        <h1 className="text-4xl font-black text-foreground">Request a training proposal</h1>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          Tell us about your organisation, team and capability priorities. GICS will use this information to prepare an initial discussion and tailored proposal.
        </p>
      </header>

      <form name="corporate-proposal" method="POST" data-netlify="true" onSubmit={handleSubmit} className="glass-panel space-y-10">
        <input type="hidden" name="form-name" value="corporate-proposal" />

        <section className="space-y-5">
          <h2 className="text-xl font-black text-foreground">Contact and organisation</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <label><span className={labelClass}>Contact person's full name *</span><input className={fieldClass} name="contactName" autoComplete="name" required /></label>
            <label><span className={labelClass}>Work email address *</span><input className={fieldClass} type="email" name="workEmail" autoComplete="email" required /></label>
            <label><span className={labelClass}>Telephone / WhatsApp</span><input className={fieldClass} type="tel" name="phone" autoComplete="tel" /></label>
            <label><span className={labelClass}>Job title *</span><input className={fieldClass} name="jobTitle" required /></label>
            <label><span className={labelClass}>Organisation name *</span><input className={fieldClass} name="organisation" autoComplete="organization" required /></label>
            <label><span className={labelClass}>Country *</span><input className={fieldClass} name="country" autoComplete="country-name" required /></label>
            <label><span className={labelClass}>Organisation type *</span><select className={fieldClass} name="organisationType" required defaultValue=""><option value="" disabled>Select one</option><option>Private company</option><option>Public-sector organisation</option><option>NGO / charity</option><option>Educational institution</option><option>Professional association</option><option>Other</option></select></label>
            <label><span className={labelClass}>Approximate team size *</span><select className={fieldClass} name="teamSize" required defaultValue=""><option value="" disabled>Select one</option><option>1–5 participants</option><option>6–10 participants</option><option>11–20 participants</option><option>21–50 participants</option><option>More than 50 participants</option><option>Not yet confirmed</option></select></label>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-xl font-black text-foreground">Training requirements</h2>
          <label><span className={labelClass}>What capability or performance challenge should the training address? *</span><textarea className={fieldClass} name="trainingNeeds" rows={5} required /></label>
          <div className="grid md:grid-cols-2 gap-5">
            <label><span className={labelClass}>Main subject area *</span><select className={fieldClass} name="subjectArea" required defaultValue=""><option value="" disabled>Select one</option><option>Supply chain and logistics</option><option>Operations and process improvement</option><option>Sustainability, ESG and responsible sourcing</option><option>Data analytics and performance</option><option>Integrated / multidisciplinary programme</option><option>Not sure—please advise</option></select></label>
            <label><span className={labelClass}>Preferred delivery format *</span><select className={fieldClass} name="deliveryFormat" required defaultValue=""><option value="" disabled>Select one</option><option>Live online</option><option>In person</option><option>Blended</option><option>Self-paced</option><option>Not sure—please advise</option></select></label>
            <label><span className={labelClass}>Preferred timing or proposed dates</span><input className={fieldClass} name="proposedDates" placeholder="For example: October 2026" /></label>
            <label><span className={labelClass}>Indicative budget range</span><select className={fieldClass} name="budget" defaultValue=""><option value="">Prefer to discuss</option><option>Under £1,000</option><option>£1,000–£2,500</option><option>£2,501–£5,000</option><option>Above £5,000</option></select></label>
          </div>
          <label><span className={labelClass}>Desired outcomes or other relevant information</span><textarea className={fieldClass} name="desiredOutcomes" rows={4} /></label>
        </section>

        <section className="space-y-4 border-t border-white/10 pt-6">
          <p className="text-xs text-muted-foreground leading-relaxed">
            GICS will use this information to respond to your enquiry and develop an appropriate proposal. Please do not submit confidential, commercially sensitive or unnecessary personal information at this initial stage.
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
          {status === "sending" ? "Submitting…" : "Request proposal"}
        </Button>
        {status === "error" && <p role="alert" className="text-sm text-red-300">Your request could not be submitted. Please try again or email gicsinstituteuk@gmail.com.</p>}
      </form>
    </main>
  );
}
