import React, { useEffect } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import ThreeBackground from '@/components/ThreeBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useSeo } from '@/hooks/useSeo';

const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-semibold mb-6 text-primary">{children}</h2>
);

const P: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">{children}</p>
);

const Callout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-xl font-medium text-foreground border-l-4 border-primary pl-5 my-8 leading-relaxed">
    {children}
  </p>
);

const Divider = () => <hr className="my-12 border-border/50" />;

const frictions = [
  { problem: 'Cognitive friction', answer: 'What changes what?' },
  { problem: 'An incomplete feedback loop', answer: 'Did the change take effect, and did it help?' },
  { problem: 'Operational friction', answer: 'What happens next, and how much work will it take?' },
];

const loop = ['Define quality', 'Evaluate', 'Make a change', 'Compare the result', 'Decide what to do next'];

const journey = [
  'Identify a quality issue',
  'Agree on evaluation criteria',
  'Establish a baseline',
  'Improve the skill',
  'Validate in real work',
  'Consider model tuning when justified',
];

const FlowList: React.FC<{ steps: string[] }> = ({ steps }) => (
  <ol className="flex flex-wrap items-center gap-2 mb-8 list-none p-0">
    {steps.map((step, i) => (
      <li key={step} className="flex items-center gap-2">
        <span className="px-4 py-2 bg-accent/60 rounded-full text-sm font-medium text-foreground/80">{step}</span>
        {i < steps.length - 1 && <span aria-hidden="true" className="text-primary">→</span>}
      </li>
    ))}
  </ol>
);

