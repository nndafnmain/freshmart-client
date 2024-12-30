import { Banner } from "@/components/body/Banner";
import { MobileNav } from "@/components/headers/MobileNav";

export default function Home() {
  return (
    <main>
      <div className="block md:hidden">
        <MobileNav />
      </div>
      <Banner />
    </main>
  );
}
