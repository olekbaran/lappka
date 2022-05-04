import {
  DashboardIcon,
  MessageIcon,
  PetCardsIcon,
  VolunteeringIcon,
} from 'assets/icons';

export const slugs = {
  auth: {
    dashboard: 'dashboard',
    messages: 'wiadomosci',
    petCards: 'karty-zwierzat',
    volunteering: 'wolontariat',
  },
  default: {
    root: '/',
  },
};

export const appRoutes = [
  {
    name: 'Dashboard',
    icon: <DashboardIcon />,
    slug: slugs.auth.dashboard,
  },
  {
    name: 'Wiadomości',
    icon: <MessageIcon />,
    slug: slugs.auth.messages,
  },
  {
    name: 'Karty zwierząt',
    icon: <PetCardsIcon />,
    slug: slugs.auth.petCards,
  },
  {
    name: 'Wolontariat',
    icon: <VolunteeringIcon />,
    slug: slugs.auth.volunteering,
  },
];
