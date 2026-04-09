import { notFound } from "next/navigation";

import { EditorialDashboard } from "@/components/editorial-dashboard";
import {
  getDashboardProject,
  getDashboardProjectSlugs,
} from "@/lib/dashboard-projects";

export function generateStaticParams() {
  return getDashboardProjectSlugs().map((projectSlug) => ({ projectSlug }));
}

export function generateMetadata({ params }) {
  const project = getDashboardProject(params.projectSlug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.routeLabel} | Editorial Precision Dashboard`,
    description: `${project.routeLabel} project dashboard`,
  };
}

export default function ProjectDashboardPage({ params }) {
  const project = getDashboardProject(params.projectSlug);

  if (!project) {
    notFound();
  }

  return <EditorialDashboard project={project} />;
}
