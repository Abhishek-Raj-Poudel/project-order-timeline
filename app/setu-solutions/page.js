import { notFound } from "next/navigation";

import { EditorialDashboard } from "@/components/editorial-dashboard";
import { getDashboardProject } from "@/lib/dashboard-projects";

export const metadata = {
  title: "Setu Solutions | Editorial Precision Dashboard",
  description: "Setu Solutions project dashboard",
};

export default function SetuSolutionsPage() {
  const project = getDashboardProject("setu-solutions");

  if (!project) {
    notFound();
  }

  return <EditorialDashboard project={project} />;
}
