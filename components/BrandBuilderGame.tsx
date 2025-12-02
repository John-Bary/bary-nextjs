"use client";

import { useMemo, useState } from "react";
import styles from "./BrandBuilderGame.module.css";

type ServiceTag = "digital" | "marketing" | "creative";

type Option = {
  label: string;
  value: string;
  blurb: string;
  serviceTag: ServiceTag;
};

type Step = {
  id: string;
  title: string;
  prompt: string;
  options: Option[];
};

const steps: Step[] = [
  {
    id: "logo",
    title: "Logo Shape",
    prompt: "Choose the silhouette that feels right for your brand.",
    options: [
      {
        value: "badge",
        label: "Badge",
        blurb: "Structured and ready for polished digital rollouts.",
        serviceTag: "digital",
      },
      {
        value: "loop",
        label: "Loop",
        blurb: "Fluid marks that love motion and social feeds.",
        serviceTag: "marketing",
      },
      {
        value: "spark",
        label: "Spark",
        blurb: "Playful angles with creative flair built in.",
        serviceTag: "creative",
      },
    ],
  },
  {
    id: "palette",
    title: "Color Palette",
    prompt: "Pick the palette that matches your audience energy.",
    options: [
      {
        value: "neon",
        label: "Neon Pulse",
        blurb: "Electric gradients that pop on every digital surface.",
        serviceTag: "digital",
      },
      {
        value: "sunrise",
        label: "Sunrise Warm",
        blurb: "Welcoming tones for marketing campaigns that convert.",
        serviceTag: "marketing",
      },
      {
        value: "studio",
        label: "Studio Neutral",
        blurb: "Minimal hues that let creative ideas shine.",
        serviceTag: "creative",
      },
    ],
  },
  {
    id: "slogan",
    title: "Slogan Style",
    prompt: "Select the headline that frames your promise.",
    options: [
      {
        value: "bold",
        label: "Bold & Direct",
        blurb: "Straightforward lines built for digital clarity.",
        serviceTag: "digital",
      },
      {
        value: "story",
        label: "Story-Driven",
        blurb: "Narrative hooks that power marketing journeys.",
        serviceTag: "marketing",
      },
      {
        value: "playful",
        label: "Playfully Clever",
        blurb: "Unexpected twists that spark creative intrigue.",
        serviceTag: "creative",
      },
    ],
  },
  {
    id: "social",
    title: "Social Style",
    prompt: "How do you want to show up across feeds?",
    options: [
      {
        value: "fast",
        label: "Fast & Bite-Sized",
        blurb: "Micro-content optimized for digital agility.",
        serviceTag: "digital",
      },
      {
        value: "campaign",
        label: "Campaign Ready",
        blurb: "Series-based posts that keep marketing momentum.",
        serviceTag: "marketing",
      },
      {
        value: "artful",
        label: "Artful Showcase",
        blurb: "Design-led layouts that spotlight creative craft.",
        serviceTag: "creative",
      },
    ],
  },
];

const tagCopy: Record<ServiceTag, string> = {
  creative: "creative services", 
  digital: "digital services",
  marketing: "marketing services",
};

function buildPersonalitySummary(selections: Record<string, Option>): string {
  const chosenLabels = Object.values(selections).map((item) => item.label);
  const hookSet = new Set<string>();
  Object.values(selections).forEach((item) => hookSet.add(tagCopy[item.serviceTag]));

  const profileLine =
    chosenLabels.length > 0
      ? `You mix ${chosenLabels.join(", ")} with confident intent.`
      : "You have a flexible palette ready to adapt.";

  const hookLine =
    hookSet.size > 0
      ? `Your picks lean into ${Array.from(hookSet).join(", ")}, keeping your momentum steady.`
      : "Keep exploring to uncover your brand angle.";

  return `${profileLine} ${hookLine}`;
}

