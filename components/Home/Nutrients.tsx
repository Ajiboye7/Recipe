"use client"
import Link from "next/link";

const Nutrients = () => {
  const Nutrients = [
    {
      id: 1,
      title: "fat",
      details:
        "Fats are essential nutrients that provide energy, support cell growth, protect organs, and help the body absorb certain vitamins.",
      route: "nutrients/fat",
    },

    {
      id: 2,
      title: "calories",
      details:
        "Calories are units of energy derived from food and beverages. They are essential for fueling bodily functions, physical activity, and maintaining overall health. ",
      route: "nutrients/Calories",
    },

    {
      id: 3,
      title: "carbonhydrate",
      details:
        "Carbohydrates are the body's primary source of energy. They are found in foods like grains, fruits, vegetables, and legumes, and are broken down into glucose.",
      route: "nutrients/carbonhydrate",
    },

    {
      id: 4,
      title: "protein",
      details:
        "Proteins are vital for building and repairing tissues, producing enzymes and hormones, and supporting immune function.",
      route: "nutrients/protein",
    },
  ];
  return (
    <div className="grid gap-2 grid-cols-4 text-center ">
      {Nutrients.map((nutrient) => (
        <div key={nutrient.id} className="mt-3 card flex flex-col justify-between">
          <h2 className="mb-4">{nutrient.title}</h2>
          <p className="">{nutrient.details}</p>
          <Link href={nutrient.route}>
            <button className="mt-6">
              <p>Explore</p>
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Nutrients;
