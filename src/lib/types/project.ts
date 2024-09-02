export interface Image {
	id: string;
	alt?: string;
	filename: string;
	mimeType: string;
	filesize: number;
	width: number;
	height: number;
	focalX?: number;
	focalY?: number;
	createdAt: string;
	updatedAt: string;
	url: string;
	thumbnailURL?: string | null;
}

export interface Feature {
	id: string;
	feature: string;
}

export interface Technology {
	id: string;
	technology: string;
}

export interface GalleryImage {
	id: string;
	image: Image;
}

export interface Project {
	id: string;
	slug: string;
	title: string;
	description: string;
	image: Image;
	problemStatement?: string;
	solution?: string;
	outcome?: string;
	features?: Feature[];
	technologies?: Technology[];
	galleryImages?: GalleryImage[];
	github?: string;
	gitlab?: string;
	website?: string;
	createdAt: string;
	updatedAt: string;
}

export interface ProjectsApiResponse {
	docs: Project[];
	totalDocs: number;
	limit: number;
	totalPages: number;
	page: number;
	pagingCounter: number;
	hasPrevPage: boolean;
	hasNextPage: boolean;
	prevPage: number | null;
	nextPage: number | null;
}
