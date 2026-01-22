import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="max-w-[1160px] mx-auto px-6 py-8 space-y-10">
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
                { label: "Flagship", value: "Practical Supply Chain Certificate" },
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
              <b className="text-foreground text-base block mb-2">Dr. Frank Donkor</b>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Flagship Certificate",
              subtitle: "Practical Supply Chain Operations",
              duration: "6–8 weeks • Live online",
              details: [
                "End-to-end foundations",
                "Inventory & Procurement",
                "Lean fundamentals",
                "Sustainability (ESG)"
              ]
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
          ].map((prog) => (
            <Card key={prog.title} className="bg-white/5 border-white/10 rounded-2xl overflow-hidden hover:border-[hsl(var(--accent))]/50 transition-colors">
              <CardHeader className="bg-white/5">
                <CardTitle className="text-sm font-black uppercase tracking-widest text-muted-foreground">{prog.title}</CardTitle>
                <p className="text-lg font-bold text-foreground mt-2">{prog.subtitle}</p>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <p className="text-xs font-black text-[hsl(var(--accent))] uppercase tracking-wide">{prog.duration}</p>
                <ul className="text-sm text-muted-foreground space-y-3 list-none">
                  {prog.details.map(detail => (
                    <li key={detail} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent))]" />
                      <span className="font-medium">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-10 pb-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        <p className="text-muted-foreground font-medium">© 2026 Global Institute for Supply Chain & Sustainability (GICS).</p>
        <div className="flex gap-8 font-bold text-foreground">
          <a href="#" className="hover:text-[hsl(var(--accent))] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[hsl(var(--accent))] transition-colors">Terms</a>
          <a href="#" className="hover:text-[hsl(var(--accent))] transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
}
