import { Link } from "wouter";
import { ArrowLeft, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sections = [
  {
    title: "Information we collect",
    body: "We may collect your name, contact details, country, education and employment information, learning-readiness responses, programme preferences, application statements, communications, payment and enrolment records, attendance, assessment and feedback information. Our website may also receive basic technical and form-submission data needed for security and operation."
  },
  {
    title: "How and why we use it",
    body: "We use personal information to respond to enquiries, assess programme registrations, arrange learning support, administer offers, payments and enrolment, deliver teaching and assessment, issue certificates, keep academic and financial records, protect our services and meet legal obligations. Where you separately choose marketing updates, we use your consent and you may withdraw it at any time."
  },
  {
    title: "Our lawful bases",
    body: "Depending on the activity, we process information because it is necessary to take steps at your request before a contract, perform an enrolment contract, comply with legal obligations, pursue legitimate interests such as operating and improving GICS securely, or because you have given consent. We do not use optional marketing consent as a condition of registration."
  },
  {
    title: "Who receives information",
    body: "Access is limited to authorised GICS staff and service providers that support website hosting and forms, email, cloud storage, learning delivery, payment processing and professional administration. We may also disclose information where required by law or to establish, exercise or defend legal claims. We do not sell personal information."
  },
  {
    title: "International processing",
    body: "Some technology providers may process information outside the United Kingdom. Where required, GICS will use an approved transfer mechanism or rely on another lawful safeguard and take reasonable steps to protect the information."
  },
  {
    title: "How long we keep it",
    body: "General enquiries and unsuccessful registration records are normally kept for up to 12 months after the last meaningful contact. Enrolment, learning, assessment and payment records may normally be kept for up to six years after the programme ends where needed for certification, accounting, contractual or legal purposes. Marketing records are kept until consent is withdrawn or the information is no longer needed. We may retain specific records for longer where law or an active dispute requires it."
  },
  {
    title: "Your rights",
    body: "Depending on the circumstances, you may ask for access to your information, correction, deletion, restriction, transfer, or object to certain uses. You may withdraw consent at any time, and you have an absolute right to object to direct marketing. Some rights are subject to legal limitations."
  }
];

export default function Privacy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10 space-y-8">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground">
        <ArrowLeft className="w-4 h-4" /> Back to GICS
      </Link>

      <header className="space-y-4">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent))]">Your information</p>
        <h1 className="text-4xl font-black text-foreground">Privacy Notice</h1>
        <p className="text-muted-foreground leading-relaxed">
          Global Supply Chain &amp; Sustainability Academy Ltd, trading as the Global Institute for Supply Chain &amp; Sustainability (GICS), is responsible for the personal information described in this notice. We are registered in England and Wales under company number 16986058.
        </p>
      </header>

      <Card className="bg-[hsl(var(--accent))]/5 border-[hsl(var(--accent))]/25 rounded-3xl">
        <CardContent className="p-8 flex items-start gap-4">
          <ShieldCheck className="w-7 h-7 text-[hsl(var(--accent))] shrink-0 mt-1" />
          <div className="space-y-2">
            <h2 className="text-xl font-black text-foreground">In brief</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              GICS collects only the information reasonably needed to handle enquiries, registrations and programme delivery. We use it transparently, restrict access and retain it only as long as necessary.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-5">
        {sections.map((section) => (
          <Card key={section.title} className="bg-white/5 border-white/10 rounded-2xl">
            <CardHeader className="pb-2"><CardTitle className="text-xl">{section.title}</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">{section.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-white/5 border-white/10 rounded-3xl">
        <CardContent className="p-8 space-y-4">
          <Mail className="w-6 h-6 text-[hsl(var(--accent))]" />
          <h2 className="text-xl font-black text-foreground">Questions, requests or complaints</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Contact GICS to exercise a data-protection right or ask how your information is used. We may need to verify your identity. You may also complain to the UK Information Commissioner's Office if you are dissatisfied with our response.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild><a href="mailto:gicsinstituteuk@gmail.com">Email GICS</a></Button>
            <Button asChild variant="outline"><a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noreferrer">Contact the ICO</a></Button>
          </div>
        </CardContent>
      </Card>

      <p className="text-xs text-muted-foreground leading-relaxed">
        We may update this notice when our services or legal obligations change. Last updated: 19 July 2026.
      </p>
    </main>
  );
}
