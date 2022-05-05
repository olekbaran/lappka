import {
  DashboardIcon,
  MessageIcon,
  PetCardsIcon,
  VolunteeringIcon,
} from 'assets/icons';

export const appRoutes = {
  home: {
    slug: '/',
  },
  dashboard: {
    name: 'Dashboard',
    icon: <DashboardIcon />,
    slug: '/dashboard',
  },
  messages: {
    name: 'Wiadomości',
    icon: <MessageIcon />,
    slug: '/wiadomosci',
  },
  petCards: {
    name: 'Karty zwierząt',
    icon: <PetCardsIcon />,
    slug: '/karty-zwierzat',
  },
  volunteering: {
    name: 'Wolontariat',
    icon: <VolunteeringIcon />,
    slug: '/wolontariat',
  },
};
