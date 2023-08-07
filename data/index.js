import grid01 from '@/images/properties-grid-18.jpg';
import apartment from '@/images/icons/apppartement.png';
import house from '@/images/icons/sofa.png';
import vila from '@/images/icons/eco-house.png';
import office from '@/images/icons/architecture-and-city.png';

export const properties = [
  {
    id: 1,
    title: ' Affordable Urban House 01',
    address: '1421 San Pedro St, New York, NY',
    price: 1250,
    currencySign: '$',
    url: '/listings',
    attributes: [
      {
        id: 1,
        name: 'Bed',
        shortCode: 'Be',
        value: 3,
      },
      {
        id: 2,
        name: 'Bathroom',
        shortCode: 'Ba',
        value: 4,
      },
      {
        id: 3,
        name: 'Square Feet',
        shortCode: 'Sq.ft',
        value: 2300,
      },
      {
        id: 4,
        name: 'Garage',
        shortCode: 'Gr',
        value: 1,
      },
    ],
    images: [
      {
        id: 1,
        src: `${grid01?.src}`,
        default: true,
      },
      {
        id: 2,
        src: `${grid01?.src}`,
        default: false,
      },
    ],
  },
  {
    id: 2,
    title: ' Affordable Urban House',
    address: '1421 San Pedro St, Los Angeles',
    price: 1250,
    currencySign: '$',
    url: '/listings',
    attributes: [
      {
        id: 1,
        name: 'Bed',
        shortCode: 'Be',
        value: 3,
      },
      {
        id: 2,
        name: 'Bathroom',
        shortCode: 'Ba',
        value: 4,
      },
      {
        id: 3,
        name: 'Square Feet',
        shortCode: 'Sq.ft',
        value: 2300,
      },
      {
        id: 4,
        name: 'Garage',
        shortCode: 'Gr',
        value: 1,
      },
    ],
    images: [
      {
        id: 1,
        src: `${grid01?.src}`,
        default: true,
      },
      {
        id: 2,
        src: `${grid01?.src}`,
        default: false,
      },
    ],
  },
  {
    id: 3,
    title: ' Affordable Urban House',
    address: '1421 San Pedro St, Los Angeles',
    price: 1250,
    currencySign: '$',
    url: '/listings',
    attributes: [
      {
        id: 1,
        name: 'Bed',
        shortCode: 'Be',
        value: 3,
      },
      {
        id: 2,
        name: 'Bathroom',
        shortCode: 'Ba',
        value: 4,
      },
      {
        id: 3,
        name: 'Square Feet',
        shortCode: 'Sq.ft',
        value: 2300,
      },
      {
        id: 4,
        name: 'Garage',
        shortCode: 'Gr',
        value: 1,
      },
    ],
    images: [
      {
        id: 1,
        src: `${grid01?.src}`,
        default: true,
      },
      {
        id: 2,
        src: `${grid01?.src}`,
        default: false,
      },
    ],
  },
  {
    id: 4,
    title: ' Affordable Urban House',
    address: '1421 San Pedro St, Los Angeles',
    price: 1250,
    currencySign: '$',
    url: '/listings',
    attributes: [
      {
        id: 1,
        name: 'Bed',
        shortCode: 'Be',
        value: 3,
      },
      {
        id: 2,
        name: 'Bathroom',
        shortCode: 'Ba',
        value: 4,
      },
      {
        id: 3,
        name: 'Square Feet',
        shortCode: 'Sq.ft',
        value: 2300,
      },
      {
        id: 4,
        name: 'Garage',
        shortCode: 'Gr',
        value: 1,
      },
    ],
    images: [
      {
        id: 1,
        src: `${grid01?.src}`,
        default: true,
      },
      {
        id: 2,
        src: `${grid01?.src}`,
        default: false,
      },
    ],
  },
];

export const propertiesTypes = [
  {
    iconFor: 'Apartment',
    url: '/listings',
    icon: `${apartment?.src}`,
  },
  {
    iconFor: 'House',
    url: '/listings',
    icon: `${house?.src}`,
  },
  {
    iconFor: 'Vila',
    url: '/listings',
    icon: `${vila?.src}`,
  },
  {
    iconFor: 'Office',
    url: '/listings',
    icon: `${office?.src}`,
  },
];
