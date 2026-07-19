import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const refundRows = [
  ["Within the statutory 14-day cancellation period", "100% of programme fees paid"],
  ["14 or more calendar days before programme start", "100% refund or transfer"],
  ["7–13 calendar days before programme start", "75% refund or one free transfer"],
  ["Fewer than 7 calendar days before programme start", "50% refund or one free transfer"],
  ["After a live programme begins, within 7 days of the first session", "50% refund"],
  ["Later cancellation", "No ordinary change-of-mind refund; exceptional circumstances may be reviewed"]
];

export default function TermsRefunds() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10 space-y-8">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground">
        <ArrowLeft className="w-4 h-4" /> Back to GICS
      </Link>

      <header className="space-y-4">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent))]">Learner information</p>
        <h1 className="text-4xl font-black text-foreground">Enrolment, cancellation and refunds</h1>
        <p className="text-muted-foreground leading-relaxed">
          This page summarises the terms that apply when an individual buys a GICS programme directly. Bespoke corporate or group bookings are governed by their written proposal or agreement.
        </p>
      </header>

      <Card className="bg-white/5 border-white/10 rounded-3xl">
        <CardHeader><CardTitle>Before you pay</CardTitle></CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>Submitting a registration form is free. It does not confirm enrolment, create a payment obligation or reserve a place.</p>
          <p>Your enrolment contract begins when GICS sends written confirmation that your place and payment have been accepted. GICS will provide the applicable fee and terms before payment.</p>
        </CardContent>
      </Card>

      <Card className="bg-[hsl(var(--accent))]/5 border-[hsl(var(--accent))]/25 rounded-3xl">
        <CardHeader><CardTitle>14-day cooling-off period and access</CardTitle></CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>You may cancel without giving a reason during the 14 calendar days beginning the day after GICS confirms your enrolment contract. A valid cancellation during this period receives a full refund.</p>
          <p className="text-foreground font-bold">GICS will not release live teaching, learning-platform access or substantive course materials until this 14-day period has expired.</p>
          <p>If fewer than 14 calendar days remain before a live cohort begins, GICS will normally offer you a place in the next available cohort.</p>
        </CardContent>
      </Card>

      <section className="space-y-4">
        <h2 className="text-2xl font-black text-foreground">Additional GICS refund terms</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/10 text-foreground">
              <tr><th className="p-4">Cancellation received</th><th className="p-4">Available outcome</th></tr>
            </thead>
            <tbody>
              {refundRows.map(([timing, outcome]) => (
                <tr key={timing} className="border-t border-white/10">
                  <td className="p-4 text-muted-foreground">{timing}</td>
                  <td className="p-4 text-foreground font-medium">{outcome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground">
          These additional terms apply after the statutory cancellation period and do not reduce your legal rights. Any approved refund will normally be returned using the original payment method.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-5">
        <Card className="bg-white/5 border-white/10 rounded-2xl">
          <CardContent className="p-6 space-y-3">
            <CheckCircle2 className="w-6 h-6 text-[hsl(var(--accent))]" />
            <h2 className="text-lg font-black text-foreground">Deferrals and self-paced study</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">A transfer or deferral is subject to availability and is normally limited to one occasion. For self-paced study, GICS will explain the access period and any extension rules before payment.</p>
          </CardContent>
        </Card>
        <Card className="bg-white/5 border-white/10 rounded-2xl">
          <CardContent className="p-6 space-y-3">
            <CheckCircle2 className="w-6 h-6 text-[hsl(var(--accent))]" />
            <h2 className="text-lg font-black text-foreground">If GICS cancels</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">If GICS cancels and cannot provide a suitable alternative, programme fees paid will be refunded. This does not affect any other rights available under law.</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white/5 border-white/10 rounded-3xl">
        <CardContent className="p-8 space-y-4">
          <Mail className="w-6 h-6 text-[hsl(var(--accent))]" />
          <h2 className="text-xl font-black text-foreground">How to cancel or request a deferral</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">Email a clear request with your name, programme, learning option and enrolment email address. GICS will confirm receipt and explain the outcome.</p>
          <Button asChild><a href="mailto:gicsinstituteuk@gmail.com">Email GICS</a></Button>
        </CardContent>
      </Card>

      <p className="text-xs text-muted-foreground leading-relaxed">
        This information does not exclude or limit statutory consumer rights. Where mandatory consumer law provides greater protection, that protection applies. Last updated: 19 July 2026.
      </p>
    </main>
  );
}
