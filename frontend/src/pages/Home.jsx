
import Hero from "../components/Hero";
import FeaturedWorkshops from "../components/FeaturedWorkshops";
import SkillCard from "../components/SkillCard";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWorkshops />

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-extrabold text-center">Discover Amazing Skills</h3>
          <p className="text-gray-600 text-center mt-3">
            From traditional crafts to modern technology - learn from passionate experts
          </p>

          {/* fake category dropdown for UI parity */}
          <div className="mt-8 flex justify-center">
            <select className="px-4 py-3 rounded-md border border-gray-200">
              <option>All Categories</option>
              <option>Programming</option>
              <option>Cooking</option>
              <option>Crafts</option>
            </select>
          </div>

          {/* sample skill card like the screenshot */}
          <div className="mt-10 grid gap-6">
            <SkillCard />
          </div>
        </div>
      </section>
    </>
  );
}
