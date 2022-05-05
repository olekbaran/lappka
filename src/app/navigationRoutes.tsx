import { appRoutes } from 'app';

import {
  DashboardIcon,
  MessageIcon,
  PetCardsIcon,
  VolunteeringIcon,
} from 'assets/icons';

export const navigationRoutes = [
  {
    name: appRoutes.dashboard.name,
    icon: <DashboardIcon />,
    slug: appRoutes.dashboard.slug,
  },
  {
    name: appRoutes.messages.name,
    icon: <MessageIcon />,
    slug: appRoutes.messages.slug,
  },
  {
    name: appRoutes.petCards.name,
    icon: <PetCardsIcon />,
    slug: appRoutes.petCards.slug,
  },
  {
    name: appRoutes.volunteering.name,
    icon: <VolunteeringIcon />,
    slug: appRoutes.volunteering.slug,
  },
];
