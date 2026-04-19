import dashboardProjectsData from "@/data/dashboard-projects.json";

export const dashboardProjects = dashboardProjectsData;

export const defaultDashboardProject = dashboardProjects.umraocashmere;

export function getDashboardProject(slug) {
  return dashboardProjects[slug] ?? null;
}

export function getDashboardProjectSlugs() {
  return Object.keys(dashboardProjects);
}
