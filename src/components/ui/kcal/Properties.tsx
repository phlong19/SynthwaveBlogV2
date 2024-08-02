import { Badge, Title } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import slugify from "slugify";

interface Properties {
  name: string;
  value: string | number;
  rate: 1 | 2 | 3;
  description: string;
}

function Properties() {
  return (
    <div className="mt-3 grid grid-cols-3 grid-rows-2 gap-5 gap-x-10 overflow-hidden bg-light px-5 py-8">
      {pro.map(({ name, description, value, rate }, index) => (
        <div key={index}>
          <div className="flex items-center justify-between">
            <Title order={3} fw={500}>
              {name}
            </Title>
            <Link to={slugify(name.toLowerCase())}>
              <IconArrowUpRight size={20} />
            </Link>
          </div>
          <div className="my-3 flex items-center justify-between">
            <Title order={1} fw={500}>
              {value}
            </Title>
            <Badge
              bg={rate > 1 ? "forestgreen" : "salmon"}
              className="!rounded-2xl"
              size="md"
              fw={500}
              tt="capitalize"
              py={20}
            >
              {rate > 2
                ? "High Impact"
                : rate < 2
                  ? "Low Impact"
                  : "Medium Impact"}
            </Badge>
          </div>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
}

export default Properties;

const pro: Properties[] = [
  {
    name: "Payment history",
    value: "100%",
    rate: 3,
    description: "Percentage of payments you've made on time",
  },
  {
    name: "Credit card use",
    value: "2%",
    rate: 3,
    description: "How much credit you've using compared to your total limits",
  },
  {
    name: "Credit age",
    value: "7yrs",
    rate: 1,
    description: "Average age or your open accounts",
  },
  {
    description: "Total open and closed accounts",
    name: "Total accounts",
    value: 28,
    rate: 1,
  },
  {
    name: "Something",
    rate: 2,
    value: "NaN",
    description: "you are not Suguru, my soul know it",
  },
  {
    name: "Yuji",
    rate: 3,
    value: "peak",
    description: "Domain Expansion",
  },
];
