"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Lock,
  ShieldCheck,
} from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { Button } from "@/components/ui/button";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const order = {
  id: "1023",
  title: "Website Development",
  subtitle: "Track your project from request to delivery in real time",
  status: "In Progress",
  progress: 72,
  currentStage: "Build and QA are running in parallel",
  latestUpdate:
    "Frontend integration is being finalized while QA has already started on completed screens and client-facing copy.",
  nextStep: "Launch preparation",
  eta: "April 15",
  remainingTime: "~5 days remaining",
  owner: "Editorial Precision Studio",
};

const aiSummary = {
  title: "AI Summary",
  text:
    "Two phases are active right now. Build is finishing the remaining UI and content wiring, while QA is already reviewing completed screens in parallel. No blockers are reported, but final launch prep still depends on both tracks closing cleanly.",
  highlights: [
    "2 active phases running in parallel",
    "Current focus: finish build, continue QA, prepare launch handoff",
    "Risk level: low, but launch timing still depends on final integration cleanup",
  ],
};

const projectLinks = [
  {
    label: "Staging link",
    type: "Preview",
    href: "https://example.com/staging-preview",
  },
  {
    label: "Deployment checklist",
    type: "Ops",
    href: "https://example.com/deployment-checklist",
  },
];

const phases = [
  {
    id: "discovery",
    label: "Phase 1 - Discovery",
    status: "complete",
    stamp: "Completed on April 2",
    reason: "",
    summary: "Initial request, requirements, and delivery expectations were confirmed.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    steps: [
      {
        id: "received",
        label: "Order Received",
        stamp: "Completed on April 1",
        summary: "Your request, scope, and core business goals were confirmed.",
        clientDetails: [
          "Project brief reviewed and approved.",
          "Communication channel and reporting cadence set.",
          "Initial delivery window confirmed.",
        ],
        internalDetails: [
          "Discovery notes archived in project workspace.",
          "Success metrics defined for launch handoff.",
        ],
        attachments: [{ label: "Approved brief", type: "PDF" }],
      },
      {
        id: "discussion",
        label: "Requirement Discussion",
        stamp: "Completed on April 2",
        summary: "Content structure, workflows, and approval checkpoints were aligned.",
        clientDetails: [
          "Dashboard sections finalized.",
          "Priority features grouped into launch and post-launch scope.",
          "Revision flow agreed for content and QA.",
        ],
        internalDetails: [
          "User stories refined for admin and client roles.",
          "Acceptance criteria added for milestone reporting.",
        ],
        attachments: [{ label: "Requirements summary", type: "DOC" }],
      },
    ],
  },
  {
    id: "design",
    label: "Phase 2 - Design",
    status: "complete",
    stamp: "Completed on April 3",
    reason: "",
    summary: "The client-facing dashboard structure and presentation were approved for build.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    steps: [
      {
        id: "design-approved",
        label: "Design Approved",
        stamp: "Completed on April 3",
        summary: "The visual system and dashboard structure were approved for build.",
        clientDetails: [
          "Client trust dashboard layout approved.",
          "Timeline-first navigation selected over form-first flow.",
          "Status language simplified for client-facing clarity.",
        ],
        internalDetails: [
          "UI patterns mapped to reusable Tailwind components.",
          "Responsive layout signed off for desktop and mobile.",
        ],
        attachments: [
          {
            label: "Design preview",
            type: "PNG",
            src: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80",
          },
          {
            label: "Mobile layout",
            type: "PNG",
            src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
          },
        ],
      },
    ],
  },
  {
    id: "build",
    label: "Phase 3 - Build",
    status: "current",
    stamp: "Last updated 2 hours ago",
    reason: "Frontend integration and responsive cleanup are still in progress before QA can begin.",
    summary: "Core views are live, and the remaining work is focused on finishing the main implementation cleanly.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    steps: [
      {
        id: "development",
        label: "Development in Progress",
        stamp: "Last updated 2 hours ago",
        summary: "Core dashboard views are being implemented and connected to live progress data.",
        clientDetails: [
          "Progress tracker and order summary are now visible.",
          "Expandable timeline panels are in active development.",
          "Latest update and ETA sections are wired into the primary view.",
        ],
        internalDetails: [
          "Component refactor in progress to split summary, timeline, and detail regions.",
          "Status tokens and view modes added to support client and internal presentation.",
          "Final pass pending for interaction polish and responsive spacing.",
        ],
        attachments: [{ label: "Sprint notes", type: "DOC" }],
      },
      {
        id: "content-review",
        label: "Content and Copy Review",
        stamp: "Queued after current implementation",
        summary: "Copy, labels, and client-facing update language will be finalized after the UI pass.",
        clientDetails: [
          "Dashboard wording is being simplified for client clarity.",
          "Progress labels will match the final delivery workflow.",
        ],
        internalDetails: [
          "Final terminology pass pending after layout stabilization.",
          "Review notes will be applied before QA signoff.",
        ],
        attachments: [{ label: "Review checklist", type: "DOC" }],
      },
    ],
  },
  {
    id: "delivery",
    label: "Phase 4 - QA and Delivery",
    status: "current",
    stamp: "QA started on completed screens",
    reason: "QA is progressing in parallel, but deployment remains pending until the remaining build work is finished.",
    summary: "Testing is already underway on stable parts of the product while launch prep remains queued behind final implementation cleanup.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    steps: [
      {
        id: "testing",
        label: "Testing",
        stamp: "Queued next",
        summary: "Cross-device review, content verification, and interaction testing are scheduled next.",
        clientDetails: [
          "Final client view will be checked on desktop and mobile.",
          "Progress updates and timestamps will be validated before handoff.",
        ],
        internalDetails: [
          "Regression pass planned for theme switch, step expansion, and CTA states.",
          "Launch checklist will be reviewed against delivery criteria.",
        ],
        attachments: [
          {
            label: "QA checklist",
            type: "DOC",
          },
          {
            label: "Completed screens",
            type: "PNG",
            src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
          },
        ],
      },
      {
        id: "deployment",
        label: "Deployment",
        stamp: "Pending testing",
        summary: "Approved build will be prepared for final delivery and client handoff.",
        clientDetails: [
          "Live deployment and final walkthrough will be scheduled.",
          "Delivery package and support notes will be shared after launch.",
        ],
        internalDetails: [
          "Production configuration and final smoke test remain pending.",
        ],
        attachments: [
          { label: "Launch runbook", type: "PDF" },
        ],
      },
    ],
  },
];

