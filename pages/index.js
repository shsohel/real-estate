// import Layouts from '@/components/layout';
// import BannerSection from '@/components/views/landing-page/banner-section';
// import BestPropertiesForRent from '@/components/views/landing-page/best-properties-for-rent';
// import BestPropertiesForSale from '@/components/views/landing-page/best-properties-for-sale';
// import BrandSection from '@/components/views/landing-page/brand-section';
// import DestinationsSection from '@/components/views/landing-page/destination-section';
// import ExplorePropertyTypes from '@/components/views/landing-page/explore-properties-type';
// import NewsLetterSection from '@/components/views/landing-page/news-letter-section';
// import SaleRentSection from '@/components/views/landing-page/sale-rent-type-section';
import dynamic from 'next/dynamic';

const Layouts = dynamic(() => import('@/components/layout'), { ssr: false });
const SectionOne = dynamic(
  () => import('@/components/views/landing-page/banner-section'),
  { ssr: false }
);
const SectionTwo = dynamic(
  () => import('@/components/views/landing-page/best-properties-for-sale'),
  { ssr: false }
);
const SectionThree = dynamic(
  () => import('@/components/views/landing-page/explore-properties-type'),
  {
    ssr: false,
  }
);
const SectionFour = dynamic(
  () => import('@/components/views/landing-page/best-properties-for-rent'),
  {
    ssr: false,
  }
);
const SectionFive = dynamic(
  () => import('@/components/views/landing-page/news-letter-section'),
  {
    ssr: false,
  }
);
const SectionSix = dynamic(
  () => import('@/components/views/landing-page/destination-section'),
  {
    ssr: false,
  }
);
const SectionSeven = dynamic(
  () => import('@/components/views/landing-page/sale-rent-type-section'),
  {
    ssr: false,
  }
);
const SectionEight = dynamic(
  () => import('@/components/views/landing-page/brand-section'),
  {
    ssr: false,
  }
);
export default function Home() {
  return (
    <Layouts>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
    </Layouts>
  );
}
