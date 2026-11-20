import { useState, type FormEvent } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";

const fieldClass = "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition focus:border-[hsl(var(--accent))] focus:ring-2 focus:ring-[hsl(var(--accent))]/20 [&>option]:bg-white [&>option]:text-slate-900";
const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Republic of the)",
  "Costa Rica",
  "Côte d’Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "São Tomé and Príncipe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Türkiye",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];
const industries = [
  "Agriculture, food and agribusiness",
  "Automotive and aerospace",
  "Banking, finance and insurance",
  "Construction and infrastructure",
  "Consulting and professional services",
  "Education and research",
  "Energy, oil, gas and utilities",
  "Engineering and industrial services",
  "Government and public sector",
  "Healthcare and social care",
  "Hospitality, tourism and leisure",
  "Information technology and telecommunications",
  "Logistics, transport and distribution",
  "Manufacturing and production",
  "Mining and natural resources",
  "Non-profit and international development",
  "Pharmaceuticals and life sciences",
  "Procurement and supply chain services",
  "Retail, wholesale and e-commerce",
  "Sustainability and environmental services",
  "Other (please specify)",
  "Not currently employed / Student"
];

const labelClass = "mb-2 block text-sm font-bold text-foreground";

function getGuidedCohortStatus() {
  const today = new Date();
  const earlyBirdEnds = new Date("2027-04-01T00:00:00+00:00");
  const standardEnds = new Date("2027-05-10T00:00:00+01:00");
  const programmeStarts = new Date("2027-05-17T00:00:00+01:00");

  if (today < earlyBirdEnds) {
    return {
      stage: "early-bird",
      title: "Executive Guided Cohort",
      price: "Early Bird: £250 until 31 March 2027",
      description: "Founding Cohort applications are open. Places are limited to 25 participants.",
      dateNote: "Starts 17 May 2027 | Limited to 25 participants",
      optionLabel: "Executive Guided Cohort - Early Bird (£250)",
      buttonLabel: "Submit registration"
    };
  }

  if (today < standardEnds) {
    return {
      stage: "standard",
      title: "Executive Guided Cohort",
      price: "Standard: £325 until 9 May 2027",
      description: "Founding Cohort applications remain open, subject to availability.",
      dateNote: "Starts 17 May 2027 | Limited to 25 participants",
      optionLabel: "Executive Guided Cohort - Standard (£325)",
      buttonLabel: "Submit registration"
    };
  }

  if (today < programmeStarts) {
    return {
      stage: "waiting-list",
      title: "Executive Guided Cohort",
      price: "Guided Cohort registration has closed",
      description: "Join the waiting list for the next guided cohort.",
      dateNote: "Founding Cohort starts 17 May 2027",
      optionLabel: "Join Guided Cohort waiting list",
      buttonLabel: "Submit registration"
    };
  }

  return {
    stage: "programme-in-progress",
    title: "Executive Guided Cohort",
    price: "Programme in progress",
    description: "Please join the waiting list for the next guided cohort.",
    dateNote: "Founding Cohort in progress",
    optionLabel: "Join Guided Cohort waiting list",
    buttonLabel: "Submit registration"
  };
}

