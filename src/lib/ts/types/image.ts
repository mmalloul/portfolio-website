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
