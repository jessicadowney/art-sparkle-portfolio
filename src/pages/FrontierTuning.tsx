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
                  An AI agent can produce a convincing answer and still fail at the work an organization needs it to
                  do. Improving it requires more than a better prompt: someone needs to define quality, identify
                  failures, choose what to change, and determine whether the change helped.
                </P>
                <P>
                  My work on Frontier Tuning focused on making that process accessible to makers and subject-matter
                  experts, not just people who understand model training. Across research, interaction design, coded
                  prototypes, and cross-product collaboration, I helped evolve the experience from a technically dense
                  tuning environment toward a guided agent-improvement journey.
                </P>

                <Callout>
                  The central design challenge: help people improve an agent without first requiring them to understand
                  the infrastructure behind improvement.
                </Callout>

                <Divider />

                <H2>My Role</H2>
                <P>
                  I contributed to the product’s conceptual model, evaluation and feedback experiences, terminology,
                  onboarding, and end-to-end improvement journey. I created interactive prototypes for exploration,
                  engineering handoff, executive storytelling, and integration with Microsoft Copilot Studio, then
                  explored how the experience could extend into GitHub Copilot and Cowork.
                </P>
                <P>
                  The work was multidisciplinary. I partnered with research, content design, product management,
                  science, engineering, and designers across adjacent experiences. My contribution was connecting those
                  perspectives into workflows people could understand and act on, not designing the underlying tuning
                  algorithms or independently owning every part of the product.
                </P>

                <Divider />

                <H2>Starting with the maker, not the technology</H2>
                <P>
                  In November 2025, the first questions were foundational: What would makers think tuning did? When
                  would they consider it worth the effort? What would they expect to do themselves, and what would they
                  expect the system to handle?
                </P>
                <P>
                  I helped shape a qualitative study around those questions, including a proposal-generation scenario
                  grounded in an organization’s established workflow. I advocated recruiting people with domain
                  expertise because recognizing a good answer often requires understanding the business process, not
                  understanding AI.
                </P>
                <P>
                  Working with research partners, I also revised recruitment assumptions and sharpened the distinction
                  between comprehension, perceived value, and usability. The goal was not simply to find out whether
                  participants could complete a flow. It was to understand whether the flow represented a meaningful
                  activity to them.
                </P>
                <P>That established a question that stayed relevant throughout the project:</P>
                <Callout>
                  Does the experience help an expert express what good work looks like, or does it ask them to
                  translate their expertise into our technical model?
                </Callout>

                <Divider />

                <H2>Making feedback more useful without making it harder</H2>
                <P>
                  One early design problem was the gap between lightweight feedback and actionable improvement. A
                  thumbs-up or thumbs-down is easy to provide, but it does not necessarily explain what an agent should
                  do differently.
                </P>
                <P>
                  I explored whether showing evaluation criteria alongside an output could help people give more
                  specific feedback. I also advocated collecting written feedback after positive ratings, not just
                  negative ones: knowing what worked can be valuable improvement input.
                </P>
                <P>
                  A small A/B pilot compared the existing feedback popover with a version that exposed evaluation
                  criteria. With five participants in each condition, the criteria-visible version produced actionable
                  feedback from <strong>4 of 5 participants</strong>, compared with <strong>3 of 5</strong> in the
                  existing design.
                </P>
                <P>
                  The result was encouraging, but not conclusive. The criteria-visible condition also had lower
                  thumbs-up rates and more ambiguity about where feedback went. These were directional findings from a
                  ten-person pilot, not evidence of production impact.
                </P>
                <Callout>
                  Making quality expectations visible can help people judge an answer, but the interface must also
                  explain what their feedback will change.
                </Callout>

                <Divider />

                <H2>Turning customer friction into a clearer improvement loop</H2>
                <P>
                  By spring, the experience involved skills, instructions, knowledge, samples, evaluation criteria, and
                  model tuning. Each concept served a technical purpose, but together they created a difficult mental
                  model.
                </P>
                <P>
                  In April, I synthesized feedback from the broader early-access customer program into three connected
                  UX problems:
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
                  This synthesis helped connect individual UI issues to the larger product problem. A clearer label
                  would not be enough if makers still could not see the relationship between an edit, an evaluation
                  result, and an agent’s behavior.
                </P>
                <P>
                  My design work therefore emphasized observable outcomes: evaluation breakdowns, before-and-after
                  output comparison, clearer completion states, and explanations of how feedback relates to skills and
                  future improvement. The aim was to make the loop legible:
                </P>
                <FlowList steps={loop} />

                <Divider />

                <H2>Treating generated criteria as proposals, not authority</H2>
                <P>
                  AI-generated evaluation criteria introduced another trust problem. They could accelerate setup, but
                  they could also overwrite the maker’s intent, or appear more authoritative than they deserved.
                </P>
                <P>
                  In May, I explored conversational criteria generation and comparison between alternative sets.
                  Feedback from a science partner exposed two constraints: the improvement mechanics were still
                  evolving, and side-by-side comparison would become unwieldy for long sets.
                </P>
                <P>
                  I revised the direction to focus on first-generation criteria, collapse detailed checks, and stack
                  alternatives vertically rather than forcing a dense comparison. More importantly, I advocated
                  presenting generated criteria for review and selection rather than silently replacing what a customer
                  had authored.
                </P>
                <Callout>
                  Automation should reduce authoring effort without taking away ownership of the definition of quality.
                </Callout>

                <Divider />

                <H2>Designing integration, not transplanting screens</H2>
                <P>
                  As Frontier Tuning moved toward Copilot Studio, the challenge changed. The experience needed to fit a
                  product where makers already had ways to build agents, manage knowledge and tools, evaluate behavior,
                  and monitor performance.
                </P>
                <P>
                  I created integration concepts in May and developed coded explorations inside the Copilot Studio
                  prototype environment in June. The work surfaced questions that a standalone tuning UI could avoid:
                  What belongs to an agent versus a reusable tuning environment? Where should evaluation happen? Which
                  existing capabilities should tuning build on rather than duplicate?
                </P>
                <P>
                  One exploration compared a skill-centric Build page with a guidance-led version that explained the
                  environment and recommended next steps. Partner feedback favored the guidance-led direction because it
                  better distinguished tuning from creating another agent. That prompted a broader reconsideration of
                  navigation and feature placement, not just a visual reskin.
                </P>
                <Callout>
                  Integration meant adapting the workflow and object model, not inserting the same screens into a
                  different shell.
                </Callout>

                <Divider />

                <H2>Treating terminology as interaction design</H2>
                <P>
                  Naming was not a final layer of polish. Terms such as “rubric,” “world,” and “environment” shaped
                  what makers believed they were creating and controlling.
                </P>
                <P>
                  My July terminology research provided concrete input. Among the <strong>11 completed
                  participants</strong>, none selected “rubric” as their preferred term. “Evaluation criteria” and
                  “acceptance criteria” tied at three selections each. The recommendation favored{' '}
                  <strong>evaluation criteria</strong> as the primary UI label.
                </P>
                <P>
                  The study also revealed a methodological limitation: the environment definition included the phrase
                  “reinforcement learning environment,” potentially priming participants to choose it. Rather than
                  declaring a naming winner, the report recommended retesting with a neutral definition. This work
                  reinforced the importance of distinguishing technical precision from maker comprehension, and of
                  recognizing when the evidence was not strong enough to settle a decision.
                </P>

                <Divider />

                <H2>From tuning controls to a guided improvement journey</H2>
                <P>
                  By September and October, my work increasingly focused on the complete journey across evaluation,
                  skill improvement, model tuning, and real-work validation.
                </P>
                <P>
                  In GitHub Copilot and Cowork explorations, I designed and iterated skill selection, evaluation setup,
                  before-and-after results, and acceptance of proposed changes. A recurring concern was that makers were
                  still being asked to diagnose too much themselves. The emerging direction started with the problem
                  rather than the tuning mechanism:
                </P>
                <FlowList steps={journey} />
                <P>
                  This also made human handoffs more important. A technical maker might configure the environment, but a
                  subject-matter expert may be better qualified to judge sample quality or validate the result. An
                  administrator may control access and cost without participating in either activity.
                </P>
                <P>
                  My journey maps and narrated prototypes made those responsibilities and gaps visible: readiness
                  checks, expert review, long-running operations, notifications, pilot feedback, and the transition from
                  skill improvement to more involved model tuning. These remained active design questions rather than a
                  fully settled, shipped journey.
                </P>

                <Divider />

                <H2>Using working prototypes to resolve ambiguity</H2>
                <P>
                  Throughout the project, I used coded prototypes alongside research, journey maps, and written
                  specifications. They made abstract questions tangible: partners could experience the navigation,
                  inspect a comparison, or challenge a transition instead of interpreting a static screen.
                </P>
                <P>
                  I also distinguished exploratory builds from constrained engineering handoffs. In April, I directed
                  engineering to a dedicated handoff repository and deployment rather than the broader collection of
                  future concepts. The prototype and supporting documentation became a shared reference for behavior,
                  not just appearance.
                </P>

                <Divider />

                <H2>Outcomes and reflection</H2>
                <P>
                  By October 2026, my contributions included research-backed terminology recommendations, evaluation and
                  feedback interaction designs, working prototypes, engineering handoff artifacts, Copilot Studio
                  integration explorations, and an end-to-end improvement journey spanning multiple roles and surfaces.
                </P>
                <P>
                  The work supported implementation and hands-on validation of internal experiences. The broader GitHub
                  Copilot and Cowork journey remained under active development; the available evidence does not
                  establish a single end-to-end launch or attributable production impact metrics.
                </P>
                <P>
                  The most important shift was in the design framing: from exposing tuning capabilities to helping
                  people make an informed improvement decision. An effective agent-improvement experience needs to make
                  three things clear: what good work looks like, what a proposed change will affect, and what evidence
                  shows it helped.
                </P>
                <Callout>
                  The interface earns trust by making those relationships understandable, not by hiding the complexity
                  behind a single “Tune” button.
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
