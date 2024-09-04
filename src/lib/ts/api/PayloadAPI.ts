import { HttpClient } from './httpClient';
import type { Project } from '@lib/ts/types/project';
import type { Contact } from '@lib/ts/types/contact';
import type { Skill } from '@lib/ts/types/skill';
import type { Service } from '@lib/ts/types/service';

export class PayloadAPI {
	private httpClient: HttpClient;

	constructor(httpClient: HttpClient) {
		this.httpClient = httpClient;
	}

	// Project API calls
	async getAllProjects(): Promise<Project[]> {
		return this.httpClient.get<Project[]>('/projects');
	}
	async getFeaturedProjects(): Promise<Project[]> {
		return this.httpClient.get<Project[]>('/projects?where[isFeatured][equals]=true');
	}

	async getProjectBySlug(slug: string): Promise<Project | null> {
		const projects = await this.httpClient.get<Project[]>(`/projects?where[slug][equals]=${slug}`);
		return projects.length ? projects[0] : null;
	}

	// Contact API calls
	async getAllContacts(): Promise<Contact[]> {
		return this.httpClient.get<Contact[]>('/contact-info');
	}

	async getContactById(id: string): Promise<Contact> {
		return this.httpClient.get<Contact>(`/contact-info/${id}`);
	}

	// Skill API calls
	async getAllSkills(): Promise<Skill[]> {
		return this.httpClient.get<Skill[]>('/skills');
	}

	// Service API calls
	async getAllServices(): Promise<Service[]> {
		return this.httpClient.get<Service[]>('/services');
	}
}

// Instantiate PayloadAPI
const apiUrl: string = import.meta.env.API_URL;
export const payloadApi = new PayloadAPI(new HttpClient(apiUrl));
