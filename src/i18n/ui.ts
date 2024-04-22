import Chileflag from '../components/flags/Chile.astro';
import UnitedStatesFlag from '../components/flags/UnitedStates.astro';

export const LANGUAGES: Record<
	string,
	{ code: string; name: string; flag: typeof Chileflag }
> = {
	en: {
		code: 'en',
		name: 'English',
		flag: UnitedStatesFlag,
	},
	es: {
		code: 'es',
		name: 'Español',
		flag: Chileflag,
	},
};
export const defaultLang = 'es';
export const showDefaultLang = false;




export const ui = {
    es: {
    'nav.inicio': 'Inicio',
    'nav.experiencia': 'Experiencia',
    'nav.tecnologia': 'Tecnología',
    'nav.contacto': 'Contacto',
    },
    en: {
    
    'nav.inicio': 'Home',
    'nav.experiencia': 'Experience',
    'nav.tecnologia': 'Technology',
    'nav.contacto': 'Contact'
    },
} as const;

export const routes = {
	es: {
		inicio: 'inicio',
		experiencia: 'experiencia',
		tecnologia: 'tecnologia',
		contacto: 'contacto',

	},
	en: {
		inicio: 'home',
		experiencia: 'experience',
		tecnologia: 'technology',
		contacto: 'contact',
	},

};