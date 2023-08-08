import Layouts from '@/components/layout';
import BannerSection from '@/components/views/landing-page/banner-section';
import BestPropertiesForRent from '@/components/views/landing-page/best-properties-for-rent';
import BestPropertiesForSale from '@/components/views/landing-page/best-properties-for-sale';
import BrandSection from '@/components/views/landing-page/brand-section';
import DestinationsSection from '@/components/views/landing-page/destination-section';
import ExplorePropertyTypes from '@/components/views/landing-page/explore-properties-type';
import NewsLetterSection from '@/components/views/landing-page/news-letter-section';
import SaleRentSection from '@/components/views/landing-page/sale-rent-type-section';

export default function Home() {
  return (
    <Layouts>
      <BannerSection />
      <BestPropertiesForSale />
      <ExplorePropertyTypes />
      <BestPropertiesForRent />
      <NewsLetterSection />
      <DestinationsSection />
      <SaleRentSection />
      <BrandSection />
    </Layouts>
  );
}
