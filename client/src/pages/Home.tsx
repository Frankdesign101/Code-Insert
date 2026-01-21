import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="max-w-[1120px] mx-auto px-6 py-6 space-y-8">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-4 border-b border-white/10">
        <a className="flex items-center gap-3 no-underline group" href="#" data-testid="link-home">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#23b26d] to-[#3aa0ff] shadow-xl group-hover:scale-105 transition-transform" />
          <div>
            <strong className="block text-sm tracking-tight font-bold">Global Institute for Supply Chain & Sustainability (GICS)</strong>
            <span className="block text-xs text-muted-foreground">Supply Chain • Operations • Sustainability • Analytics</span>
          </div>
        </a>
        <nav className="flex gap-4 flex-wrap">
          {["Programmes", "Fees", "Corporate", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid={`nav-${item.toLowerCase()}`}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <div className="hero-grid">
        <div className="glass-panel space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            UK-quality, practical training in supply chain, operations, and sustainable performance—delivered globally.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            GICS builds real workplace capability through applied learning, clear assessment, and industry-aligned tools—designed and led by a UK Programme Director in Operations Management.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button className="bg-gradient-to-r from-[#23b26d] to-[#3aa0ff] text-[#06101a] font-bold border-none h-11 px-6 rounded-xl hover:translate-y-[-1px] transition-all" data-testid="button-register">
              Register interest for Sept 2026
            </Button>
            <Button variant="outline" className="h-11 px-6 rounded-xl bg-white/5 border-white/10 hover:bg-white/10 hover:translate-y-[-1px] transition-all" data-testid="button-view-programmes">
              View programmes
            </Button>
            <Button variant="outline" className="h-11 px-6 rounded-xl bg-white/5 border-white/10 hover:bg-white/10 hover:translate-y-[-1px] transition-all" data-testid="button-see-fees">
              See fees
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "Live cohort-based learning",
              "Recordings included",
              "Applied capstone projects",
              "Corporate training available",
              "Accreditation: planned / in progress"
            ].map((text) => (
              <Badge key={text} variant="outline" className="px-3 py-1 bg-white/5 border-white/10 rounded-full font-normal text-xs">
                {text}
              </Badge>
            ))}
          </div>

          <p className="text-[12.5px] text-muted-foreground italic">
            *We provide professional training and career readiness support. We do not offer job placement, apprenticeship enrolment, or visa sponsorship.
          </p>
        </div>

        {/* Hero Sidebar */}
        <div className="glass-panel flex flex-col gap-6">
          <section>
            <h3 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3">First cohort</h3>
            <div className="space-y-2">
              {[
                { label: "Start", value: "September 2026" },
                { label: "Flagship", value: "Global Certificate in Practical Supply Chain & Sustainable Operations" },
                { label: "Duration", value: "6–8 weeks • 2 live sessions/week + recordings" },
                { label: "Assessment", value: "assignments + applied capstone project" },
                { label: "Accreditation goal", value: "CPD (planned / in progress)" }
              ].map((item) => (
                <div key={item.label} className="p-3 bg-white/5 border border-white/10 rounded-xl text-xs text-muted-foreground">
                  <b className="text-foreground">{item.label}:</b> {item.value}
                </div>
              ))}
            </div>
          </section>

          <section className="pt-4 border-t border-white/10">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3">Academic lead</h3>
            <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-xs">
              <b className="text-foreground text-sm">Frank Donkor</b><br/>
              <p className="text-muted-foreground mt-1">
                Programme Director, MSc Operations Management (University of Exeter)<br/>
                Supply chain sustainability • Operations management • Supply chain leadership<br/>
                Industry–academic collaboration (pharmaceutical sector) • Mixed-methods research
              </p>
            </div>
          </section>

          <section className="pt-4 border-t border-white/10">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3">Quick fees (GBP)</h3>
            <div className="space-y-2 text-xs">
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex justify-between">
                <span><b className="text-foreground">Flagship:</b> £120–£250</span>
                <span className="text-muted-foreground">Early bird £70–£120</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex justify-between">
                <span><b className="text-foreground">Premium:</b> £300–£450</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex justify-between">
                <span><b className="text-foreground">Self-paced:</b> £49–£99</span>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Programmes */}
      <section id="programmes" className="glass-panel !p-8">
        <h2 className="text-2xl font-bold mb-2">Programmes</h2>
        <p className="text-muted-foreground mb-8">
          Start with the flagship certificate, then specialise with short courses. All programmes are practical, assessed, and tool-based.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white/5 border-white/10 rounded-2xl overflow-hidden">
            <CardHeader>
              <CardTitle className="text-lg">Flagship Certificate</CardTitle>
              <p className="text-sm font-bold text-accent mt-1">Global Certificate in Practical Supply Chain & Sustainable Operations</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[12px] text-muted-foreground">
                <b>Duration:</b> 6–8 weeks • <b>Delivery:</b> live online + recordings
              </p>
              <ul className="text-xs text-muted-foreground space-y-2 list-disc pl-4">
                <li>End-to-end supply chain foundations</li>
                <li>Inventory, warehousing & procurement essentials</li>
                <li>Operations excellence & Lean fundamentals</li>
                <li>Data-driven KPIs (Excel/Power BI style thinking)</li>
                <li>Sustainable supply chains (ESG, waste, efficiency)</li>
                <li>Professional communication & stakeholder reporting</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 rounded-2xl overflow-hidden">
            <CardHeader>
              <CardTitle className="text-lg">Short Course</CardTitle>
              <p className="text-sm font-bold text-accent mt-1">Supply Chain Analytics (Excel/Power BI Fundamentals)</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[12px] text-muted-foreground">
                <b>Duration:</b> 2–3 weeks • <b>Output:</b> KPI dashboard starter pack
              </p>
              <ul className="text-xs text-muted-foreground space-y-2 list-disc pl-4">
                <li>KPIs, dashboards & performance routines</li>
                <li>Forecasting and demand planning basics</li>
                <li>Inventory metrics (service levels, turnover)</li>
                <li>Hands-on practice with real datasets</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 rounded-2xl overflow-hidden">
            <CardHeader>
              <CardTitle className="text-lg">Short Course</CardTitle>
              <p className="text-sm font-bold text-accent mt-1">Lean Operations & Process Improvement</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[12px] text-muted-foreground">
                <b>Duration:</b> 2–3 weeks • <b>Output:</b> mini improvement project
              </p>
              <ul className="text-xs text-muted-foreground space-y-2 list-disc pl-4">
                <li>Process mapping & waste elimination</li>
                <li>Root cause analysis (practical tools)</li>
                <li>Continuous improvement routines</li>
                <li>Mini project with structured feedback</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card className="bg-white/5 border-white/10 rounded-2xl overflow-hidden">
            <CardHeader>
              <CardTitle className="text-lg">Self-Paced Option</CardTitle>
              <p className="text-sm font-bold text-accent mt-1">Recorded Course (Self-Paced) + Certificate of Completion</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="text-xs text-muted-foreground space-y-2 list-disc pl-4">
                <li>Flexible learning (ideal across time zones)</li>
                <li>Templates, readings & short quizzes included</li>
                <li>Optional add-on: monthly group coaching</li>
              </ul>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-sm font-bold">Self-paced fee: £49–£99</p>
                <p className="text-xs text-muted-foreground mt-1">Add-on group coaching: £120–£180</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 rounded-2xl overflow-hidden">
            <CardHeader>
              <CardTitle className="text-lg">Who it's for</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="text-xs text-muted-foreground space-y-2 list-disc pl-4">
                <li>Working professionals in logistics, procurement, operations, and supply chain</li>
                <li>NGO and public-sector staff managing supply chains</li>
                <li>Graduates seeking practical, employable skills</li>
                <li>Corporate teams needing structured capability building</li>
              </ul>
              <p className="text-[12px] text-muted-foreground italic">
                We focus on capability and performance. We do not guarantee jobs or visas.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-8 pb-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-muted-foreground">
        <p>© 2026 Global Institute for Supply Chain & Sustainability (GICS). All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
}
