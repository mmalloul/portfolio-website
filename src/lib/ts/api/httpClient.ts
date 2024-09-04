export class HttpClient {
	private apiUrl: string;

	constructor(apiUrl: string) {
		this.apiUrl = apiUrl;
	}

	async get<T>(path: string): Promise<T> {
		const response = await fetch(`${this.apiUrl}${path}`);
		if (!response.ok) {
			throw new Error(`Failed to fetch with: ${this.apiUrl}${path}, error: ${response.statusText}`);
		}
		const data = await response.json();
		return data.docs || data;
	}
}