const viewModes = [
  { id: "client", label: "Client View", icon: ShieldCheck },
  { id: "internal", label: "Internal View", icon: Lock },
];

const timelineLayouts = [
  { id: "roadmap", label: "Roadmap" },
  { id: "cards", label: "Cards" },
];

const quickLinks = [
  { id: "gantt", label: "Gantt Chart" },
  { id: "summary", label: "AI Summary" },
  { id: "timeline", label: "Timeline" },
  { id: "details", label: "Step Details" },
  { id: "contact", label: "Contact" },
];

const ganttMonths = [
  { id: "apr", label: "Apr" },
  { id: "may", label: "May" },
  { id: "jun", label: "Jun" },
  { id: "jul", label: "Jul" },
];

const ganttTracks = [
  {
    id: "discovery",
    label: "Discovery",
    start: 0,
    span: 19,
    progress: 100,
    status: "complete",
  },
  {
    id: "design",
    label: "Design",
    start: 11,
    span: 22,
    progress: 100,
    status: "complete",
  },
  {
    id: "build",
    label: "Build",
    start: 27,
    span: 35,
    progress: 72,
    status: "current",
  },
  {
    id: "qa",
    label: "QA",
    start: 43,
    span: 24,
    progress: 38,
    status: "current",
  },
  {
    id: "launch",
    label: "Launch",
    start: 68,
    span: 16,
    progress: 0,
    status: "upcoming",
  },
];

const statusConfig = {
  complete: {
    label: "Completed",
    accent: "var(--color-status-complete)",
    soft: "var(--color-status-complete-soft)",
  },
  current: {
    label: "In Progress",
    accent: "var(--color-status-current)",
    soft: "var(--color-status-current-soft)",
  },
  upcoming: {
    label: "Not Started",
    accent: "var(--color-status-upcoming)",
    soft: "var(--color-status-upcoming-soft)",
  },
  blocked: {
    label: "Blocked",
    accent: "var(--color-status-blocked)",
    soft: "var(--color-status-blocked-soft)",
  },
};

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

const timelineVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: index * 0.07,
      ease: easing,
    },
  }),
};

function MetricCard({ label, value, note }) {
  return (
    <div className="rounded-[1.15rem] bg-[var(--color-card)] px-5 py-5">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-soft)]">
        {label}
      </p>
      <p className="mt-3 font-[family-name:var(--font-manrope)] text-[1.75rem] font-extrabold tracking-[-0.06em]">
        {value}
      </p>
      <p className="mt-2 text-sm leading-6 text-[var(--color-ink-muted)]">{note}</p>
    </div>
  );
}

function AttachmentCard({ attachment, onOpenImage }) {
  const { href, label, src, type } = attachment;

  if (src) {
    return (
      <button
        className="group relative block h-40 overflow-hidden rounded-[0.95rem] border border-[color:color-mix(in_srgb,var(--color-outline)_10%,transparent)] bg-[var(--color-surface-2)] text-left"
        onClick={() => onOpenImage({ alt: label, src })}
        type="button"
      >
        <Image
          alt={label}
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          fill
          src={src}
        />
        <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.72))] px-4 py-3">
          <p className="text-sm font-semibold text-white">{label}</p>
          <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/75">
            {type}
          </p>
        </div>
      </button>
    );
  }

  if (href) {
    return (
      <a
        className="flex items-center justify-between rounded-[0.95rem] border border-[color:color-mix(in_srgb,var(--color-outline)_10%,transparent)] bg-[var(--color-surface-2)] px-4 py-3 text-left transition-colors hover:bg-[var(--color-surface-1)]"
        href={href}
        rel="noreferrer"
        target="_blank"
      >
        <div>
          <p className="text-sm font-semibold text-[var(--color-ink)]">{label}</p>
          <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-soft)]">
            {type}
          </p>
        </div>
        <ExternalLink className="h-4 w-4 text-[var(--color-ink-soft)]" />
      </a>
    );
  }

  return (
    <button
      className="flex items-center justify-between rounded-[0.95rem] border border-[color:color-mix(in_srgb,var(--color-outline)_10%,transparent)] bg-[var(--color-surface-2)] px-4 py-3 text-left transition-colors hover:bg-[var(--color-surface-1)]"
      type="button"
    >
      <div>
        <p className="text-sm font-semibold text-[var(--color-ink)]">{label}</p>
        <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-soft)]">
          {type}
        </p>
      </div>
      <ExternalLink className="h-4 w-4 text-[var(--color-ink-soft)]" />
    </button>
  );
}

function PhaseImage({ alt, onOpen, src }) {
  return (
    <button
      className="relative mt-5 block h-44 w-full overflow-hidden rounded-[0.95rem] border border-[color:color-mix(in_srgb,var(--color-outline)_10%,transparent)] bg-[var(--color-surface-2)] text-left"
      onClick={() => onOpen({ alt, src })}
      type="button"
    >
      <Image
        alt={alt}
        className="object-cover transition-transform duration-300 hover:scale-[1.02]"
        fill
        src={src}
      />
      <span className="absolute bottom-3 right-3 rounded-full bg-[color:color-mix(in_srgb,var(--color-card)_88%,transparent)] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[var(--color-ink)]">
        Expand
      </span>
    </button>
  );
}

