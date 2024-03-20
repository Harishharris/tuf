import { FormPage } from '@/components/form';
import HeroPage from '@/components/hero-page';

export default function Home() {
  return (
    <main className="mb-28">
      <HeroPage />
      <div className="m-auto w-[40%]">
        <FormPage />
      </div>
    </main>
  );
}
