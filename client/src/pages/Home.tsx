import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Target, Users, BookOpen, Award, Building2, Timer, ChevronRight, Info, Presentation } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  const modules = [
    {
      id: "week-1",
      title: "Week 1: Global Supply Chain Foundations & Systems Thinking",
      focus: "Understanding supply chain ecosystems and interdependencies across industries.",
      topics: [
        "Global trends, disruptions, and enabling technologies",
        "Case studies: FMCG, healthcare, retail, agribusiness",
        "Supply chain performance and strategic fit"
      ],
      capstone: "Select one organisation and define a real supply chain or operations challenge.",
      references: "Chopra & Meindl (Ch 1-3), Martin Christopher (Ch 1-3)"
    },
    {
      id: "week-2",
      title: "Week 2: Inventory, Warehousing & Procurement Essentials",
      focus: "Core building blocks of supply chain execution and control.",
      topics: [
        "Inventory control systems and stock management",
        "Warehouse planning, layout, and operational performance",
        "Supplier evaluation, sourcing decisions, and negotiation"
      ],
      capstone: "Analyse how inventory, warehousing, or sourcing contributes to the chosen challenge.",
      references: "Slack & Brandon-Jones (Ch 4, 13), Chopra & Meindl (Ch 6, 15)"
    },
    {
      id: "week-3",
      title: "Week 3: Operations Excellence & Lean Fundamentals",
      focus: "Practical skills in process improvement and operational efficiency.",
      topics: [
        "Process analysis and Value Stream Mapping",
        "The 7 wastes and operational bottlenecks",
        "Practical continuous improvement tools"
      ],
      capstone: "Map one process and identify improvement opportunities.",
      references: "Slack & Brandon-Jones (Ch 15), Reid & Sanders (Ch 4-6, 16)"
    },
    {
      id: "week-4",
      title: "Week 4: Data Analytics for Operations & Supply Chain Performance",
      focus: "Building confidence in data-driven decision-making and KPIs.",
      topics: [
        "Excel for operational analysis and demand forecasting",
        "Designing KPI dashboards for performance",
        "Introduction to Power BI for visual reporting"
      ],
      capstone: "Develop a KPI framework aligned to the capstone challenge.",
      references: "Slack & Brandon-Jones (Ch 2, 10-12), Chopra & Meindl (Ch 4-5)"
    },
    {
      id: "week-5",
      title: "Week 5: Sustainable & Green Supply Chains",
      focus: "Embedding sustainability and ESG into operational strategy.",
      topics: [
        "ESG, circular economy principles, and green logistics",
        "Climate-smart operations and responsible sourcing",
        "Sustainability trade-offs and case studies"
      ],
      capstone: "Identify sustainability risks/opportunities and propose realistic interventions.",
      references: "Chopra & Meindl (Ch 10), CISL Sustainable Supply Chain Frameworks"
    },
    {
      id: "week-6",
      title: "Week 6: Professional Practice & Global Supply Chain Careers",
      focus: "Communicating operational insights and strengthening professional readiness.",
      topics: [
        "Professional reporting and stakeholder communication",
        "CV and LinkedIn optimisation for supply chain careers",
        "Interview preparation and applied career strategy"
      ],
      capstone: "Finalise recommendations and submit the integrated capstone report.",
      references: "Slack & Brandon-Jones (Ch 1, 18), Reporting templates & guidance"
    }
  ];

  return (
    <div className="max-w-[1160px] mx-auto px-6 py-8 space-y-12">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/10">
        <a className="flex items-center gap-4 no-underline group" href="#" data-testid="link-home">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(200,85%,65%)] shadow-xl group-hover:scale-105 transition-transform" />
          <div>
            <img
             src="/GICS Logo single bac croped.png"
             alt="GICS Logo"
             className="h-24 mx-auto"
            />
            <strong className="block text-base tracking-tight font-bold text-foreground">Global Institute for Supply Chain & Sustainability (GICS)</strong>
            <p className="mt-2 text-sm text-muted-foreground italic">Advancing Professional Capability and Industry Outcomes Through Education.</p>
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
                { label: "Duration", value: "6–8 weeks • Live and/or recorded sessions" },
                { label: "Assessment", value: "Integrated Capstone Project" }
              ].map((item) => (
                <div key={item.label} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                  <span className="block text-[10px] font-black uppercase text-muted-foreground mb-1">{item.label}</span>
                  <span className="text-sm font-bold text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="pt-6 border-t border-white/10">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[hsl(var(--accent))] mb-4">Programme Lead Profile</h3>
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-4">
              <div>
                <b className="text-foreground text-base block mb-1">Dr Frank Donkor</b>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                  Lecturer in Operations and Supply Chain Management and a Programme Director at the University of Exeter Business School. Fellow of The Higher Education Academy (UK) and an EduExe Fellow. Dr Frank Donkor is also a module tutor on the MBA programme at the University of Exeter Business School.
                </p>
              </div>
              
              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Specialisms</p>
                <ul className="space-y-1.5">
                  {[
                    "Supply chain sustainability & ESG",
                    "Operations management & performance",
                    "Leadership in global supply chains",
                    "Pharmaceutical industry collaboration",
                    "Professional skills development"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[10px] text-muted-foreground font-medium">
                      <div className="w-1 h-1 rounded-full bg-[hsl(var(--accent))]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-[10px] text-muted-foreground leading-relaxed italic border-t border-white/5 pt-3">
                Foundation reflects UK executive education standards, remaining directly applicable to emerging-market supply chains.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Flagship Content & Structure */}
      <section id="programmes" className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black text-foreground uppercase tracking-tight">Flagship Programme Content & Structure</h2>
            <p className="text-muted-foreground font-medium mt-2">GC-PSSO 6-Week Detailed Curriculum</p>
          </div>
        </div>

        <Card className="bg-white/5 border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          <CardHeader className="p-8 bg-white/5 border-b border-white/10">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="space-y-4 flex-1">
                <CardTitle className="text-2xl font-bold text-foreground leading-tight">
                  Global Certificate in Practical Supply Chain & Sustainable Operations (GC-PSSO)
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed max-w-3xl">
                  A professional development programme designed to build practical, workplace-ready capability through weekly modules, applied assignments, and an integrated capstone project.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <Badge className="bg-[hsl(var(--accent))] text-[hsl(var(--primary-foreground))] font-black px-4 py-2 text-sm justify-center">6–8 WEEKS</Badge>
                <div className="text-right">
                  <p className="text-[10px] font-black uppercase text-muted-foreground">Capstone Output</p>
                  <p className="text-sm font-bold text-foreground">2,500–3,000 Word Report</p>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8 space-y-8">
                <div className="space-y-4">
                  <h4 className="text-sm font-black uppercase tracking-widest text-foreground flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[hsl(var(--accent))]" /> 6-Week Curriculum
                  </h4>
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {modules.map((module) => (
                      <AccordionItem key={module.id} value={module.id} className="border border-white/10 rounded-2xl bg-white/5 px-6 overflow-hidden">
                        <AccordionTrigger className="hover:no-underline py-5 group">
                          <span className="text-left font-bold text-foreground group-hover:text-[hsl(var(--accent))] transition-colors">
                            {module.title}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-6 space-y-6">
                          <div className="space-y-2">
                            <p className="text-xs font-black uppercase text-muted-foreground tracking-widest">Focus</p>
                            <p className="text-sm text-foreground leading-relaxed">{module.focus}</p>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                              <p className="text-xs font-black uppercase text-muted-foreground tracking-widest">Key Topics</p>
                              <ul className="space-y-2">
                                {module.topics.map((topic, i) => (
                                  <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                                    <div className="w-1 h-1 rounded-full bg-[hsl(var(--accent))] mt-1.5 shrink-0" />
                                    {topic}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="space-y-4">
                              <div className="p-4 bg-[hsl(var(--accent))]/5 border border-[hsl(var(--accent))]/20 rounded-xl space-y-2">
                                <p className="text-[10px] font-black uppercase text-[hsl(var(--accent))] tracking-widest">Capstone Activity</p>
                                <p className="text-xs text-foreground font-medium leading-relaxed">{module.capstone}</p>
                              </div>
                              <div className="space-y-1">
                                <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Core Reading References</p>
                                <p className="text-[10px] text-muted-foreground italic leading-tight">{module.references}</p>
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                {/* Weeks 7-8 Extension */}
                <div className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-4">
                  <div className="flex items-center gap-3">
                    <Presentation className="w-5 h-5 text-[hsl(var(--accent))]" />
                    <h4 className="text-lg font-bold text-foreground">Optional Weeks 7–8: Capstone Extension</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Participants may join an extended enrichment period to present and refine their projects, including peer learning, improvement coaching, and final CPD reflection.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-10">
                <div className="space-y-4">
                  <h4 className="text-sm font-black uppercase tracking-widest text-foreground flex items-center gap-2">
                    <Target className="w-4 h-4 text-[hsl(var(--accent))]" /> Design Philosophy
                  </h4>
                  <div className="space-y-4">
                    <p className="text-xs text-muted-foreground leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10">
                      The programme is structured around five integrated modules, delivered sequentially over 6–8 weeks. Each week combines live teaching, guided reading from established textbooks, and a focused applied assignment.
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed italic bg-[hsl(var(--accent))]/5 p-4 rounded-xl border border-[hsl(var(--accent))]/20">
                      Weekly assignments progressively build one coherent capstone project based on a single organisation and a single operational or supply chain challenge.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-black uppercase tracking-widest text-foreground flex items-center gap-2">
                    <Users className="w-4 h-4 text-[hsl(var(--accent))]" /> Who It's For
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Supply Chain & Logistics Professionals",
                      "NGO & Public Sector Delivery Staff",
                      "Early-Career Professionals & Graduates",
                      "Corporate Teams & Managers"
                    ].map(item => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Delivery Options & Fees Section */}
      <section id="fees" className="space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-3xl font-black text-foreground uppercase tracking-tight">Indicative Launch Fees</h2>
            <p className="text-muted-foreground font-medium mt-2">Flexible formats tailored to your learning style.</p>
          </div>
          <Card className="flex-1 max-w-md p-5 bg-white/5 border border-white/10 rounded-2xl">
            <h4 className="text-xs font-black uppercase tracking-widest text-foreground mb-3 flex items-center gap-2">
              <Info className="w-4 h-4 text-[hsl(var(--accent))]" /> Selection Note
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed font-medium">
              Both options follow the same curriculum. Select the format that matches your availability and learning style.
            </p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Option 1: Live Cohort */}
          <Card className="bg-white/5 border-white/10 rounded-3xl overflow-hidden border-t-4 border-t-[hsl(var(--accent))] flex flex-col">
            <CardHeader className="p-8 pb-4">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <Badge className="bg-[hsl(var(--accent))] text-[hsl(var(--primary-foreground))] font-black px-3 py-1 mb-2">RECOMMENDED</Badge>
                  <CardTitle className="text-2xl font-bold">Option 1: Live Cohort</CardTitle>
                </div>
              </div>
              <div className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-[10px] font-black uppercase text-muted-foreground mb-1 tracking-widest">Who it's for</p>
                <p className="text-sm text-foreground font-medium">Professionals valuing interaction and structured pacing.</p>
              </div>
            </CardHeader>

            <CardContent className="p-8 pt-4 space-y-8 flex-1">
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-widest text-[hsl(var(--accent))] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> What's Included
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                  {[
                    "Live interactive sessions",
                    "Guided weekly reading",
                    "Applied weekly assignments",
                    "Facilitated cohort discussions",
                    "Structured assignment feedback",
                    "CPD learning log guidance"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-[hsl(var(--accent))] mt-1.5 shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-6 p-5 bg-white/5 border border-white/10 rounded-2xl">
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Time Commitment</p>
                  <p className="text-sm font-bold text-foreground">6–8 hours / week</p>
                  <p className="text-[10px] text-muted-foreground">Total: ~45–55 hours</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Fees (GBP)</p>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-foreground">Early Bird: £180</p>
                    <p className="text-sm font-bold text-foreground">Standard: £250</p>
                  </div>
                  <p className="text-[9px] text-muted-foreground mt-2 italic">Fees set by registration window.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Option 2: Self-Paced */}
          <Card className="bg-white/5 border-white/10 rounded-3xl overflow-hidden flex flex-col">
            <CardHeader className="p-8 pb-4">
              <div className="space-y-1">
                <Badge className="bg-white/10 text-foreground font-black px-3 py-1 mb-2">MAX FLEXIBILITY</Badge>
                <CardTitle className="text-2xl font-bold">Option 2: Self-Paced</CardTitle>
              </div>
              <div className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-[10px] font-black uppercase text-muted-foreground mb-1 tracking-widest">Who it's for</p>
                <p className="text-sm text-foreground font-medium">Participants needing maximum flexibility and independent study.</p>
              </div>
            </CardHeader>

            <CardContent className="p-8 pt-4 space-y-8 flex-1">
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-widest text-foreground flex items-center gap-2 opacity-60">
                  <CheckCircle2 className="w-4 h-4" /> What's Included
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                  {[
                    "Recorded lectures access",
                    "Guided self-study & reading",
                    "Independent assignments",
                    "Capstone report guidance",
                    "Certificate of Completion",
                    "Independent learning approach"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-white/30 mt-1.5 shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[10px] text-muted-foreground leading-relaxed italic border-l-2 border-white/10 pl-3 mt-4">
                  Emphasises flexibility. Live interactive sessions not included. Optional coaching offered separately.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 p-5 bg-white/5 border border-white/10 rounded-2xl">
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Time Commitment</p>
                  <p className="text-sm font-bold text-foreground">4–6 hours / week</p>
                  <p className="text-[10px] text-muted-foreground">Total: ~30–40 hours</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Fees (GBP)</p>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-foreground">Standard: £150</p>
                    <p className="text-xs text-muted-foreground">Coaching Add-On (Optional): +£75</p>
                  </div>
                  <p className="text-[9px] text-muted-foreground mt-2 italic">Fees set by registration window.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Corporate Section */}
      <section id="corporate" className="space-y-8">
        <Card className="bg-white/5 border-white/10 rounded-3xl overflow-hidden p-10 border-dashed flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4 text-center md:text-left max-w-xl">
            <h3 className="text-sm font-black uppercase tracking-widest text-[hsl(var(--accent))]">Corporate & Team Training</h3>
            <p className="text-2xl font-bold text-foreground leading-tight">Customised delivery for organisations seeking structured team development.</p>
            <p className="text-sm text-muted-foreground">Bespoke pricing based on cohort size and requirements (typically £900 – £2,500).</p>
          </div>
          <Button className="bg-foreground text-background font-black uppercase text-xs px-10 py-6 hover:brightness-110 shrink-0">
            Request Proposal
          </Button>
        </Card>
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
              desc: "Programme design led by senior UK lecturers with deep industry roots.",
              icon: <Award className="w-5 h-5" />
            },
            {
              title: "Practical Over Theory",
              desc: "Focus on workplace readiness, moving beyond traditional theory alone.",
              icon: <Target className="w-5 h-5" />
            },
            {
              title: "Integrated Capstone",
              desc: "Assessments based on professional standards to ensure real workplace competency.",
              icon: <CheckCircle2 className="w-5 h-5" />
            },
            {
              title: "Global Perspective",
              desc: "Sensitivity to both developed and emerging market contexts.",
              icon: <Users className="w-5 h-5" />
            },
            {
              title: "Flexible Learning",
              desc: "Delivery at your own pace with options to suit various professional needs.",
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

      {/* Footer */}
      <footer className="pt-12 pb-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-start gap-8 text-sm">
        <div className="space-y-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(200,85%,65%)] shadow-lg" />
            <p className="text-foreground font-bold text-lg">GICS</p>
          </div>
          <div className="space-y-1 text-muted-foreground font-medium text-xs leading-relaxed">
            <p>© 2026 Global Supply Chain & Sustainability Academy Ltd. All rights reserved.</p>
            <p>Registered in England and Wales. Company No. 16986058.</p>
            <p>Trading as Global Institute for Supply Chain & Sustainability (GICS).</p>
          </div>
        </div>
        <div className="flex gap-10 font-black uppercase tracking-widest text-[10px] text-muted-foreground pt-2">
          <a href="#" className="hover:text-[hsl(var(--accent))] transition-colors" data-testid="link-privacy">Privacy</a>
          <a href="#" className="hover:text-[hsl(var(--accent))] transition-colors" data-testid="link-terms">Terms</a>
          <a href="mailto:gicsinstituteuk@gmail.com" className="hover:text-[hsl(var(--accent))] transition-colors" data-testid="link-contact">gicsinstituteuk@gmail.com</a>
        </div>
      </footer>
    </div>
  );
}
