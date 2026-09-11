import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { UnderConstructionPage } from "@/pages/under-construction";

export function App() {
  return (
    <>
      <Header showNavigation={false} />
      <UnderConstructionPage />
      <Footer />
    </>
  );
}
