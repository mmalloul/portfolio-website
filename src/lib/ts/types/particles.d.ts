declare var Particles: {
	init: (options: {
		selector: string;
		color?: string[];
		connectParticles?: boolean;
		responsive?: { breakpoint: number; options: { maxParticles: number } }[];
	}) => void;
};
