interface IMember {
	name: string;
	portrait: string;
	bio: [string, string];
}

interface IEvent {
	name: string;
	description: string;
	rulesLink: string;
	prizes: string[];
	registration: string[];
	registrationLink: string;
}
