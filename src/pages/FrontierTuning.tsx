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
                  A capable agent can still fail at the work an organization needs it to do. Closing that gap means
                  defining quality, diagnosing failures, choosing a change, and proving it helped, a loop that
                  demands fluency in model training. Frontier Tuning set out to open it to the people who know what good
                  work looks like: makers and subject-matter experts.
                </P>

                <Callout>
                  Design challenge: let people improve an agent without first understanding the infrastructure behind
                  improvement.
                </Callout>

                <H2>Focus</H2>
                <P>
                  I worked on the product’s conceptual model, evaluation and feedback experiences, terminology, and
                  end-to-end improvement journey, in close partnership with research, content design, product,
                  science, and engineering. Interactive prototypes were my main instrument: for exploration, for
                  engineering handoff, for Copilot Studio integration, and for extending the journey into GitHub
                  Copilot and Cowork.
                </P>

                <Divider />

                <H2>Start from the expert’s definition of quality</H2>
                <P>
                  In November 2025 I helped shape the first qualitative study of how makers understand tuning: what they
                  think it does, when it’s worth the effort, and what they expect the system to handle. I pushed to
                  recruit domain experts, because judging an answer takes knowledge of the business process, not of AI.
                </P>
                <Callout>
                  Does the experience help an expert express what good work looks like, or ask them to translate their
                  expertise into our technical model?
                </Callout>

                <H2>Feedback has to explain its consequence</H2>
                <P>
                  A thumbs-down says something failed, not what to change. In a small A/B pilot (five participants per
                  condition), showing evaluation criteria beside the output produced actionable feedback from{' '}
                  <strong>4 of 5</strong> participants versus <strong>3 of 5</strong>. The signal was directional, and
                  it came with a cost: fewer thumbs-ups and uncertainty about where feedback went.
                </P>
                <Callout>
                  Visible quality expectations help people judge an answer. The interface also has to say what their
                  feedback will change.
                </Callout>

                <Divider />

                <H2>Make the improvement loop legible</H2>
                <P>
                  By spring, skills, instructions, knowledge, samples, criteria, and tuning had accumulated into a mental
                  model nobody could hold. I synthesized early-access customer feedback into three problems, which
                  reframed a pile of UI issues as a single product problem:
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
                  A clearer label wasn’t enough if makers couldn’t see how an edit, an evaluation result, and an agent’s
                  behavior connect. I designed for observable outcomes: evaluation breakdowns, before-and-after
                  comparison, and explicit completion states.
                </P>
                <FlowList steps={loop} />

                <H2>Generated criteria are proposals</H2>
                <P>
                  AI-generated criteria speed up setup, but they can overwrite a maker’s intent or look more
                  authoritative than they are. After working through constraints with science, I narrowed the direction
                  to first-generation criteria with collapsed detail and vertically stacked alternatives, and set the
                  principle that generated criteria are offered for review and selection, never silently substituted for
                  what a customer wrote.
                </P>
                <Callout>
                  Automation should reduce authoring effort without taking away ownership of the definition of quality.
                </Callout>

                <Divider />

                <H2>Integrate by adapting the model</H2>
                <P>
                  In Copilot Studio, the hard questions were structural: what belongs to an agent versus a reusable
                  tuning environment, where evaluation lives, and what to build on rather than duplicate. In coded
                  explorations, partners favored a guidance-led Build page over a skill-centric one because it set tuning
                  apart from creating another agent. That drove a rethink of navigation and feature placement, not a
                  reskin.
                </P>

                <H2>Terminology is interaction design</H2>
                <P>
                  Terms like “rubric,” “world,” and “environment” shape what makers believe they’re controlling. In July
                  research, none of <strong>11 participants</strong> preferred “rubric”; “evaluation criteria” and
                  “acceptance criteria” tied at three each, and I recommended <strong>evaluation criteria</strong> as the
                  primary label. Because the environment definition may have primed one option, I recommended retesting
                  with a neutral definition before locking a name.
                </P>

                <Divider />

                <H2>From controls to a guided journey</H2>
                <P>
                  Across GitHub Copilot and Cowork explorations I designed skill selection, evaluation setup,
                  before-and-after results, and acceptance of proposed changes. Makers were still diagnosing too much
                  themselves, so the direction begins with the problem, not the mechanism:
                </P>
                <FlowList steps={journey} />
                <P>
                  Journey maps and narrated prototypes made role handoffs explicit: a technical maker configures, a
                  subject-matter expert judges quality, an administrator governs access and cost.
                </P>

                <Divider />

                <H2>Where it stands</H2>
                <P>
                  The work supported implementation and hands-on validation of internal experiences, and the GitHub
                  Copilot and Cowork journey is in active development. The larger shift was in framing: from exposing
                  tuning capabilities to helping people make an informed improvement decision.
                </P>
                <Callout>
                  Trust comes from making three things clear: what good work looks like, what a change will affect, and
                  what evidence shows it helped. It doesn’t come from hiding complexity behind a single “Tune” button.
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
