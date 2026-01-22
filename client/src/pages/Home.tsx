import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Target, Users, BookOpen, Award, Building2, Timer, ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  const modules = [
    {
      id: "module-1",
      title: "Module 1: Supply Chain Foundations & Systems Thinking",
      focus: "Understanding the supply chain as an end-to-end system and clearly defining an operational or supply chain problem.",
      topics: [
        "End-to-end supply chain structure (plan–source–make–deliver–return)",
        "Supply chain objectives and trade-offs (cost, service, resilience, sustainability)",
        "Systems thinking in supply chains"
      ],
      capstone: "Selection of context and definition of a clear challenge (Forms Section 1 of report).",
      references: "Chopra & Meindl (Ch 1-3), Martin Christopher (Ch 1-3)"
    },
    {
      id: "module-2",
      title: "Module 2: Operations Excellence & Process Improvement",
      focus: "Analysing operational processes to identify inefficiencies and improvement opportunities.",
      topics: [
        "Process mapping and flow analysis",
        "Bottlenecks and waste",
        "Lean principles and continuous improvement",
        "Root cause analysis"
      ],
      capstone: "Mapping one core process and identifying root causes (Forms Section 2 of report).",
      references: "Slack & Brandon-Jones (Ch 1-4, 15), Reid & Sanders (Ch 4-6, 16)"
    },
    {
      id: "module-3",
      title: "Module 3: Performance Measurement, KPIs & Control",
      focus: "Using performance metrics and data to support operational and supply chain decisions.",
      topics: [
        "Designing effective KPIs",
        "Planning and control systems",
        "Inventory and service-level measures",
        "Interpreting performance data"
      ],
      capstone: "Selection and justification of 3–5 KPIs (Forms Section 3 of report).",
      references: "Slack & Brandon-Jones (Ch 10-13), Chopra & Meindl (Ch 4-6)"
    },
    {
      id: "module-4",
      title: "Module 4: Sustainable Supply Chains & ESG in Operations",
      focus: "Embedding sustainability into operational and supply chain decision-making.",
      topics: [
        "Environmental and social impacts",
        "Sustainable sourcing and supplier management",
        "Waste reduction, efficiency, and emissions",
        "Balancing sustainability with cost/service"
      ],
      capstone: "Identification of risks and proposal of improvements (Forms Section 4 of report).",
      references: "Chopra & Meindl (Ch 10), Cambridge Institute for Sustainability Leadership (CISL) Frameworks"
    },
    {
      id: "module-5",
      title: "Module 5: Integration, Leadership & Professional Practice",
      focus: "Synthesising analysis into actionable recommendations and communicating professionally.",
      topics: [
        "Prioritisation and trade-off management",
        "High-level implementation planning",
        "Professional reporting and executive communication"
      ],
      capstone: "Final recommendations and executive summary (Forms Section 5 of report).",
      references: "Slack & Brandon-Jones (Ch 1, 2, 18)"
    }
  ];

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
      overview: "The Global Certificate in Practical Supply Chain & Sustainable Operations (GC-PSSO) is a professional development programme designed to build practical, workplace-ready capability in supply chain management, operations excellence, and sustainability.",
      whoItIsFor: [
        "Working professionals in supply chain, logistics, procurement, and operations",
        "NGO and public-sector staff involved in delivery",
        "Early-career professionals and graduates",
        "Corporate teams requiring structured development"
      ],
      learningOutcomes: [
        "Analyse end-to-end supply chain processes",
        "Apply Lean principles to practical scenarios",
        "Use data and KPIs for decision-making",
        "Integrate sustainability/ESG considerations",
        "Communicate operational insights professionally"
      ],
      structureOverview: "Structured around five integrated modules delivered over 6–8 weeks. Each week combines live teaching, guided reading, and a focused applied assignment.",
      finalOutput: "2,500–3,000 words integrated professional report."
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
                { label: "Duration", value: "6–8 weeks • Live and/or recorded sessions" },
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

      {/* Flagship Content & Structure */}
      <section id="programmes" className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black text-foreground uppercase tracking-tight">Programme Content & Structure</h2>
            <p className="text-muted-foreground font-medium mt-2">GC-PSSO Detailed Curriculum</p>
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
                  {progs[0].overview} Delivered through live sessions, the programme combines expert-led teaching, applied assignments, and a capstone project.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <Badge className="bg-[hsl(var(--accent))] text-[hsl(var(--primary-foreground))] font-black px-4 py-2 text-sm justify-center">CPD-ACCREDITED*</Badge>
                <div className="text-right">
                  <p className="text-[10px] font-black uppercase text-muted-foreground">Final Capstone Output</p>
                  <p className="text-sm font-bold text-foreground">{progs[0].finalOutput}</p>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8 space-y-8">
                <div className="space-y-4">
                  <h4 className="text-sm font-black uppercase tracking-widest text-foreground flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[hsl(var(--accent))]" /> Curriculum Modules
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
                                <p className="text-[10px] font-black uppercase text-[hsl(var(--accent))] tracking-widest">Capstone Integration</p>
                                <p className="text-xs text-foreground font-medium leading-relaxed">{module.capstone}</p>
                              </div>
                              <div className="space-y-1">
                                <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Key Textbook References</p>
                                <p className="text-[10px] text-muted-foreground italic leading-tight">{module.references}</p>
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-10">
                <div className="space-y-4">
                  <h4 className="text-sm font-black uppercase tracking-widest text-foreground flex items-center gap-2">
                    <Target className="w-4 h-4 text-[hsl(var(--accent))]" /> Design Philosophy
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10 italic">
                    Weekly assignments progressively build one coherent capstone project based on a single organisation and operational challenge.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-black uppercase tracking-widest text-foreground flex items-center gap-2">
                    <Users className="w-4 h-4 text-[hsl(var(--accent))]" /> Who It's For
                  </h4>
                  <ul className="space-y-3">
                    {progs[0].whoItIsFor.map(item => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-black uppercase tracking-widest text-foreground flex items-center gap-2">
                    <Award className="w-4 h-4 text-[hsl(var(--accent))]" /> Assessment Approach
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Competency-based and workplace-focused. Final project demonstrates practical understanding, analytical thinking, and professional judgement.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Time Commitment Section */}
      <section id="commitment" className="space-y-8">
        <div>
          <h2 className="text-3xl font-black text-foreground uppercase tracking-tight">Time Commitment</h2>
          <p className="text-muted-foreground font-medium mt-2">Flexible learning designed for working professionals.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Live Cohort */}
          <Card className="bg-white/5 border-white/10 rounded-3xl overflow-hidden border-l-4 border-l-[hsl(var(--accent))]">
            <CardHeader className="p-8 bg-white/5">
              <div className="flex items-center gap-3 text-[hsl(var(--accent))] mb-2">
                <Timer className="w-5 h-5" />
                <span className="text-xs font-black uppercase tracking-widest">Recommended</span>
              </div>
              <CardTitle className="text-2xl font-bold">Live Cohort Option</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="flex gap-8">
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Weekly</p>
                  <p className="text-xl font-black text-foreground">6–8 Hours</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Total</p>
                  <p className="text-xl font-black text-foreground">45–55 Hours</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Live interactive online sessions",
                  "Guided reading from core textbooks",
                  "Applied weekly assignments",
                  "Reflection and CPD learning log"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground italic pt-4 border-t border-white/5">
                Session recordings are provided if you are unable to attend in real time.
              </p>
            </CardContent>
          </Card>

          {/* Self-Paced */}
          <Card className="bg-white/5 border-white/10 rounded-3xl overflow-hidden">
            <CardHeader className="p-8 bg-white/5">
              <div className="flex items-center gap-3 text-muted-foreground mb-2">
                <BookOpen className="w-5 h-5" />
                <span className="text-xs font-black uppercase tracking-widest">Independent</span>
              </div>
              <CardTitle className="text-2xl font-bold">Self-Paced Option</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="flex gap-8">
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Weekly</p>
                  <p className="text-xl font-black text-foreground">4–6 Hours</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Total</p>
                  <p className="text-xl font-black text-foreground">30–40 Hours</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Access to recorded lectures",
                  "Guided self-study and reading",
                  "Applied assignments completed independently",
                  "Optional group coaching sessions"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-muted-foreground/50 shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground italic pt-4 border-t border-white/5">
                Offers greater flexibility with less live interaction than the cohort.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Selection Guide */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[hsl(var(--accent))]/5 border border-[hsl(var(--accent))]/20 rounded-2xl space-y-3">
            <h4 className="font-bold text-foreground flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-[hsl(var(--accent))]" /> Choose Live Cohort if:
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">You value interaction, discussion, and structured pacing to keep you on track.</p>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-3">
            <h4 className="font-bold text-foreground flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-muted-foreground" /> Choose Self-Paced if:
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">You need maximum flexibility and prefer independent study at your own speed.</p>
          </div>
        </div>

        <p className="text-xs text-muted-foreground text-center">
          <span className="font-black text-foreground">Important Note:</span> Timetable and learning hours are indicative and may vary slightly by cohort.
        </p>
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-3xl font-black text-foreground uppercase tracking-tight">Fees (GBP)</h2>
            <p className="text-muted-foreground font-medium mt-2">Transparent pricing for professional development.</p>
          </div>
          <div className="flex-1 max-w-md p-4 bg-white/5 border border-white/10 rounded-2xl">
            <h4 className="text-xs font-black uppercase tracking-widest text-foreground mb-2 flex items-center gap-2">
              <BookOpen className="w-3 h-3 text-[hsl(var(--accent))]" /> How does pricing work?
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed italic">
              Programme fees are set by registration window (early, standard, late). The curriculum, learning outcomes, and certification remain the same for all participants.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