const FrontierTuning = () => {
  const navigate = useNavigate();
  useSeo({
    title: 'Frontier Tuning — Microsoft Copilot Extensibility',
    description:
      'Case study: making AI agent improvement understandable, actionable, and continuous — research, prototypes, and a guided improvement journey for makers and subject-matter experts.',
    path: '/frontier-tuning',
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="min-h-screen relative">
        <ThreeBackground />
        <Header />
        <main id="main-content" tabIndex={-1} className="pt-24 pb-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="mb-8 text-primary hover:text-primary/80"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>

            <div className="glass-container rounded-lg p-6 md:p-8 mb-8">
              <div className="text-center mb-12">
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  2025–2026
                </div>
                <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
                  Frontier <span className="text-primary">Tuning</span>
                </h1>
                <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                  Making AI agent improvement understandable, actionable, and continuous
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Role</h3>
                  <p className="text-foreground/70">Senior Product Designer</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Company</h3>
                  <p className="text-foreground/70">Microsoft - Copilot Extensibility</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">Timeline</h3>
                  <p className="text-foreground/70">November 2025 – October 2026</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <P>
                  An AI agent can give a convincing answer and still fail at the work an organization needs. Improving
                  it means defining quality, finding failures, choosing a change, and checking that it helped. My work
                  on Frontier Tuning made that process accessible to makers and subject-matter experts, not just people
                  who understand model training.
                </P>

                <Callout>
                  The central design challenge: help people improve an agent without first requiring them to understand
                  the infrastructure behind improvement.
                </Callout>

                <H2>My Role</H2>
                <P>
                  I shaped the product’s conceptual model, evaluation and feedback experiences, terminology, and
                  end-to-end improvement journey, and built interactive prototypes for exploration, engineering
                  handoff, and Copilot Studio integration, then explored extending it into GitHub Copilot and Cowork. I
                  worked with research, content design, product, science, and engineering. I did not design the
                  underlying tuning algorithms or independently own every part of the product.
                </P>

                <Divider />

                <H2>Starting with the maker</H2>
                <P>
                  In November 2025 I helped shape a qualitative study on what makers think tuning does and when it is
                  worth the effort. I advocated recruiting people with domain expertise, because recognizing a good
                  answer takes understanding the business process, not AI.
                </P>
                <Callout>
                  Does the experience help an expert express what good work looks like, or ask them to translate their
                  expertise into our technical model?
                </Callout>

                <H2>Feedback that explains what to change</H2>
                <P>
                  A thumbs-up or thumbs-down doesn’t say what an agent should do differently. In a small A/B pilot (five
                  participants per condition), showing evaluation criteria next to the output produced actionable
                  feedback from <strong>4 of 5</strong> participants, versus <strong>3 of 5</strong> with the existing
                  popover. It was directional, not conclusive: the criteria version also had lower thumbs-up rates and
                  more confusion about where feedback went.
                </P>
                <Callout>
                  Making quality expectations visible helps people judge an answer, but the interface must also explain
                  what their feedback will change.
                </Callout>

                <Divider />

                <H2>Making the improvement loop legible</H2>
                <P>
                  By spring, skills, instructions, knowledge, samples, criteria, and model tuning added up to a
                  difficult mental model. I synthesized early-access customer feedback into three connected problems:
                </P>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {frictions.map((f) => (
                    <div key={f.problem} className="bg-accent/30 rounded-lg p-5">
                      <h3 className="font-semibold text-primary mb-2">{f.problem}</h3>
                      <p className="text-foreground/80">{f.answer}</p>
                    </div>
                  ))}
                </div>
                <P>
                  My designs emphasized observable outcomes (evaluation breakdowns, before-and-after comparisons, clear
                  completion states) to make the loop visible:
                </P>
                <FlowList steps={loop} />

                <H2>Generated criteria are proposals, not authority</H2>
                <P>
                  AI-generated evaluation criteria speed up setup, but can overwrite the maker’s intent or look more
                  authoritative than they deserve. After science partner feedback, I simplified the direction: focus on
                  first-generation criteria, collapse detailed checks, stack alternatives vertically, and present
                  generated criteria for review and selection rather than silently replacing what a customer wrote.
                </P>
                <Callout>
                  Automation should reduce authoring effort without taking away ownership of the definition of quality.
                </Callout>

                <Divider />

                <H2>Integration, not transplanted screens</H2>
                <P>
                  Moving into Copilot Studio raised questions a standalone UI could avoid: what belongs to an agent
                  versus a reusable tuning environment, and which existing capabilities tuning should build on. In coded
                  explorations, partners preferred a guidance-led Build page over a skill-centric one because it
                  distinguished tuning from creating another agent, which prompted a rethink of navigation and feature
                  placement, not a reskin.
                </P>

                <H2>Terminology is interaction design</H2>
                <P>
                  In July terminology research, none of the <strong>11 participants</strong> chose “rubric”;
                  “evaluation criteria” and “acceptance criteria” tied at three each, and I recommended{' '}
                  <strong>evaluation criteria</strong> as the primary UI label. The environment definition may have
                  primed one option, so the report recommended retesting with a neutral definition rather than
                  declaring a winner.
                </P>

                <Divider />

                <H2>From controls to a guided journey</H2>
                <P>
                  In GitHub Copilot and Cowork explorations, I designed skill selection, evaluation setup,
                  before-and-after results, and acceptance of proposed changes. Makers were still being asked to
                  diagnose too much themselves, so the direction started from the problem, not the tuning mechanism:
                </P>
                <FlowList steps={journey} />
                <P>
                  Journey maps and narrated prototypes made the handoffs visible between a technical maker, a
                  subject-matter expert who judges quality, and an administrator who controls access and cost. These
                  remained active design questions, not a settled, shipped journey.
                </P>

                <Divider />

                <H2>Outcomes and reflection</H2>
                <P>
                  My work supported implementation and hands-on validation of internal experiences. The broader GitHub
                  Copilot and Cowork journey is still in development, and the evidence doesn’t establish a single launch
                  or attributable production metrics. The main shift was in framing: from exposing tuning capabilities
                  to helping people make an informed improvement decision.
                </P>
                <Callout>
                  The interface earns trust by making what good work looks like, what a change will affect, and what
                  evidence shows it helped understandable, not by hiding the complexity behind a single “Tune” button.
                </Callout>

                <div className="flex flex-wrap gap-3 mt-8">
                  {["Product Design", "UX Research", "AI Agents", "Prototyping", "Copilot Studio", "Interaction Design"].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default FrontierTuning;
