import { useState, type FormEvent } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";

const fieldClass = "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-[hsl(var(--accent))] focus:ring-2 focus:ring-[hsl(var(--accent))]/20 [&>option]:bg-white [&>option]:text-slate-900";
const labelClass = "mb-2 block text-sm font-bold text-foreground";

export default function VerifyCertificate() {
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
          "form-name": "certificate-verification",
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
          <h1 className="text-3xl font-black text-foreground">Verification request received</h1>
          <p className="text-muted-foreground leading-relaxed">
            Thank you. GICS will check the certificate details against the internal certificate register and respond by email.
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

      <header className="space-y-4">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent))]">Certificate verification</p>
        <h1 className="text-4xl font-black text-foreground">Verify a GICS certificate</h1>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          GICS certificates can be verified by request. Submit the certificate details below and GICS will confirm whether the certificate number matches the internal certificate register.
        </p>
      </header>

      <section className="glass-panel grid md:grid-cols-[0.8fr_1.2fr] gap-6 items-start">
        <div className="space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[hsl(var(--accent))]/10 flex items-center justify-center text-[hsl(var(--accent))]">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-black text-foreground">How verification works</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This page is for official verification requests only. GICS does not publish personal certificate records publicly.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Please enter the details exactly as they appear on the certificate where possible.
          </p>
        </div>

        <form name="certificate-verification" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-6">
          <input type="hidden" name="form-name" value="certificate-verification" />

          <div className="grid md:grid-cols-2 gap-5">
            <label><span className={labelClass}>Certificate number *</span><input className={fieldClass} name="certificateNumber" placeholder="GC-PSSO-2026-0001" required /></label>
            <label><span className={labelClass}>Date of issue</span><input className={fieldClass} type="date" name="dateOfIssue" /></label>
            <label><span className={labelClass}>Recipient name *</span><input className={fieldClass} name="recipientName" required /></label>
            <label><span className={labelClass}>Programme title *</span><input className={fieldClass} name="programmeTitle" defaultValue="Global Certificate in Practical Supply Chain & Sustainable Operations (GC-PSSO)" required /></label>
            <label><span className={labelClass}>Requester name *</span><input className={fieldClass} name="requesterName" autoComplete="name" required /></label>
            <label><span className={labelClass}>Requester email *</span><input className={fieldClass} type="email" name="requesterEmail" autoComplete="email" required /></label>
          </div>

          <label><span className={labelClass}>Optional message</span><textarea className={fieldClass} name="message" rows={4} placeholder="Add any context that may help GICS verify the certificate." /></label>

          <p className="text-xs text-muted-foreground leading-relaxed border-t border-white/10 pt-4">
            GICS will use the information provided only to process this verification request and respond to the requester. Please do not submit unnecessary personal information.
          </p>

          <Button type="submit" disabled={status === "sending"} className="h-12 px-8 bg-[hsl(var(--accent))] text-[hsl(var(--primary-foreground))] font-black">
            {status === "sending" ? "Submitting..." : "Request verification"}
          </Button>
          {status === "error" && <p role="alert" className="text-sm text-red-300">Your request could not be submitted. Please try again or email gicsinstituteuk@gmail.com.</p>}
        </form>
      </section>
    </main>
  );
}
