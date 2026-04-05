"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Square } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const initialMilestones = [
  {
    id: 1,
    title: "Permit Approval",
    description:
      "All municipal zoning and environmental impact assessments have been signed off.",
    note: "Completed Jul 12",
    complete: true,
    active: false,
  },
  {
    id: 2,
    title: "Structural Framing",
    description:
      "Internal steel skeletons and load-bearing timber frames are currently being installed.",
    note: "35%",
    complete: false,
    active: true,
  },
  {
    id: 3,
    title: "Exterior Envelope",
    description:
      "Installation of high-efficiency glass and insulated cladding systems.",
    note: "Target: Sept 15",
    complete: false,
    active: false,
  },
  {
    id: 4,
    title: "Interior Finishes",
    description:
      "Bespoke cabinetry, lighting integration, and flooring across all three levels.",
    note: "",
    complete: false,
    active: false,
  },
];

const timelineItems = [
  {
    id: 1,
    title: "Foundation Pouring & Inspection",
    description:
      "The structural base has been cured and verified against seismological standards. Ready for framing initiation.",
    link: "View inspection report",
    active: true,
    gallery: "duo",
  },
  {
    id: 2,
    title: "Site Excavation Complete",
    description:
      "Terracing for the rear garden and the main footprint has been successfully leveled.",
    active: false,
    gallery: "wide",
  },
  {
    id: 3,
    title: "Timber Framing Assembly",
    description:
      "Scheduled for the upcoming quarter. Sourcing of sustainably harvested cedar is in progress.",
    active: false,
    gallery: null,
  },
];

const easing = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: easing,
    },
  },
};

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easing,
    },
  },
};

const timelineVariants = {
  hidden: {
    opacity: 0,
    y: 26,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: index * 0.08,
      ease: easing,
    },
  }),
};

const milestoneVariants = {
  hidden: {
    opacity: 0,
    x: 24,
  },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      delay: index * 0.06,
      ease: easing,
    },
  }),
};

function MilestoneCheckbox({ checked }) {
  if (checked) {
    return (
      <span className="flex h-5 w-5 items-center justify-center rounded-[0.35rem] bg-[var(--color-primary)] text-[var(--color-primary-foreground)]">
        <Check className="h-3 w-3" />
      </span>
    );
  }

  return <Square className="h-4.5 w-4.5 text-[var(--color-outline-soft)]" strokeWidth={1.75} />;
}