function calculateScore(selections: Record<string, Option>): number {
  const base = Object.keys(selections).length * 20;
  const serviceBonus = Object.values(selections).reduce((acc, option) => {
    const bonus = option.serviceTag === "creative" ? 7 : option.serviceTag === "marketing" ? 5 : 6;
    return acc + bonus;
  }, 0);
  const varietyBonus = new Set(Object.values(selections).map((item) => item.serviceTag)).size * 8;
  const playfulRandom = Math.floor(Math.random() * 11); // small variability to encourage replays
  return base + serviceBonus + varietyBonus + playfulRandom;
}

export default function BrandBuilderGame() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, Option>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const progressPercent = useMemo(() => {
    const completedSteps = isComplete ? steps.length : currentStep + 1;
    return Math.min(100, Math.round((completedSteps / steps.length) * 100));
  }, [currentStep, isComplete]);

  const personality = useMemo(
    () => (isComplete ? buildPersonalitySummary(selections) : ""),
    [isComplete, selections]
  );

  const current = steps[currentStep];

  const handleSelect = (option: Option) => {
    const updatedSelections = { ...selections, [current.id]: option };
    setSelections(updatedSelections);

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsComplete(true);
      setScore(calculateScore(updatedSelections));
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setSelections({});
    setIsComplete(false);
    setScore(null);
  };

  return (
    <div className={styles.shell}>
      <div className={styles.header}>
        <div>
          <p className={styles.kicker}>Brand Builder · Mini-Game</p>
          <h1 className={styles.title}>Shape a brand in four playful picks</h1>
          <p className={styles.subtitle}>
            Each choice adds flavor to your brand personality while hinting at how our digital, marketing, and creative
            services can elevate the launch.
          </p>
        </div>
        <div className={styles.progressWrap}>
          <div className={styles.progressLabel}>
            Step {Math.min(currentStep + 1, steps.length)} / {steps.length}
          </div>
          <div className={styles.progressBar}>
            <span className={styles.progressFill} style={{ width: `${progressPercent}%` }} aria-label="progress" />
          </div>
        </div>
      </div>

      {!isComplete ? (
        <section className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.stepLabel}>Step {currentStep + 1}</div>
            <h2 className={styles.cardTitle}>{current.title}</h2>
            <p className={styles.cardPrompt}>{current.prompt}</p>
          </div>
          <div className={styles.optionsGrid}>
            {current.options.map((option) => {
              const isSelected = selections[current.id]?.value === option.value;
              return (
                <button
                  key={option.value}
                  className={`${styles.optionCard} ${isSelected ? styles.optionCardSelected : ""}`}
                  onClick={() => handleSelect(option)}
                >
                  <span className={styles.optionLabel}>{option.label}</span>
                  <span className={styles.optionBlurb}>{option.blurb}</span>
                  <span className={styles.tag}>{tagCopy[option.serviceTag]}</span>
                </button>
              );
            })}
          </div>
          <p className={styles.helperText}>Tap an option to lock it in. You can finish the whole journey in under a minute.</p>
        </section>
      ) : (
        <section className={`${styles.card} ${styles.resultCard}`}>
          <div className={styles.cardHeader}>
            <div className={styles.stepLabel}>Brand Personality</div>
            <h2 className={styles.cardTitle}>Here&apos;s your build</h2>
            <p className={styles.cardPrompt}>{personality}</p>
          </div>

          <div className={styles.summaryList}>
            {steps.map((step) => {
              const choice = selections[step.id];
              return (
                <div key={step.id} className={styles.summaryItem}>
                  <div>
                    <p className={styles.summaryLabel}>{step.title}</p>
                    <p className={styles.summaryValue}>{choice?.label ?? "No choice"}</p>
                  </div>
                  <span className={styles.summaryTag}>{tagCopy[choice?.serviceTag ?? "digital"]}</span>
                </div>
              );
            })}
          </div>

          <div className={styles.scoreBlock}>
            <p className={styles.scoreLabel}>Final Score</p>
            <p className={styles.scoreNumber}>{score}</p>
            <p className={styles.scoreHint}>
              Try again to nudge your score higher—mix picks for even more digital reach, marketing lift, and creative spark.
            </p>
            <div className={styles.actions}>
              <button className={styles.primaryButton} onClick={handleRestart}>
                Replay &amp; experiment
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
