import grid01 from '@/images/properties-grid-18.jpg';
import apartment from '@/images/icons/apppartement.png';
import house from '@/images/icons/sofa.png';
import vila from '@/images/icons/eco-house.png';
import office from '@/images/icons/architecture-and-city.png';
import city01 from '@/images/properties-city-01.jpg';
import city02 from '@/images/properties-city-02.jpg';
import city03 from '@/images/properties-city-03.jpg';
import city04 from '@/images/properties-city-04.jpg';
import city05 from '@/images/properties-city-05.jpg';

import partner01 from '@/images/partner-1.png';
import partner04 from '@/images/partner-4.png';
import partner03 from '@/images/partner-3.png';
import partner05 from '@/images/partner-5.png';
import partner02 from '@/images/partner-2.png';
import partner06 from '@/images/partner-6.png';
import partner07 from '@/images/partner-6.png';

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

export const propertyCities = [
  {
    id: 1,
    city: 'New York',
    startCost: 540.0,
    endCost: 900.0,
    image: `${city01?.src}`,
  },
  {
    id: 2,
    city: 'Los Angeles',
    startCost: 520.0,
    endCost: 700.0,
    image: `${city02?.src}`,
  },
  {
    id: 3,
    city: 'San Francisco',
    startCost: 340.0,
    endCost: 600.0,
    image: `${city03?.src}`,
  },
  {
    id: 4,
    city: 'San Jose',
    startCost: 440.0,
    endCost: 1000.0,
    image: `${city04?.src}`,
  },
  {
    id: 5,
    city: 'Kansas City',
    startCost: 540.0,
    endCost: 9600.0,
    image: `${city05?.src}`,
  },
];
export const partnerData = [
  {
    id: 1,
    link: '',

    image: `${partner01?.src}`,
  },
  {
    id: 2,

    link: '',
    image: `${partner02?.src}`,
  },
  {
    id: 3,

    link: '',
    image: `${partner03?.src}`,
  },
  {
    id: 4,

    link: '',
    image: `${partner04?.src}`,
  },
  {
    id: 5,

    link: '',
    image: `${partner05?.src}`,
  },
  {
    id: 6,

    link: '',
    image: `${partner06?.src}`,
  },
  {
    id: 7,

    link: '',
    image: `${partner07?.src}`,
  },
];
