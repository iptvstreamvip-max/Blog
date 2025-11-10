import { GlobeRenderer } from "@/components/globe-renderer";


export default async function Home() {
  return (
    <div className="px-8 lg:px-16 space-y-20">
      {/* Hero Section */}
      <section className="">
        <GlobeRenderer />
      </section>
    </div>
  );
}
