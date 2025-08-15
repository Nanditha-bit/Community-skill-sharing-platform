import WorkshopCard from "./WorkshopCard";

export default function FeaturedWorkshops() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center">Featured Workshops</h2>

        <div className="mt-10 grid place-items-start">
          {/* left-align the card like the screenshot */}
          <WorkshopCard />
        </div>
      </div>
    </section>
  );
}
