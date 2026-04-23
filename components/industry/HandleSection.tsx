interface HandleItem {
  image: string;
  description: string;
}

interface HandleSectionProps {
  title?: string;
  items: HandleItem[];
}

export default function HandleSection({
  title = "What We Regularly Handle",
  items,
}: HandleSectionProps) {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-10">
        {title}
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index} className="text-center space-y-3">
            <div className="rounded-xl overflow-hidden shadow-sm">
              <img
                src={item.image}
                alt={item.description}
                className="w-full h-48 object-cover"
              />
            </div>

            <p className="text-xl font-bold text-darkBlue px-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
