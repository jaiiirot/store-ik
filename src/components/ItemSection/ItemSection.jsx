import { Carousel } from "@material-tailwind/react";

function ItemSection() {
  const callouts = [
    [
      {
        name: "Desk and Office",
        description: "Work from home accessories",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
        imageAlt:
          "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
        href: "#",
      },
      {
        name: "Self-Improvement",
        description: "Journals and note-taking",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
        imageAlt:
          "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
        href: "#",
      },
      {
        name: "Travel",
        description: "Daily commute essentials",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
        imageAlt:
          "Collection of four insulated travel bottles on wooden shelf.",
        href: "#",
      },
      {
        name: "Desk and Office",
        description: "Work from home accessories",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
        imageAlt:
          "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
        href: "#",
      },
      {
        name: "Self-Improvement",
        description: "Journals and note-taking",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
        imageAlt:
          "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
        href: "#",
      },
    ],
    [
      {
        name: "Travel",
        description: "Daily commute essentials",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
        imageAlt:
          "Collection of four insulated travel bottles on wooden shelf.",
        href: "#",
      },
      {
        name: "Self-Improvement",
        description: "Journals and note-taking",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
        imageAlt:
          "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
        href: "#",
      },
      {
        name: "Travel",
        description: "Daily commute essentials",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
        imageAlt:
          "Collection of four insulated travel bottles on wooden shelf.",
        href: "#",
      },
      {
        name: "Desk and Office",
        description: "Work from home accessories",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
        imageAlt:
          "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
        href: "#",
      },
      {
        name: "Self-Improvement",
        description: "Journals and note-taking",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
        imageAlt:
          "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
        href: "#",
      },
    ],
  ];

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-6xl py-16 lg:max-w-none ">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:space-y-0">
            <Carousel
              className="overflow-hidden my-carrucel w-full"
              loop
              autoplay
              autoplayDelay={5000}
            >
              {callouts.map((count,i) => {
                return (
                  <div key={i} className="lg:grid lg:grid-cols-5 lg:gap-x-4 lg:grid-flow-row w-max mx-auto">
                    {count.map((callout,i) => {
                      return (
                        <div
                          key={i}
                          className="group relative cursor-pointer"
                        >
                          <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <img
                              alt={callout.alt}
                              src={callout.imageSrc}
                              className="absolute inset-0 h-full w-full object-cover"
                            />

                            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                              <div className="p-4 sm:p-6">
                                <time
                                  dateTime="2022-10-10"
                                  className="block text-xs text-white/90"
                                >
                                  $111111
                                </time>

                                <span href="#">
                                  <h3 className="mt-0.5 text-lg text-white">
                                    {callout.name}
                                  </h3>
                                </span>

                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                  {callout.description}
                                </p>
                              </div>
                            </div>
                          </article>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemSection;
