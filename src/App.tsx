
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Each case study is its own chunk, so the landing page ships without them.
const GoFetch = lazy(() => import("./pages/GoFetch"));
const Azure = lazy(() => import("./pages/Azure"));
const Ally = lazy(() => import("./pages/Ally"));
const Slim = lazy(() => import("./pages/Slim"));
const OneNote = lazy(() => import("./pages/OneNote"));
const PhoneNumberCart = lazy(() => import("./pages/PhoneNumberCart"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/azure-phone-numbers" element={<PhoneNumberCart />} />
          <Route path="/gofetch" element={<GoFetch />} />
          <Route path="/azure-sample-builder" element={<Azure />} />
          <Route path="/ally" element={<Ally />} />
          <Route path="/slim" element={<Slim />} />
          <Route path="/onenote" element={<OneNote />} />
          {/* Legacy slugs — redirect so previously shared links keep working */}
          <Route path="/phone-number-cart" element={<Navigate to="/azure-phone-numbers" replace />} />
          <Route path="/azure" element={<Navigate to="/azure-sample-builder" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
