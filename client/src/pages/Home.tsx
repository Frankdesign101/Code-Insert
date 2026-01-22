import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Target, Users, BookOpen, Award, PoundSterling, Building2, Timer } from "lucide-react";

export default function Home() {
  const progs = [
    {
      title: "Flagship Certificate",
      subtitle: "Global Certificate in Practical Supply Chain & Sustainable Operations (GC-PSSO)",
      duration: "6–8 weeks • Live online (with recordings)",
      details: [
        "Duration: 6–8 weeks",
        "Delivery: Live online (with recordings available)",
        "Format: Cohort-based learning",
        "Certification: CPD-accredited (planned / in progress)"
      ],
      overview: "The Global Certificate in Practical Supply Chain & Sustainable Operations (GC-PSSO) is a professional development programme designed to build practical, workplace-ready capability in supply chain management, operations excellence, and sustainability. Delivered through live online sessions, the programme combines expert-led teaching, applied assignments, and a capstone project focused on real operational or supply chain challenges.",
      whoItIsFor: [
        "Working professionals in supply chain, logistics, procurement, and operations",
        "NGO and public-sector staff involved in supply chain and operations delivery",
        "Early-career professionals and graduates seeking applied, employable skills",
        "Professionals interested in sustainable and responsible practices",
        "Corporate teams requiring structured capability development"
      ],
      learningOutcomes: [
        "Analyse end-to-end supply chain processes and identify performance gaps",
        "Apply operations improvement and Lean principles to practical scenarios",
        "Use data and KPIs to support operational and managerial decision-making",
        "Integrate sustainability and ESG considerations into supply chain activities",
        "Communicate operational insights clearly and professionally to stakeholders"
      ],
      structure: [
        "Live online teaching sessions (typically two sessions per week)",
        "Interactive discussions and case-based learning",
        "Structured weekly applied assignments",
        "Final applied capstone project addressing real issues"
      ],
      assessment: "Learning is assessed through applied individual or group assignments, participation in discussions, and a final capstone project. The capstone requires participants to analyse a real or simulated challenge and propose practical, sustainability-informed solutions."
    },
    {
      title: "Supply Chain Analytics",
      subtitle: "Excel & Power BI Core",
      duration: "2–3 weeks • Tool-based",
      details: [
        "KPI Dashboard builds",
        "Forecasting basics",
        "Inventory metrics",
        "Real dataset practice"
      ]
    },
    {
      title: "Lean Operations",
      subtitle: "Process Improvement",
      duration: "2–3 weeks • Applied",
      details: [
        "Process mapping",
        "Waste elimination",
        "Root cause analysis",
        "Mini project output"
      ]
    }
  ];

  return (
    <div className="max-w-[1160px] mx-auto px-6 py-8 space-y-12">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/10">
        <a className="flex items-center gap-4 no-underline group" href="#" data-testid="link-home">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(200,85%,65%)] shadow-xl group-hover:scale-105 transition-transform" />
          <div>
            <strong className="block text-base tracking-tight font-bold text-foreground">Global Institute for Supply Chain & Sustainability (GICS)</strong>
            <span className="block text-xs text-muted-foreground font-medium uppercase tracking-wider">Supply Chain • Operations • Sustainability</span>
          </div>
        </a>
        <nav className="flex gap-6 flex-wrap">
          {["Programmes", "Fees", "Corporate", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
              data-testid={`nav-${item.toLowerCase()}`}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <div className="hero-grid">
        <div className="glass-panel space-y-8 flex flex-col justify-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-black leading-tight text-foreground tracking-tight">
              UK-quality, practical training delivered globally.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
              GICS builds real workplace capability through applied learning and industry-aligned tools—designed by a UK Programme Director.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button className="bg-[hsl(var(--accent))] text-[hsl(var(--primary-foreground))] font-black border-none h-12 px-8 rounded-xl shadow-lg hover:brightness-110 hover:translate-y-[-2px] transition-all" data-testid="button-register">
              Register for Sept 2026
            </Button>
            <Button variant="outline" className="h-12 px-8 rounded-xl bg-white/5 border-white/20 text-foreground font-bold hover:bg-white/10 hover:translate-y-[-2px] transition-all" data-testid="button-view-programmes">
              View programmes
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "Live cohort-based learning",
              "Recordings included",
              "Applied capstone projects",
              "Corporate training"
            ].map((text) => (
              <Badge key={text} variant="outline" className="px-4 py-1.5 bg-white/5 border-white/20 rounded-full font-bold text-xs uppercase tracking-wide text-foreground">
                {text}
              </Badge>
            ))}
          </div>

          <p className="text-xs text-muted-foreground/80 italic font-medium pt-4 border-t border-white/5">
            *Professional training and career readiness support. We do not offer job placement or visa sponsorship.
          </p>
        </div>

        {/* Hero Sidebar */}
        <div className="glass-panel flex flex-col gap-8 bg-[hsla(222,47%,16%,0.9)]">
          <section>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent))] mb-4">First cohort</h3>
            <div className="space-y-3">
              {[
                { label: "Start", value: "September 2026" },
                { label: "Flagship", value: "Global Certificate in Practical Supply Chain & Sustainable Operations (GC-PSSO)" },
                { label: "Duration", value: "6–8 weeks • Live Sessions" },
                { label: "Assessment", value: "Capstone project" }
              ].map((item) => (
                <div key={item.label} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                  <span className="block text-[10px] font-black uppercase text-muted-foreground mb-1">{item.label}</span>
                  <span className="text-sm font-bold text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="pt-6 border-t border-white/10">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent))] mb-4">Academic lead</h3>
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
              <b className="text-foreground text-base block mb-2">Dr Frank Donkor</b>
              <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                Programme Director, MSc Operations Management (University of Exeter). Expert in supply chain sustainability and operations leadership.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Programmes */}
      <section id="programmes" className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black text-foreground uppercase tracking-tight">Programmes</h2>
            <p className="text-muted-foreground font-medium mt-2">Applied, tool-based training for real-world impact.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {progs.map((prog) => (
            <Card 
              key={prog.title} 
              className={`bg-white/5 border-white/10 rounded-3xl overflow-hidden hover:border-[hsl(var(--accent))]/50 transition-all duration-300 ${prog.title === "Flagship Certificate" ? "md:col-span-3" : "flex flex-col"}`}
            >
              <CardHeader className="bg-white/5 p-8">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <CardTitle className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent))] mb-3">{prog.title}</CardTitle>
                    <p className="text-2xl font-bold text-foreground leading-tight">{prog.subtitle}</p>
                  </div>
                  {prog.title === "Flagship Certificate" && (
                    <Badge className="bg-[hsl(var(--accent))] text-[hsl(var(--primary-foreground))] font-black px-4 py-1">POPULAR</Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="p-8 space-y-10">
                {prog.overview && (
                  <div className="space-y-4">
                    <h4 className="text-sm font-black uppercase tracking-widest text-foreground flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[hsl(var(--accent))]" /> Programme Overview
                    </h4>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {prog.overview}
                    </p>
                  </div>
                )}

                <div className={`${prog.title === "Flagship Certificate" ? "grid grid-cols-1 md:grid-cols-2 gap-12" : "space-y-8"}`}>
                  {/* Left Column for Flagship / Single Column for others */}
                  <div className="space-y-8">
                    {prog.learningOutcomes && (
                      <div className="space-y-4">
                        <h4 className="text-sm font-black uppercase tracking-widest text-foreground flex items-center gap-2">
                          <Target className="w-4 h-4 text-[hsl(var(--accent))]" /> What You Will Learn
                        </h4>
                        <ul className="space-y-3">
                          {prog.learningOutcomes.map(item => (
                            <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                              <span className="font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {prog.whoItIsFor && (
                      <div className="space-y-4">
                        <h4 className="text-sm font-black uppercase tracking-widest text-foreground flex items-center gap-2">
                          <Users className="w-4 h-4 text-[hsl(var(--accent))]" /> Who This Is For
                        </h4>
                        <ul className="space-y-3">
                          {prog.whoItIsFor.map(item => (
                            <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent))] shrink-0 mt-1.5" />
                              <span className="font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {!prog.learningOutcomes && (
                      <div className="space-y-4">
                        <p className="text-xs font-black text-[hsl(var(--accent))] uppercase tracking-[0.1em]">{prog.duration}</p>
                        <ul className="space-y-3">
                          {prog.details.map(detail => (
                            <li key={detail} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                              <span className="font-medium">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Right Column for Flagship */}
                  {prog.title === "Flagship Certificate" && (
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <h4 className="text-sm font-black uppercase tracking-widest text-foreground flex items-center gap-2">
                          <Award className="w-4 h-4 text-[hsl(var(--accent))]" /> Certification & Assessment
                        </h4>
                        <div className="p-5 bg-white/5 border border-white/10 rounded-2xl space-y-4">
                          <p className="text-sm text-muted-foreground leading-relaxed">{prog.assessment}</p>
                          <div className="pt-4 border-t border-white/5">
                            <p className="text-xs font-bold text-foreground">CPD-accredited (planned / in progress)</p>
                            <p className="text-[11px] text-muted-foreground mt-1">Participants receive a Certificate of Completion.</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-sm font-black uppercase tracking-widest text-foreground flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-[hsl(var(--accent))]" /> Programme Structure
                        </h4>
                        <ul className="space-y-3">
                          {prog.structure?.map(item => (
                            <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-white/20 shrink-0 mt-1.5" />
                              <span className="font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-[11px] text-muted-foreground italic">Session recordings provided for all participants.</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose GICS? */}
      <section id="about" className="space-y-8">
        <div>
          <h2 className="text-3xl font-black text-foreground uppercase tracking-tight">Why Choose GICS?</h2>
          <p className="text-muted-foreground font-medium mt-2">UK-quality design with a focus on real-world impact.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "UK-Quality Leadership",
              desc: "Programme design led by experienced and senior UK lecturers with deep academic and industry roots.",
              icon: <Award className="w-5 h-5" />
            },
            {
              title: "Practical over Theory",
              desc: "Strong focus on practical application and workplace readiness, moving beyond traditional theory alone.",
              icon: <Target className="w-5 h-5" />
            },
            {
              title: "Competency Assessment",
              desc: "Assessments informed by professional and postgraduate standards to ensure real competency.",
              icon: <CheckCircle2 className="w-5 h-5" />
            },
            {
              title: "Global Perspective",
              desc: "Delivery with sensitivity to both developed and emerging market contexts for global relevance.",
              icon: <Users className="w-5 h-5" />
            },
            {
              title: "Bespoke & Flexible",
              desc: "Bespoke learning designed at your own pace with flexible fees to suit various needs.",
              icon: <Timer className="w-5 h-5" />
            }
          ].map((item, i) => (
            <Card key={i} className="bg-white/5 border-white/10 rounded-2xl p-6 space-y-4 hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[hsl(var(--accent))]/10 flex items-center justify-center text-[hsl(var(--accent))]">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">{item.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Fees Section */}
      <section id="fees" className="space-y-8">
        <div>
          <h2 className="text-3xl font-black text-foreground uppercase tracking-tight">Fees (GBP)</h2>
          <p className="text-muted-foreground font-medium mt-2">Transparent pricing for professional development.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Flagship Fees */}
          <Card className="bg-white/5 border-white/10 rounded-3xl overflow-hidden p-8 space-y-6">
            <div className="space-y-2">
              <h3 className="text-sm font-black uppercase tracking-widest text-[hsl(var(--accent))]">Flagship Programme</h3>
              <p className="text-lg font-bold text-foreground leading-tight">Live Cohort</p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-sm text-muted-foreground font-medium">Standard Fee</span>
                <span className="text-xl font-black text-foreground">£120 – £250</span>
              </div>
              <div className="flex justify-between items-end p-3 bg-[hsl(var(--accent))]/10 border border-[hsl(var(--accent))]/20 rounded-xl">
                <div>
                  <span className="text-xs font-black text-[hsl(var(--accent))] uppercase">Early Bird</span>
                  <p className="text-[10px] text-muted-foreground">Limited places</p>
                </div>
                <span className="text-lg font-black text-foreground">£70 – £120</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-sm text-muted-foreground font-medium">Premium Option</span>
                <span className="text-lg font-bold text-foreground">£300 – £450</span>
              </div>
              <p className="text-[10px] text-muted-foreground italic leading-tight">*Premium includes additional coaching and feedback.</p>
            </div>
          </Card>

          {/* Self-Paced Fees */}
          <Card className="bg-white/5 border-white/10 rounded-3xl overflow-hidden p-8 space-y-6">
            <div className="space-y-2">
              <h3 className="text-sm font-black uppercase tracking-widest text-[hsl(var(--accent))]">Self-Paced Option</h3>
              <p className="text-lg font-bold text-foreground leading-tight">Recorded Course</p>
            </div>
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <span className="text-sm text-muted-foreground font-medium">Course Fee</span>
                <span className="text-xl font-black text-foreground">£49 – £99</span>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-2">
                <h4 className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Optional Add-on</h4>
                <div className="flex justify-between items-end">
                  <span className="text-xs font-bold text-foreground">Group Coaching</span>
                  <span className="text-base font-black text-foreground">£120 – £180</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Corporate Fees */}
          <Card className="bg-white/5 border-white/10 rounded-3xl overflow-hidden p-8 space-y-6 relative group border-dashed">
            <div className="space-y-2">
              <h3 className="text-sm font-black uppercase tracking-widest text-[hsl(var(--accent))]">Corporate / Team</h3>
              <p className="text-lg font-bold text-foreground leading-tight">Customised Delivery</p>
            </div>
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-sm text-muted-foreground font-medium">Typical Range</span>
                <p className="text-xl font-black text-foreground">£900 – £2,500</p>
                <p className="text-xs text-muted-foreground">per cohort</p>
              </div>
              <Button className="w-full bg-foreground text-background font-black uppercase text-xs py-6 hover:brightness-110">
                Request Proposal
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-12 pb-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-sm">
        <div className="space-y-2 text-center md:text-left">
          <p className="text-foreground font-bold text-base">GICS</p>
          <p className="text-muted-foreground font-medium">© 2026 Global Institute for Supply Chain & Sustainability.</p>
        </div>
        <div className="flex gap-10 font-black uppercase tracking-widest text-[10px] text-muted-foreground">
          <a href="#" className="hover:text-[hsl(var(--accent))] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[hsl(var(--accent))] transition-colors">Terms</a>
          <a href="#" className="hover:text-[hsl(var(--accent))] transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
}
