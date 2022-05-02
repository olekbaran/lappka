import {
  DashboardIcon,
  MessageIcon,
  PetCardsIcon,
  VolunteeringIcon,
} from 'assets/icons';

export const Slugs = {
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

export const AppRoutes = [
  {
    name: 'Dashboard',
    icon: <DashboardIcon />,
    slug: Slugs.auth.dashboard,
  },
  {
    name: 'Wiadomości',
    icon: <MessageIcon />,
    slug: Slugs.auth.messages,
  },
  {
    name: 'Karty zwierząt',
    icon: <PetCardsIcon />,
    slug: Slugs.auth.petCards,
  },
  {
    name: 'Wolontariat',
    icon: <VolunteeringIcon />,
    slug: Slugs.auth.volunteering,
  },
];
