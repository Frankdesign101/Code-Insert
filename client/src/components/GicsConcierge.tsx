import { useState } from "react";
import type { ReactNode } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { BriefcaseBusiness, GraduationCap, Home, ListChecks, Mail, MessageCircle, PlaneTakeoff, Presentation, X } from "lucide-react";

type ConciergeContext = "home" | "higher-education" | "student-success" | "corporate-learning" | "executive-masterclasses";

type ConciergeLink = {
  label: string;
  href: string;
  icon: ReactNode;
};

export default function GicsConcierge({ context = "home" }: { context?: ConciergeContext }) {
  const [open, setOpen] = useState(false);

  const generalLinks: ConciergeLink[] = [
    { label: "Apply for GC-PSSO", href: "/register", icon: <GraduationCap className="w-4 h-4" /> },
    { label: "Explore Higher Education Pathways", href: "/higher-education-pathways", icon: <GraduationCap className="w-4 h-4" /> },
    { label: "Start Student Success Enquiry", href: "/student-success#enquiry", icon: <PlaneTakeoff className="w-4 h-4" /> },
    { label: "Start Corporate Enquiry", href: "/corporate-enquiry", icon: <BriefcaseBusiness className="w-4 h-4" /> },
    { label: "Explore Executive Masterclasses", href: "/executive-masterclasses", icon: <Presentation className="w-4 h-4" /> },
    { label: "Contact GICS", href: "mailto:gicsinstituteuk@gmail.com", icon: <Mail className="w-4 h-4" /> }
  ];

  const contextLinks: Record<ConciergeContext, ConciergeLink[]> = {
    home: generalLinks,
    "higher-education": [
      { label: "Compare Support Options", href: "#support-options", icon: <ListChecks className="w-4 h-4" /> },
      { label: "View Programmes We Support", href: "#programmes-supported", icon: <GraduationCap className="w-4 h-4" /> },
      { label: "Go to Enquiry Form", href: "#enquiry", icon: <MessageCircle className="w-4 h-4" /> },
      { label: "Back to GICS Home", href: "/", icon: <Home className="w-4 h-4" /> },
      { label: "Contact GICS", href: "mailto:gicsinstituteuk@gmail.com", icon: <Mail className="w-4 h-4" /> }
    ],
    "student-success": [
      { label: "View Personalised Support", href: "#personalised-support", icon: <ListChecks className="w-4 h-4" /> },
      { label: "Register Bootcamp Interest", href: "#bootcamp", icon: <PlaneTakeoff className="w-4 h-4" /> },
      { label: "Go to Enquiry Form", href: "#enquiry", icon: <MessageCircle className="w-4 h-4" /> },
      { label: "Back to GICS Home", href: "/", icon: <Home className="w-4 h-4" /> },
      { label: "Contact GICS", href: "mailto:gicsinstituteuk@gmail.com", icon: <Mail className="w-4 h-4" /> }
    ],
    "corporate-learning": [
      { label: "View Learning Routes", href: "#learning-routes", icon: <ListChecks className="w-4 h-4" /> },
      { label: "View Training Areas", href: "#training-areas", icon: <BriefcaseBusiness className="w-4 h-4" /> },
      { label: "Organisation Enquiry Form", href: "/corporate-enquiry", icon: <MessageCircle className="w-4 h-4" /> },
      { label: "Back to GICS Home", href: "/", icon: <Home className="w-4 h-4" /> },
      { label: "Contact GICS", href: "mailto:gicsinstituteuk@gmail.com", icon: <Mail className="w-4 h-4" /> }
    ],
    "executive-masterclasses": [
      { label: "View Upcoming Masterclasses", href: "#upcoming-masterclasses", icon: <Presentation className="w-4 h-4" /> },
      { label: "Join Waiting List", href: "#waiting-list", icon: <MessageCircle className="w-4 h-4" /> },
      { label: "Back to GICS Home", href: "/", icon: <Home className="w-4 h-4" /> },
      { label: "Contact GICS", href: "mailto:gicsinstituteuk@gmail.com", icon: <Mail className="w-4 h-4" /> }
    ]
  };

  const links = contextLinks[context];

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-[min(22rem,calc(100vw-2.5rem))] rounded-2xl border border-white/15 bg-[hsl(var(--background))]/95 p-4 shadow-2xl backdrop-blur-xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-black text-foreground">Welcome to GICS</p>
              <p className="mt-1 text-xs font-medium text-muted-foreground">How can we help you today?</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-1 text-muted-foreground transition hover:bg-white/10 hover:text-foreground"
              aria-label="Close GICS help panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="mt-4 space-y-2">
            {links.map((item) => {
              const className = "flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-bold text-foreground transition hover:bg-white/10";
              const content = (
                <>
                  <span className="text-[hsl(var(--accent))]">{item.icon}</span>
                  <span>{item.label}</span>
                </>
              );

              return item.href.startsWith("mailto:") || item.href.includes("#") ? (
                <a key={item.label} href={item.href} className={className} onClick={() => setOpen(false)}>
                  {content}
                </a>
              ) : (
                <Link key={item.label} href={item.href} className={className} onClick={() => setOpen(false)}>
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      )}
      <Button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="h-12 rounded-full bg-[hsl(var(--accent))] px-5 font-black text-[hsl(var(--primary-foreground))] shadow-xl hover:brightness-110"
        aria-expanded={open}
      >
        <MessageCircle className="mr-2 h-4 w-4" />
        Need help?
      </Button>
    </div>
  );
}
