import {
  BuildingStorefrontIcon,
  ChevronDoubleRightIcon,
  HomeIcon,
  LinkIcon,
  UserCircleIcon,
  VariableIcon,
} from '@heroicons/react/24/outline';

export const mainNavigation = [
  {
    title: 'Main',
    navigation: [
      { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: true },
    ],
  },
  {
    title: 'Manage List ',
    navigation: [
      {
        name: 'Add Listing',
        href: '/dashboard/add-listing',
        icon: LinkIcon,
        current: false,
      },
      {
        name: 'My Properties',
        href: '/dashboard/my-properties',
        icon: LinkIcon,
        current: false,
      },
      {
        name: 'My Favorites',
        href: '/dashboard/my-favorites',
        icon: LinkIcon,
        current: false,
      },
      {
        name: 'My save search',
        href: '/dashboard/my-save-search',
        icon: LinkIcon,
        current: false,
      },
      {
        name: 'Reviews',
        href: '/dashboard/review',
        icon: LinkIcon,
        current: false,
      },
      {
        name: 'Invoice',
        href: '/dashboard/invoice',
        icon: LinkIcon,
        current: false,
        children: [
          {
            name: 'Reviews',
            href: '/dashboard/review',
            icon: LinkIcon,
            current: false,
          },
        ],
      },
    ],
  },
  {
    title: 'Manage Account',
    navigation: [
      {
        name: 'My Package',
        href: '/brand',
        icon: BuildingStorefrontIcon,
        current: false,
      },
      {
        name: 'My Profile',
        href: '/brand',
        icon: BuildingStorefrontIcon,
        current: false,
      },
      {
        name: 'Logout',
        href: '/brand',
        icon: BuildingStorefrontIcon,
        current: false,
      },
    ],
  },
];