function PlaceholderArt({ type }) {
  if (type === "wide") {
    return (
      <div className="rounded-[0.8rem] border border-[color:color-mix(in_srgb,var(--color-outline)_10%,transparent)] bg-[var(--color-surface-2)] p-3">
        <div className="flex aspect-[16/6] items-end rounded-[0.65rem] bg-[var(--color-placeholder-base)] px-4 py-3">
          <div className="w-full space-y-2">
            <div className="h-px w-full bg-[var(--color-outline-soft)]/70" />
            <div className="h-px w-4/5 bg-[var(--color-outline-soft)]/55" />
            <div className="h-px w-3/5 bg-[var(--color-outline-soft)]/45" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="rounded-[0.8rem] border border-[color:color-mix(in_srgb,var(--color-outline)_10%,transparent)] bg-[var(--color-surface-2)] p-3">
        <div className="aspect-[4/3] rounded-[0.65rem] bg-[var(--color-placeholder-strong)] p-3">
          <div className="flex h-full items-end gap-1">
            {Array.from({ length: 12 }).map((_, index) => (
              <span
                key={index}
                className="block w-full rounded-full bg-[var(--color-primary)]/70"
                style={{ height: `${45 + ((index * 7) % 40)}%` }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-[0.8rem] border border-[color:color-mix(in_srgb,var(--color-outline)_10%,transparent)] bg-[var(--color-surface-2)] p-3">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[0.65rem] bg-[var(--color-placeholder-accent)]">
          <div className="absolute inset-x-4 bottom-4 top-8 rotate-[-10deg] rounded-[0.65rem] border border-[color:color-mix(in_srgb,var(--color-ink)_10%,transparent)] bg-[var(--color-placeholder-panel-1)]" />
          <div className="absolute inset-x-8 bottom-7 top-12 rotate-[8deg] rounded-[0.65rem] border border-[color:color-mix(in_srgb,var(--color-ink)_10%,transparent)] bg-[var(--color-placeholder-panel-2)]" />
        </div>
      </div>
    </div>
  );
}

export function EditorialDashboard() {
  const [milestones, setMilestones] = useState(initialMilestones);
  const completion = Math.round(
    (milestones.filter((milestone) => milestone.complete).length / milestones.length) * 100,
  );

  function toggleMilestone(id) {
    setMilestones((current) =>
      current.map((milestone) =>
        milestone.id === id
          ? {
            ...milestone,
            complete: !milestone.complete,
          }
          : milestone,
      ),
    );
  }

  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-ink)]">
      <motion.div
        className="mx-auto max-w-[1180px] px-6 py-8 sm:px-8 lg:px-10 lg:py-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.section className="pb-8" variants={fadeUpVariants}>
          <motion.div className="mb-5 flex items-center justify-end" variants={fadeUpVariants}>
            <AnimatedThemeToggler />
          </motion.div>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <motion.div className="max-w-[42rem]" variants={fadeUpVariants}>
              <motion.p
                className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)]"
                variants={fadeUpVariants}
              >
                Current engagement
              </motion.p>
              <motion.h1
                className="mt-2 font-[family-name:var(--font-manrope)] text-[2.6rem] font-extrabold tracking-[-0.07em] sm:text-[3.35rem]"
                variants={fadeUpVariants}
              >
                The Pavilion Project
              </motion.h1>
              <motion.p
                className="mt-4 max-w-[34rem] text-[0.99rem] leading-8 text-[var(--color-ink-muted)]"
                variants={fadeUpVariants}
              >
                A bespoke residential expansion focusing on light filtration and rhythmic
                structural elements. An architectural study in precision and transparency.
              </motion.p>
            </motion.div>

            <motion.div className="flex items-end gap-3 lg:pb-1" variants={fadeUpVariants}>
              <motion.span
                className="font-[family-name:var(--font-manrope)] text-[4rem] font-extrabold tracking-[-0.08em] text-[var(--color-primary)] sm:text-[4.75rem]"
                key={completion}
                initial={{ opacity: 0.6, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: easing }}
              >
                {completion}%
              </motion.span>
              <motion.span
                className="pb-4 text-lg font-medium text-[var(--color-ink-muted)]"
                variants={fadeUpVariants}
              >
                Complete
              </motion.span>
            </motion.div>
          </div>

          <motion.div
            className="mt-7 h-px bg-[color:color-mix(in_srgb,var(--color-outline)_14%,transparent)]"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: easing, delay: 0.15 }}
            style={{ transformOrigin: "left center" }}
          />
        </motion.section>

        <motion.section
          className="grid gap-12 lg:grid-cols-[minmax(0,1.65fr)_minmax(310px,0.95fr)]"
          variants={sectionVariants}
        >
          <motion.div variants={sectionVariants}>
            <div className="mb-6 flex items-center gap-6">
              <h2 className="text-[1.9rem] font-semibold tracking-[-0.05em]">Project Timeline</h2>
              <div className="h-px flex-1 bg-[color:color-mix(in_srgb,var(--color-outline)_12%,transparent)]" />
            </div>

            <div className="relative pl-8">
              <div className="absolute left-[0.45rem] top-2 h-[calc(100%-0.5rem)] w-px bg-[color:color-mix(in_srgb,var(--color-outline)_18%,transparent)]" />

              <div className="space-y-10">
                {timelineItems.map((item, index) => (
                  <motion.article
                    key={item.id}
                    className="relative"
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.35 }}
                    variants={timelineVariants}
                  >
                    <div
                      className={[
                        "absolute left-[-2rem] top-1.5 h-4 w-4 rounded-full border-[4px] border-[var(--color-background)]",
                        item.active ? "bg-[var(--color-primary)]" : "bg-[var(--color-outline-soft)]",
                      ].join(" ")}
                    />

                    <h3
                      className={[
                        "text-[1.34rem] font-semibold tracking-[-0.04em]",
                        item.active ? "text-[var(--color-ink)]" : "text-[var(--color-outline-soft)]",
                      ].join(" ")}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={[
                        "mt-3 max-w-[39rem] text-[0.95rem] leading-7",
                        item.active ? "text-[var(--color-ink-muted)]" : "text-[color:color-mix(in_srgb,var(--color-ink-soft)_52%,var(--color-background))]",
                      ].join(" ")}
                    >
                      {item.description}
                    </p>

                    {item.link ? (
                      <button className="mt-4 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-primary)]">
                        {item.link}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                    ) : null}

                    {item.gallery ? (
                      <motion.div
                        className="mt-6 max-w-[42rem]"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.7, ease: easing, delay: 0.08 }}
                      >
                        <PlaceholderArt type={item.gallery} />
                      </motion.div>
                    ) : null}
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.aside variants={sectionVariants}>
            <h2 className="mb-6 text-[1.9rem] font-semibold tracking-[-0.05em]">Milestones</h2>

            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <motion.button
                  key={milestone.id}
                  layout
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.995 }}
                  viewport={{ once: true, amount: 0.5 }}
                  variants={milestoneVariants}
                  className={[
                    "w-full rounded-[1.15rem] bg-[var(--color-card)] px-5 py-5 text-left transition-colors",
                    milestone.active
                      ? "border-l-4 border-[var(--color-primary)]"
                      : "border-l-4 border-transparent",
                  ].join(" ")}
                  onClick={() => toggleMilestone(milestone.id)}
                  type="button"
                >
                  <div className="flex items-start gap-3">
                    <div className="pt-0.5">
                      <MilestoneCheckbox checked={milestone.complete} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-[1.05rem] font-semibold tracking-[-0.03em]">
                        {milestone.title}
                      </h3>
                      <p className="mt-2 text-[0.9rem] leading-7 text-[var(--color-ink-muted)]">
                        {milestone.description}
                      </p>

                      {milestone.active ? (
                        <div className="mt-5">
                          <div className="h-1.5 w-full rounded-full bg-[var(--color-surface-2)]">
                            <motion.div
                              className="h-full rounded-full bg-[var(--color-primary)]"
                              initial={{ width: 0 }}
                              animate={{ width: "35%" }}
                              transition={{ duration: 0.9, ease: easing, delay: 0.15 }}
                            />
                          </div>
                          <p className="mt-2 text-right text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-ink-soft)]">
                            {milestone.note}
                          </p>
                        </div>
                      ) : milestone.note ? (
                        <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-ink-soft)]">
                          {milestone.note}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            <motion.div
              className="mt-6 rounded-[1.15rem] bg-[var(--color-primary)] px-5 py-5 text-[var(--color-primary-foreground)]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.75, ease: easing, delay: 0.12 }}
            >
              <p className="text-[1rem] font-semibold tracking-[-0.03em]">Need consultation?</p>
              <p className="mt-2 text-[0.88rem] leading-6 text-[color:color-mix(in_srgb,var(--color-primary-foreground)_82%,transparent)]">
                Direct access to the lead architect for design revisions or site queries.
              </p>
              <Button
                variant="secondary"
                className="mt-5 h-10 w-full justify-center rounded-[0.7rem] bg-[var(--color-card)] px-4 text-[0.74rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-primary)] hover:bg-[var(--color-card)] hover:text-[var(--color-primary)]"
              >
                Contact architect
              </Button>
            </motion.div>
          </motion.aside>
        </motion.section>
      </motion.div>
    </main>
  );
}
