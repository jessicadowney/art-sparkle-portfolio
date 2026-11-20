
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./i18n/LanguageProvider";

// Each case study is its own chunk, so the landing page ships without them.
const FrontierTuning = lazy(() => import("./pages/FrontierTuningGate"));
const GoFetch = lazy(() => import("./pages/GoFetch"));
const Azure = lazy(() => import("./pages/Azure"));
const Ally = lazy(() => import("./pages/Ally"));
const Slim = lazy(() => import("./pages/Slim"));
const OneNote = lazy(() => import("./pages/OneNote"));
const PhoneNumberCart = lazy(() => import("./pages/PhoneNumberCart"));

const App = () => (
  <LanguageProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/frontier-tuning" element={<FrontierTuning />} />
          <Route path="/azure-phone-numbers" element={<PhoneNumberCart />} />
          <Route path="/gofetch" element={<GoFetch />} />
          <Route path="/azure-sample-builder" element={<Azure />} />
          <Route path="/ally" element={<Ally />} />
          <Route path="/slim" element={<Slim />} />
          <Route path="/onenote" element={<OneNote />} />
        </Route>
        {/* Legacy slugs — redirect so previously shared links keep working */}
        <Route path="/phone-number-cart" element={<Navigate to="/azure-phone-numbers" replace />} />
        <Route path="/azure" element={<Navigate to="/azure-sample-builder" replace />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </LanguageProvider>
);

export default App;