export default function Register() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [industry, setIndustry] = useState("");
  const guidedStatus = getGuidedCohortStatus();

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
      setIndustry("");
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
            Thank you for registering your interest in GC-PSSO. GICS will review your information and contact you about the next steps.
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
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent))]">Founding Cohort - applications now open</p>
        <h1 className="text-4xl font-black text-foreground">Student registration</h1>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          Register your interest in the Global Certificate in Practical Supply Chain & Sustainable Operations. The Executive Guided Cohort begins on 17 May 2027 and is limited to 25 participants. Professional Self-Paced registration is open now, with learning access available from 17 May 2027. Thereafter, learners may start on a rolling basis. This is an initial registration, not a payment form, confirmed enrolment or commitment to pay. If you are offered a place, GICS will provide the applicable fee, cancellation and refund terms before you decide whether to enrol. No advanced mathematics background is required.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-5">
        <div className="glass-panel flex flex-col gap-3 h-full">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent))]">{guidedStatus.title}</p>
          <h2 className="text-xl font-black text-foreground">{guidedStatus.price}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">{guidedStatus.description}</p>
          <p className="text-xs text-muted-foreground mt-auto pt-2">{guidedStatus.dateNote}</p>
        </div>
        <div className="glass-panel flex flex-col gap-3 h-full">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent))]">Professional Self-Paced</p>
          <h2 className="text-xl font-black text-foreground">£195 | Rolling enrolment</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">Registration is open now. Learning access begins on 17 May 2027. Thereafter, learners can enrol and study at their own pace.</p>
          <p className="text-xs text-muted-foreground mt-auto pt-2">Optional 1:1 coaching add-on: £125</p>
        </div>
      </section>

      <form name="student-registration" method="POST" data-netlify="true" onSubmit={handleSubmit} className="glass-panel space-y-10">
        <input type="hidden" name="form-name" value="student-registration" />
        <input type="hidden" name="cohortStage" value={guidedStatus.stage} />

        <section className="space-y-5">
          <h2 className="text-xl font-black text-foreground">Contact details</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <label><span className={labelClass}>Full name *</span><input className={fieldClass} name="fullName" autoComplete="name" required /></label>
            <label><span className={labelClass}>Email address *</span><input className={fieldClass} type="email" name="email" autoComplete="email" required /></label>
            <label><span className={labelClass}>Telephone / WhatsApp</span><input className={fieldClass} type="tel" name="phone" autoComplete="tel" /></label>
            <label><span className={labelClass}>Country of residence *</span><input className={fieldClass} name="country" list="gics-country-options" autoComplete="country-name" placeholder="Start typing to search countries" required /><datalist id="gics-country-options">{countries.map((country) => <option key={country} value={country} />)}</datalist></label>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-xl font-black text-foreground">Education and experience</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <label><span className={labelClass}>Highest level of education *</span><select className={fieldClass} name="educationLevel" required defaultValue=""><option value="" disabled>Select one</option><option>Secondary education</option><option>Diploma or professional qualification</option><option>Bachelor's degree</option><option>Postgraduate degree</option><option>Doctorate</option><option>Other</option></select></label>
            <label><span className={labelClass}>Employment status *</span><select className={fieldClass} name="employmentStatus" required defaultValue=""><option value="" disabled>Select one</option><option>Employed full-time</option><option>Employed part-time</option><option>Self-employed</option><option>Student</option><option>Seeking work</option><option>Other</option></select></label>
            <label><span className={labelClass}>Current or most recent role/capacity *</span><input className={fieldClass} name="currentRole" required /></label>
            <label><span className={labelClass}>Sector or industry *</span><select className={fieldClass} name="industry" value={industry} onChange={(event) => setIndustry(event.target.value)} required><option value="" disabled>Select your sector or industry</option>{industries.map((sector) => <option key={sector} value={sector}>{sector}</option>)}</select>{industry === "Other (please specify)" && <input className={`${fieldClass} mt-2`} name="industryOther" placeholder="Please specify your industry" aria-label="Please specify your industry" required />}</label>
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
            <label><span className={labelClass}>Preferred learning option *</span><select className={fieldClass} name="learningOption" required defaultValue=""><option value="" disabled>Select one</option><option>{guidedStatus.optionLabel}</option><option>Professional Self-Paced - rolling enrolment (£195)</option><option>Not sure yet</option></select></label>
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
          {status === "sending" ? "Submitting..." : guidedStatus.buttonLabel}
        </Button>
        {status === "error" && <p role="alert" className="text-sm text-red-300">Your registration could not be submitted. Please try again or email gicsinstituteuk@gmail.com.</p>}
      </form>
    </main>
  );
}
