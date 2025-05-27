
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GoFetch from "./pages/GoFetch";
import Azure from "./pages/Azure";
import Ally from "./pages/Ally";
import Slim from "./pages/Slim";
import OneNote from "./pages/OneNote";
import PhoneNumberCart from "./pages/PhoneNumberCart";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/phone-number-cart" element={<PhoneNumberCart />} />
          <Route path="/gofetch" element={<GoFetch />} />
          <Route path="/azure" element={<Azure />} />
          <Route path="/ally" element={<Ally />} />
          <Route path="/slim" element={<Slim />} />
          <Route path="/onenote" element={<OneNote />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