function PhaseCard({ phase, index, activeStepId, onOpenImage, onSelectStep }) {
  const config = statusConfig[phase.status];
  const phaseHasReason = phase.status !== "complete" && phase.reason;

  return (
    <motion.article
      key={phase.id}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={timelineVariants}
      className="rounded-[1.15rem] bg-[var(--color-card)] px-5 py-5"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)]">
            {phase.label}
          </p>
          <p className="mt-2 text-[0.95rem] leading-7 text-[var(--color-ink-muted)]">
            {phase.summary}
          </p>
        </div>
        <span
          className="rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em]"
          style={{
            color: config.accent,
            backgroundColor: config.soft,
          }}
        >
          {config.label}
        </span>
      </div>

      <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-ink-soft)]">
        {phase.stamp}
      </p>

      {phaseHasReason ? (
        <div className="mt-4 rounded-[0.95rem] bg-[var(--color-surface-1)] px-4 py-4">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">
            Reason
          </p>
          <p className="mt-2 text-[0.9rem] leading-6 text-[var(--color-ink-muted)]">
            {phase.reason}
          </p>
        </div>
      ) : null}

      <PhaseImage alt={phase.label} onOpen={onOpenImage} src={phase.image} />

      <div className="relative mt-5 pl-8">
        <div className="absolute left-[0.45rem] top-2 h-[calc(100%-0.5rem)] w-px bg-[color:color-mix(in_srgb,var(--color-outline)_18%,transparent)]" />

        <div className="space-y-5">
          {phase.steps.map((step) => {
            const isActive = step.id === activeStepId;

            return (
              <article key={step.id} className="relative">
                <button
                  className="w-full text-left"
                  onClick={() => onSelectStep(step.id)}
                  type="button"
                >
                  <div
                    className="absolute left-[-2rem] top-1.5 h-4 w-4 rounded-full border-[4px] border-[var(--color-card)]"
                    style={{
                      backgroundColor: isActive ? "var(--color-primary)" : config.accent,
                      opacity: isActive || phase.status === "complete" ? 1 : 0.35,
                    }}
                  />

                  <h3 className="text-[1.2rem] font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                    {step.label}
                  </h3>
                  <p className="mt-2 max-w-[39rem] text-[0.95rem] leading-7 text-[var(--color-ink-muted)]">
                    {step.summary}
                  </p>
                  <p className="mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-ink-soft)]">
                    {step.stamp}
                  </p>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}

function RoadmapNode({ phase, onSelectStep }) {
  const config = statusConfig[phase.status];
  const firstStep = phase.steps[0];

  return (
    <div className="rounded-[1.15rem] bg-[var(--color-card)] px-5 py-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)]">
            {phase.label}
          </p>
          <h3 className="mt-2 text-[1.2rem] font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
            {firstStep.label}
          </h3>
        </div>
        <span
          className="rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em]"
          style={{
            color: config.accent,
            backgroundColor: config.soft,
          }}
        >
          {config.label}
        </span>
      </div>

      <p className="mt-3 text-[0.9rem] leading-6 text-[var(--color-ink-muted)]">
        {phase.summary}
      </p>

      <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-ink-soft)]">
        {phase.stamp}
      </p>

      {phase.status !== "complete" && phase.reason ? (
        <p className="mt-3 text-[0.85rem] leading-6 text-[var(--color-ink-muted)]">
          <span className="font-semibold text-[var(--color-ink)]">Reason:</span> {phase.reason}
        </p>
      ) : null}

      <button
        className="mt-4 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-primary)]"
        onClick={() => onSelectStep(firstStep.id)}
        type="button"
      >
        Open timeline
        <ArrowUpRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

function RoadmapView({ currentPhases, otherPhases, onSelectStep }) {
  const completedPhases = otherPhases.filter((phase) => phase.status === "complete");
  const pendingPhases = otherPhases.filter((phase) => phase.status !== "complete");

  return (
    <div className="rounded-[1.15rem] bg-[var(--color-card)] px-5 py-6 sm:px-6">
      <div className="mb-6 flex items-center gap-6">
        <h2 className="text-[1.9rem] font-semibold tracking-[-0.05em]">Roadmap View</h2>
        <div className="h-px flex-1 bg-[color:color-mix(in_srgb,var(--color-outline)_12%,transparent)]" />
      </div>

      <div className="mx-auto max-w-5xl">
        {currentPhases.length > 1 ? (
          <div className="pb-2">
            <div className="relative">
              <div className="grid gap-6 pt-8 xl:grid-cols-2">
                {currentPhases.map((phase) => (
                  <div key={phase.id} className="relative">
                    <RoadmapNode onSelectStep={onSelectStep} phase={phase} />
                  </div>
                ))}
              </div>
              {pendingPhases.length ? (
                <div className="relative mt-8 pt-10">
                  <div className="absolute left-[25%] right-[25%] top-0 h-px bg-[color:color-mix(in_srgb,var(--color-outline)_22%,transparent)]" />
                  <div className="absolute left-1/4 top-0 h-10 w-px -translate-x-1/2 bg-[color:color-mix(in_srgb,var(--color-outline)_22%,transparent)] xl:left-1/4" />
                  <div className="absolute left-3/4 top-0 h-10 w-px -translate-x-1/2 bg-[color:color-mix(in_srgb,var(--color-outline)_22%,transparent)] xl:left-3/4" />
                  <div className="absolute left-1/2 top-0 h-10 w-px -translate-x-1/2 bg-[color:color-mix(in_srgb,var(--color-outline)_22%,transparent)]" />
                  <div className="mx-auto w-full max-w-xl">
                    <RoadmapNode onSelectStep={onSelectStep} phase={pendingPhases[0]} />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}

        {completedPhases.length ? (
          <div className="relative mt-10 pt-10">
            <div className="absolute left-1/2 top-0 h-10 w-px -translate-x-1/2 bg-[color:color-mix(in_srgb,var(--color-outline)_22%,transparent)]" />
            <div className="space-y-10">
              {completedPhases.map((phase, index) => (
                <div key={phase.id} className="flex flex-col items-center">
                  <div className="w-full max-w-xl">
                    <RoadmapNode onSelectStep={onSelectStep} phase={phase} />
                  </div>
                  {index !== completedPhases.length - 1 ? (
                    <div className="h-10 w-px bg-[color:color-mix(in_srgb,var(--color-outline)_22%,transparent)]" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function GanttChart() {
  return (
    <div className="rounded-[1.2rem] bg-[var(--color-card)] px-5 py-5 sm:px-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)]">
            Project Gantt
          </p>
          <h2 className="mt-2 text-[1.8rem] font-semibold tracking-[-0.05em] text-[var(--color-ink)]">
            Delivery window at a glance
          </h2>
          <p className="mt-3 max-w-[42rem] text-[0.95rem] leading-7 text-[var(--color-ink-muted)]">
            Key workstreams are mapped across the current delivery window so the client can see what has closed,
            what is active, and what is queued next.
          </p>
        </div>
        <div className="rounded-[0.95rem] bg-[var(--color-surface-1)] px-4 py-4 text-right">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">
            Current target
          </p>
          <p className="mt-2 text-[1.1rem] font-semibold text-[var(--color-ink)]">{order.eta}</p>
          <p className="mt-1 text-sm text-[var(--color-ink-muted)]">{order.remainingTime}</p>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <div className="min-w-[720px]">
          <div className="ml-[8.5rem] grid grid-cols-4 gap-3 pb-3 text-center text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">
            {ganttMonths.map((month) => (
              <div key={month.id} className="rounded-full bg-[var(--color-surface-1)] px-3 py-2">
                {month.label}
              </div>
            ))}
          </div>

          <div className="space-y-3">
            {ganttTracks.map((track) => {
              const config = statusConfig[track.status];

              return (
                <div key={track.id} className="flex items-center gap-4">
                  <div className="w-32 shrink-0">
                    <p className="text-sm font-semibold text-[var(--color-ink)]">{track.label}</p>
                    <p className="mt-1 text-[0.72rem] uppercase tracking-[0.08em] text-[var(--color-ink-soft)]">
                      {config.label}
                    </p>
                  </div>

                  <div className="relative h-11 flex-1 overflow-hidden rounded-[0.95rem] bg-[var(--color-surface-1)]">
                    <div className="absolute inset-y-0 left-1/4 w-px bg-[color:color-mix(in_srgb,var(--color-outline)_14%,transparent)]" />
                    <div className="absolute inset-y-0 left-2/4 w-px bg-[color:color-mix(in_srgb,var(--color-outline)_14%,transparent)]" />
                    <div className="absolute inset-y-0 left-3/4 w-px bg-[color:color-mix(in_srgb,var(--color-outline)_14%,transparent)]" />
                    <div
                      className="absolute inset-y-1.5 rounded-[0.8rem]"
                      style={{
                        left: `${track.start}%`,
                        width: `${track.span}%`,
                        backgroundColor: config.soft,
                        border: `1px solid ${config.accent}`,
                      }}
                    >
                      <div
                        className="h-full rounded-[0.7rem]"
                        style={{
                          width: `${track.progress}%`,
                          backgroundColor: config.accent,
                          opacity: track.progress > 0 ? 0.18 : 0,
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-between px-3">
                        <span
                          className="text-[0.72rem] font-semibold uppercase tracking-[0.08em]"
                          style={{ color: config.accent }}
                        >
                          {track.label}
                        </span>
                        <span className="text-[0.72rem] font-semibold text-[var(--color-ink)]">
                          {track.progress}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function EditorialDashboard() {
  const [activeStepId, setActiveStepId] = useState("development");
  const [lightboxImage, setLightboxImage] = useState(null);
  const [viewMode, setViewMode] = useState("client");
  const [timelineLayout, setTimelineLayout] = useState("roadmap");

  const flatSteps = phases.flatMap((phase) =>
    phase.steps.map((step) => ({
      ...step,
      phaseId: phase.id,
      phaseLabel: phase.label,
      phaseStatus: phase.status,
      phaseReason: phase.reason,
      phaseStamp: phase.stamp,
      phaseImage: phase.image,
    })),
  );
  const activeStep = flatSteps.find((step) => step.id === activeStepId) ?? flatSteps[0];
  const detailList =
    viewMode === "client" ? activeStep.clientDetails : activeStep.internalDetails;
  const currentPhases = phases.filter((phase) => phase.status === "current");
  const otherPhases = phases.filter((phase) => phase.status !== "current");

  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--color-background)] text-[var(--color-ink)]">
      <motion.div
        className="mx-auto max-w-[1180px] px-6 py-8 sm:px-8 lg:px-10 lg:py-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.section className="pb-8" variants={fadeUpVariants}>
          <div className="mb-5 flex items-center justify-end gap-3" variants={fadeUpVariants}>
            <div className="rounded-full border border-[color:color-mix(in_srgb,var(--color-outline)_12%,transparent)] bg-[var(--color-surface-1)] p-1">
              {viewModes.map((mode) => {
                const Icon = mode.icon;

                return (
                  <button
                    key={mode.id}
                    className={[
                      "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                      viewMode === mode.id
                        ? "bg-[var(--color-card)] text-[var(--color-ink)]"
                        : "text-[var(--color-ink-soft)]",
                    ].join(" ")}
                    onClick={() => setViewMode(mode.id)}
                    type="button"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      {mode.label}
                    </span>
                  </button>
                );
              })}
            </div>
            <AnimatedThemeToggler />
          </div>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[42rem]">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                Order Progress Tracker
              </p>
              <h1 className="mt-2 font-[family-name:var(--font-manrope)] text-[2.6rem] font-extrabold tracking-[-0.07em] sm:text-[3.35rem]">
                Order #{order.id} - {order.title}
              </h1>
              <p className="mt-4 max-w-[34rem] text-[0.99rem] leading-8 text-[var(--color-ink-muted)]">
                {order.subtitle}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.id}
                    className="rounded-full border border-[color:color-mix(in_srgb,var(--color-outline)_12%,transparent)] bg-[var(--color-card)] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]"
                    href={`#${link.id}`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-7 max-w-[42rem]">
                <div className="flex items-center justify-between text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-soft)]">
                  <span>{order.status}</span>
                  <span>{order.progress}% complete</span>
                </div>
                <div className="mt-4 h-6 overflow-hidden rounded-full bg-[var(--color-surface-2)]">
                  <motion.div
                    className="h-full rounded-full bg-[var(--color-primary)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${order.progress}%` }}
                    transition={{ duration: 0.9, ease: easing }}
                  />
                </div>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[0.88rem] text-[var(--color-ink-muted)]">
                  <span>{order.currentStage}</span>
                  <span>{order.remainingTime}</span>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  {projectLinks.map((link) => (
                    <a
                      key={link.label}
                      className="inline-flex items-center gap-3 rounded-[0.95rem] border border-[color:color-mix(in_srgb,var(--color-outline)_12%,transparent)] bg-[var(--color-card)] px-4 py-3 text-sm transition-colors hover:bg-[var(--color-surface-1)]"
                      href={link.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span>
                        <span className="block font-semibold text-[var(--color-ink)]">{link.label}</span>
                        <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">
                          {link.type}
                        </span>
                      </span>
                      <ExternalLink className="h-4 w-4 text-[var(--color-ink-soft)]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-end gap-3 lg:pb-1">
              <span className="font-[family-name:var(--font-manrope)] text-[4rem] font-extrabold tracking-[-0.08em] text-[var(--color-primary)] sm:text-[4.75rem]">
                {order.progress}%
              </span>
              <span className="pb-4 text-lg font-medium text-[var(--color-ink-muted)]">
                Complete
              </span>
            </div>
          </div>

          <div
            className="mt-7 h-px bg-[color:color-mix(in_srgb,var(--color-outline)_14%,transparent)]"
            style={{ transformOrigin: "left center" }}
          />
        </motion.section>

        <motion.section className="space-y-8" variants={fadeUpVariants}>
          <section id="gantt">
            <GanttChart />
          </section>

          <div
            id="summary"
            className="rounded-[1.2rem] bg-[linear-gradient(135deg,rgba(245,158,11,0.7),rgba(96,165,250,0.6),rgba(168,85,247,0.5))] p-[1px]"
          >
            <div className="rounded-[calc(1.2rem-1px)] bg-[var(--color-card)] px-5 py-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-[48rem]">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)]">
                  {aiSummary.title}
                </p>
                <p className="mt-3 text-[0.98rem] leading-7 text-[var(--color-ink-muted)]">
                  {aiSummary.text}
                </p>
              </div>
              <div className="text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-ink-soft)]">
                {order.latestUpdate}
              </div>
              </div>
              <div className="mt-5 grid gap-3 lg:grid-cols-3">
                {aiSummary.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-[0.95rem] bg-[var(--color-surface-1)] px-4 py-4 text-[0.84rem] leading-6 text-[var(--color-ink-muted)]"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
              <div className="mt-5 flex justify-end">
                <div className="rounded-full border border-[color:color-mix(in_srgb,var(--color-outline)_12%,transparent)] bg-[var(--color-surface-1)] p-1">
                  {timelineLayouts.map((layout) => (
                    <button
                      key={layout.id}
                      className={[
                        "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                        timelineLayout === layout.id
                          ? "bg-[var(--color-card)] text-[var(--color-ink)]"
                          : "text-[var(--color-ink-soft)]",
                      ].join(" ")}
                      onClick={() => setTimelineLayout(layout.id)}
                      type="button"
                    >
                      {layout.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {timelineLayout === "cards" ? (
            <>
              <div id="timeline">
                <div className="mb-6 flex items-center gap-6">
                  <h2 className="text-[1.9rem] font-semibold tracking-[-0.05em]">Parallel Phases</h2>
                  <div className="h-px flex-1 bg-[color:color-mix(in_srgb,var(--color-outline)_12%,transparent)]" />
                </div>

                <div className="grid gap-6">
                  {currentPhases.map((phase, index) => (
                    <PhaseCard
                      key={phase.id}
                      activeStepId={activeStepId}
                      index={index}
                      onOpenImage={setLightboxImage}
                      onSelectStep={setActiveStepId}
                      phase={phase}
                    />
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-6 flex items-center gap-6">
                  <h2 className="text-[1.9rem] font-semibold tracking-[-0.05em]">Completed And Upcoming</h2>
                  <div className="h-px flex-1 bg-[color:color-mix(in_srgb,var(--color-outline)_12%,transparent)]" />
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  {otherPhases.map((phase, index) => (
                    <PhaseCard
                      key={phase.id}
                      activeStepId={activeStepId}
                      index={index}
                      onOpenImage={setLightboxImage}
                      onSelectStep={setActiveStepId}
                      phase={phase}
                    />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div id="timeline">
              <RoadmapView
                currentPhases={currentPhases}
                onSelectStep={setActiveStepId}
                otherPhases={otherPhases}
              />
            </div>
          )}
        </motion.section>

        <motion.section
          className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]"
          id="details"
          variants={fadeUpVariants}
        >
          <div className="space-y-4">
            <MetricCard
              label="Next Step"
              value={order.nextStep}
              note="Launch preparation starts once the parallel build and QA streams are both signed off."
            />
            <MetricCard
              label="Estimated Completion"
              value={order.eta}
              note={order.remainingTime}
            />
            <MetricCard
              label="Project Owner"
              value={order.owner}
              note="All progress updates are consolidated here for quick client review."
            />
          </div>

          <div className="space-y-4">
            <div className="rounded-[1.15rem] bg-[var(--color-card)] px-5 py-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)]">
                    Step Details
                  </p>
                  <h2 className="mt-2 text-[1.45rem] font-semibold tracking-[-0.05em]">
                    {activeStep.label}
                  </h2>
                  <p className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-ink-soft)]">
                    {activeStep.phaseLabel}
                  </p>
                </div>
                <span
                  className="rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em]"
                  style={{
                    color: statusConfig[activeStep.phaseStatus].accent,
                    backgroundColor: statusConfig[activeStep.phaseStatus].soft,
                  }}
                >
                  {statusConfig[activeStep.phaseStatus].label}
                </span>
              </div>

              <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-ink-soft)]">
                {activeStep.stamp}
              </p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeStep.id}-${viewMode}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: easing }}
                >
                  <p className="mt-5 text-[0.95rem] leading-7 text-[var(--color-ink-muted)]">
                    {activeStep.summary}
                  </p>

                  {activeStep.phaseReason ? (
                    <div className="mt-6 rounded-[0.95rem] bg-[var(--color-surface-1)] p-5">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">
                        Why this phase is still open
                      </p>
                      <p className="mt-2 text-[0.9rem] leading-6 text-[var(--color-ink-muted)]">
                        {activeStep.phaseReason}
                      </p>
                    </div>
                  ) : null}

                  <PhaseImage
                    alt={activeStep.phaseLabel}
                    onOpen={setLightboxImage}
                    src={activeStep.phaseImage}
                  />

                  <div className="mt-6 rounded-[0.95rem] bg-[var(--color-surface-1)] p-5">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">
                      {viewMode === "client" ? "What this means for you" : "Internal delivery notes"}
                    </p>
                    <div className="mt-4 space-y-3">
                      {detailList.map((detail) => (
                        <div key={detail} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                          <p className="text-[0.9rem] leading-6 text-[var(--color-ink-muted)]">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">
                        Attachments and proof of work
                      </p>
                      <button
                        className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-primary)]"
                        type="button"
                      >
                        Open latest
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <div className="grid gap-3">
                      {activeStep.attachments.map((attachment) => (
                        <AttachmentCard
                          key={`${activeStep.id}-${attachment.label}`}
                          attachment={attachment}
                          onOpenImage={setLightboxImage}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div
              className="rounded-[1.15rem] bg-[var(--color-primary)] px-5 py-5 text-[var(--color-primary-foreground)]"
              id="contact"
            >
              <p className="text-[1rem] font-semibold tracking-[-0.03em]">Need a clarification?</p>
              <p className="mt-2 text-[0.88rem] leading-6 text-[color:color-mix(in_srgb,var(--color-primary-foreground)_82%,transparent)]">
                Use the dashboard update trail first, then escalate only if a delivery decision is blocked.
              </p>
              <Button
                variant="secondary"
                className="mt-5 h-10 w-full justify-center rounded-[0.7rem] bg-[var(--color-card)] px-4 text-[0.74rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-primary)] hover:bg-[var(--color-card)] hover:text-[var(--color-primary)]"
              >
                Contact project lead
              </Button>
            </div>
          </div>
        </motion.section>

        <Lightbox
          close={() => setLightboxImage(null)}
          index={0}
          open={Boolean(lightboxImage)}
          slides={lightboxImage ? [{ src: lightboxImage.src, alt: lightboxImage.alt }] : []}
        />
      </motion.div>
    </main>
  );
}
