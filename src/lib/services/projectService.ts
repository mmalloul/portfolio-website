// src/services/projectService.ts

import type { Project, ProjectsApiResponse } from '@lib/types/project';

const apiUrl: string = import.meta.env.PUBLIC_CMS_API_URL;
const mediaBaseUrl: string = import.meta.env.PUBLIC_MEDIA_BASE_URL;

export async function getAllProjects(): Promise<Project[]> {
	const response = await fetch(`${apiUrl}/projects`);
	const data: ProjectsApiResponse = await response.json();
	return processProjects(data.docs);
}

export async function getTopProjects(limit: number = 3): Promise<Project[]> {
	const response = await fetch(`${apiUrl}/projects?limit=${limit}`);
	const data: ProjectsApiResponse = await response.json();
	return processProjects(data.docs);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
	const projects = await getAllProjects();
	return projects.find((project) => project.slug === slug) || null;
}

function processProjects(projects: Project[]): Project[] {
	return projects.map((project) => ({
		...project,
		image: {
			...project.image,
			url: getFullImageUrl(project.image.url)
		},
		galleryImages: project.galleryImages?.map((item) => ({
			...item,
			image: {
				...item.image,
				url: getFullImageUrl(item.image.url)
			}
		}))
	}));
}

export function getFullImageUrl(url: string): string {
	return url.startsWith('http') ? url : `${mediaBaseUrl}${url}`;
}
