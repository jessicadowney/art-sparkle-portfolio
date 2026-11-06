import React, { useEffect } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import ThreeBackground from '@/components/ThreeBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useSeo } from '@/hooks/useSeo';
import { useLanguage } from '@/i18n/LanguageProvider';


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
  const { t } = useLanguage();
  const frictions = [
    { problem: t("Cognitive friction", "Friction cognitive"), answer: t("What changes what?", "Qu'est-ce qui change quoi ?") },
    { problem: t("An incomplete feedback loop", "Une boucle de rétroaction incomplète"), answer: t("Did the change take effect, and did it help?", "Le changement a-t-il pris effet, et a-t-il aidé ?") },
    { problem: t("Operational friction", "Friction opérationnelle"), answer: t("What happens next, and how much work will it take?", "Que se passe-t-il ensuite, et quel effort cela demandera-t-il ?") },
  ];

  const loop = [t("Define quality", "Définir la qualité"), t("Evaluate", "Évaluer"), t("Make a change", "Apporter un changement"), t("Compare the result", "Comparer le résultat"), t("Decide what to do next", "Décider de la suite")];

  const journey = [
    t("Identify a quality issue", "Identifier un problème de qualité"),
    t("Agree on evaluation criteria", "Convenir des critères d'évaluation"),
    t("Establish a baseline", "Établir une référence"),
    t("Improve the skill", "Améliorer la compétence"),
    t("Validate in real work", "Valider en situation réelle"),
    t("Consider model tuning when justified", "Envisager le réglage du modèle lorsque c'est justifié"),
  ];

  const navigate = useNavigate();
  useSeo({
    title: 'Frontier Tuning — Microsoft Copilot Extensibility',
    description:
      t("Case study: making AI agent improvement understandable, actionable, and continuous — research, prototypes, and a guided improvement journey for makers and subject-matter experts.", "Étude de cas : rendre l'amélioration des agents IA compréhensible, concrète et continue — recherche, prototypes et parcours d'amélioration guidé pour les créateurs et les experts métier."),
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
              {t("Back to Portfolio", "Retour au portfolio")}
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
                  {t("Making AI agent improvement understandable, actionable, and continuous", "Rendre l'amélioration des agents IA compréhensible, concrète et continue")}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">{t("Role", "Rôle")}</h3>
                  <p className="text-foreground/70">{t("Senior Product Designer", "Designer produit senior")}</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">{t("Company", "Entreprise")}</h3>
                  <p className="text-foreground/70">Microsoft - Copilot Extensibility</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 text-primary">{t("Timeline", "Calendrier")}</h3>
                  <p className="text-foreground/70">{t("November 2025 – present", "novembre 2025 – aujourd'hui")}</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <P>
                  {t("A capable agent can still fail at the work an organization needs it to do. Closing that gap means defining quality, diagnosing failures, choosing a change, and proving it helped, a loop that demands fluency in model training. Frontier Tuning set out to open it to the people who know what good work looks like: makers and subject-matter experts.", "Un agent performant peut malgré tout échouer dans le travail qu'une organisation attend de lui. Combler cet écart suppose de définir la qualité, de diagnostiquer les échecs, de choisir un changement et de prouver qu'il a aidé — une boucle qui exige de maîtriser l'entraînement des modèles. Frontier Tuning visait à l'ouvrir à celles et ceux qui savent à quoi ressemble un bon travail : les créateurs et les experts métier.")}
                </P>

                <Callout>
                  {t("Design challenge: let people improve an agent without first understanding the infrastructure behind improvement.", "Défi de design : permettre aux gens d'améliorer un agent sans d'abord comprendre l'infrastructure qui rend l'amélioration possible.")}
                </Callout>

                <H2>{t("Focus", "Axes de travail")}</H2>
                <P>
                  {t("I worked on the product’s conceptual model, evaluation and feedback experiences, terminology, and end-to-end improvement journey, in close partnership with research, content design, product, science, and engineering. Interactive prototypes were my main instrument, for exploration and for engineering handoff.", "J'ai travaillé sur le modèle conceptuel du produit, les expériences d'évaluation et de retour, la terminologie et le parcours d'amélioration de bout en bout, en étroite collaboration avec la recherche, le content design, le produit, la science des données et l'ingénierie. Les prototypes interactifs ont été mon principal outil, pour l'exploration comme pour la transmission à l'ingénierie.")}
                </P>

                <Divider />

                <H2>{t("Start from the expert’s definition of quality", "Partir de la définition de la qualité par l'expert")}</H2>
                <P>
                  {t("In November 2025 I helped shape the first qualitative study of how makers understand tuning: what they think it does, when it’s worth the effort, and what they expect the system to handle. I pushed to recruit domain experts, because judging an answer takes knowledge of the business process, not of AI.", "En novembre 2025, j'ai contribué à façonner la première étude qualitative sur la façon dont les créateurs comprennent le réglage (tuning) : ce qu'ils pensent qu'il fait, quand il vaut l'effort et ce qu'ils attendent du système. J'ai insisté pour recruter des experts du domaine, car juger une réponse demande de connaître le processus métier, pas l'IA.")}
                </P>
                <Callout>
                  {t("Does the experience help an expert express what good work looks like, or ask them to translate their expertise into our technical model?", "L'expérience aide-t-elle un expert à exprimer à quoi ressemble un bon travail, ou lui demande-t-elle de traduire son expertise dans notre modèle technique ?")}
                </Callout>

                <H2>{t("Feedback has to explain its consequence", "Le retour doit expliquer sa conséquence")}</H2>
                <P>
                  {t("A thumbs-down says something failed, not what to change. In a small A/B pilot (five participants per condition), showing evaluation criteria beside the output produced actionable feedback from", "Un pouce vers le bas indique que quelque chose a échoué, pas ce qu'il faut changer. Dans un petit pilote A/B (cinq participants par condition), afficher les critères d'évaluation à côté de la réponse a produit des retours exploitables chez")}{' '}
                  <strong>{t("4 of 5", "4 sur 5")}</strong> {t("participants versus", "participants contre")} <strong>{t("3 of 5", "3 sur 5")}</strong>{t(". The signal was directional, and it came with a cost: fewer thumbs-ups and uncertainty about where feedback went.", ". Le signal était indicatif, et il avait un coût : moins de pouces vers le haut et une incertitude quant à la destination des retours.")}
                </P>
                <Callout>
                  {t("Visible quality expectations help people judge an answer. The interface also has to say what their feedback will change.", "Des attentes de qualité visibles aident à juger une réponse. L'interface doit aussi dire ce que le retour de l'utilisateur va changer.")}
                </Callout>

                <Divider />

                <H2>{t("Make the improvement loop legible", "Rendre la boucle d'amélioration lisible")}</H2>
                <P>
                  {t("By spring, skills, instructions, knowledge, samples, criteria, and tuning had accumulated into a mental model nobody could hold. I synthesized early-access customer feedback into three problems, which reframed a pile of UI issues as a single product problem:", "Au printemps, les compétences, instructions, connaissances, exemples, critères et réglages s'étaient accumulés en un modèle mental que personne ne pouvait embrasser. J'ai synthétisé les retours des clients en accès anticipé en trois problèmes, qui ont recadré un amas de problèmes d'interface en un seul problème de produit :")}
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
                  {t("A clearer label wasn’t enough if makers couldn’t see how an edit, an evaluation result, and an agent’s behavior connect. I designed for observable outcomes: evaluation breakdowns, before-and-after comparison, and explicit completion states.", "Un libellé plus clair ne suffisait pas si les créateurs ne voyaient pas comment une modification, un résultat d'évaluation et le comportement d'un agent sont liés. J'ai conçu pour des résultats observables : détail des évaluations, comparaison avant/après et états d'achèvement explicites.")}
                </P>
                <FlowList steps={loop} />

                <H2>{t("Generated criteria are proposals", "Les critères générés sont des propositions")}</H2>
                <P>
                  {t("AI-generated criteria speed up setup, but they can overwrite a maker’s intent or look more authoritative than they are. After working through constraints with science, I narrowed the direction to first-generation criteria with collapsed detail and vertically stacked alternatives, and set the principle that generated criteria are offered for review and selection, never silently substituted for what a customer wrote.", "Les critères générés par l'IA accélèrent la configuration, mais ils peuvent écraser l'intention du créateur ou paraître plus faisant autorité qu'ils ne le sont. Après avoir démêlé les contraintes avec l'équipe science, j'ai resserré la direction autour de critères de première génération avec détails repliés et alternatives empilées verticalement, et posé le principe que les critères générés sont proposés pour examen et sélection, sans jamais se substituer en silence à ce que le client a écrit.")}
                </P>
                <Callout>
                  {t("Automation should reduce authoring effort without taking away ownership of the definition of quality.", "L'automatisation doit réduire l'effort de rédaction sans retirer la maîtrise de la définition de la qualité.")}
                </Callout>

                <Divider />

                <H2>{t("Terminology is interaction design", "La terminologie fait partie du design d'interaction")}</H2>
                <P>
                  {t("Terms like “rubric,” “world,” and “environment” shape what makers believe they’re controlling. In July research, none of", "Des termes comme « rubrique », « monde » et « environnement » façonnent ce que les créateurs croient contrôler. Lors de la recherche de juillet, aucun des")} <strong>11 participants</strong> {t("preferred “rubric”; “evaluation criteria” and “acceptance criteria” tied at three each, and I recommended", "ne préférait « rubrique » ; « critères d'évaluation » et « critères d'acceptation » étaient à égalité avec trois voix chacun, et j'ai recommandé")} <strong>{t("evaluation criteria", "critères d'évaluation")}</strong> {t("as the primary label. Because the environment definition may have primed one option, I recommended retesting with a neutral definition before locking a name.", "comme libellé principal. Comme la définition de l'environnement a pu favoriser une option, j'ai recommandé de refaire le test avec une définition neutre avant de figer un nom.")}
                </P>

                <Divider />

                <H2>{t("From controls to a guided journey", "Des commandes à un parcours guidé")}</H2>
                <P>
                  {t("In later explorations I designed skill selection, evaluation setup, before-and-after results, and acceptance of proposed changes. Makers were still diagnosing too much themselves, so the direction begins with the problem, not the mechanism:", "Dans les explorations suivantes, j'ai conçu la sélection des compétences, la configuration de l'évaluation, les résultats avant/après et l'acceptation des changements proposés. Les créateurs diagnostiquaient encore trop de choses eux-mêmes ; la direction part donc du problème, pas du mécanisme :")}
                </P>
                <FlowList steps={journey} />
                <P>
                  {t("Journey maps and narrated prototypes made role handoffs explicit: a technical maker configures, a subject-matter expert judges quality, an administrator governs access and cost.", "Des parcours cartographiés et des prototypes commentés ont rendu explicites les passages de relais entre les rôles : un créateur technique configure, un expert métier juge la qualité, un administrateur gouverne l'accès et les coûts.")}
                </P>

                <Divider />

                <H2>{t("Where it stands", "Où en est le projet")}</H2>
                <P>
                  {t("The work supported implementation and hands-on validation of internal experiences, and the broader improvement journey is in active development. The larger shift was in framing: from exposing tuning capabilities to helping people make an informed improvement decision.", "Ce travail a soutenu l'implémentation et la validation concrète d'expériences internes, et le parcours d'amélioration plus large est en cours de développement. Le changement le plus important a été de cadrage : passer de l'exposition des capacités de réglage à l'aide à la prise d'une décision d'amélioration éclairée.")}
                </P>
                <Callout>
                  {t("Trust comes from making three things clear: what good work looks like, what a change will affect, and what evidence shows it helped. It doesn’t come from hiding complexity behind a single “Tune” button.", "La confiance vient de trois choses claires : à quoi ressemble un bon travail, ce qu'un changement va affecter et quelles preuves montrent qu'il a aidé. Elle ne vient pas du fait de cacher la complexité derrière un unique bouton « Régler ».")}
                </Callout>

                <div className="flex flex-wrap gap-3 mt-8">
                  {[t("Product Design", "Design produit"), t("UX Research", "Recherche UX"), t("AI Agents", "Agents IA"), t("Prototyping", "Prototypage"), t("Interaction Design", "Design d'interaction")].map((tag) => (
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
