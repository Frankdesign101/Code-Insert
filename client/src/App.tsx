import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Register from "@/pages/Register";
import CorporateEnquiry from "@/pages/CorporateEnquiry";
import TermsRefunds from "@/pages/TermsRefunds";
import Privacy from "@/pages/Privacy";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/register" component={Register}/>
      <Route path="/corporate-enquiry" component={CorporateEnquiry}/>
      <Route path="/terms-refunds" component={TermsRefunds}/>
      <Route path="/privacy" component={Privacy}/>
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
