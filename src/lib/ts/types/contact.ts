export interface SocialLink {
	id: string;
	platform: string;
	url: string;
	icon: string;
}

export interface Contact {
	id: string;
	user: string;
	email: string;
	phone: string;
	whatsapp?: string;
	socials: SocialLink[];
	createdAt: string;
	updatedAt: string;
}

export interface ContactMethod {
	title: string;
	value: string;
	link: string;
	icon?: string;
	action?: string;
	description?: string;
}
