import Layouts from '@/components/layout';
import BannerSection from '@/components/views/banner-section';
import BestPropertiesForRent from '@/components/views/best-properties-for-rent';
import BestPropertiesForSale from '@/components/views/best-properties-for-sale';
import DestinationsSection from '@/components/views/destination-section';
import ExplorePropertyTypes from '@/components/views/explore-properties-type';
import NewsLetterSection from '@/components/views/news-letter-section';

export default function Home() {
  return (
    <Layouts>
      <BannerSection />
      <BestPropertiesForSale />
      <ExplorePropertyTypes />
      <BestPropertiesForRent />
      <NewsLetterSection />
      <DestinationsSection />
    </Layouts>
  );
}
