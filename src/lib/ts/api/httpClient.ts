import type { Image } from '../types/image';

export class HttpClient {
	private apiUrl: string;
	private mediaBaseUrl: string;

	constructor(apiUrl: string, mediaBaseUrl: string) {
		this.apiUrl = apiUrl;
		this.mediaBaseUrl = mediaBaseUrl;
	}

	async get<T>(path: string): Promise<T> {
		const response = await fetch(`${this.apiUrl}${path}`);
		if (!response.ok) {
			throw new Error(`Failed to fetch with: ${this.apiUrl}${path}, error: ${response.statusText}`);
		}
		const data = await response.json();
		return this.processImages(data.docs || data);
	}

	private processImages<T>(data: T): T {
		if (Array.isArray(data)) {
			return data.map((item) => this.processImages(item)) as unknown as T;
		}
		if (data && typeof data === 'object') {
			for (const key in data) {
				if (key === 'image' && this.isImage(data[key])) {
					data[key].url = this.processImage(data[key].url);
				} else if (typeof data[key] === 'object') {
					data[key] = this.processImages(data[key]);
				}
			}
		}
		return data;
	}

	private isImage(data: any): data is Image {
		return data && typeof data.url === 'string';
	}

	private processImage(url: string): string {
		// Only add base URL if the URL doesn't already start with 'http' or the mediaBaseUrl
		if (url.startsWith('http')) {
			return url;
		}
		return `${this.mediaBaseUrl}${url}`;
	}
}
