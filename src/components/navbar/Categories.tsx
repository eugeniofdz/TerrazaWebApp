"use client";

import { TbSun } from "react-icons/tb";
import Container from "../Container";
import { GiBarn, GiPoolDive } from "react-icons/gi";
import { MdMeetingRoom } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    slug: "terrace_rooftop",
    label: "Terrace",
    es: "Terraza",
    icon: TbSun,
    description: "Open-air terrace for birthdays, BBQs, and small gatherings.",
  },
  {
    slug: "pool_terrace",
    label: "Pool",
    es: "Alberca",
    icon: GiPoolDive,
    description:
      "Venues with a pool; ideal for summer parties and family events.",
  },
  {
    slug: "indoor_hall",
    label: "Hall",
    es: "Salón",
    icon: MdMeetingRoom,
    description:
      "Fully indoor hall; weather-proof and suitable for formal events.",
  },
  {
    slug: "ranch_quinta",
    label: "Quinta",
    es: "Quinta / Rancho",
    icon: GiBarn,
    description:
      "Large outdoor ranch/quinta, usually with palapa and garden areas.",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
    pt-4
    flex
    flex-row
    items-center
    justify-between
    overflow-x-auto
    "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
