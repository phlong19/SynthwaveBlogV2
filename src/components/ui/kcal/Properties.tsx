import { Badge, Title } from "@mantine/core";

interface Properties {
  name: string;
  value: string | number;
  rate: 1 | 2 | 3;
  description: string;
}

function Properties() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-5 gap-x-10 bg-white px-5 py-8 overflow-hidden">
      {pro.map(({ name, description, value, rate }, index) => (
        <div key={index}>
          <Title order={3} fw={500}>
            {name}
          </Title>
          <div className="my-3 flex items-center justify-between">
            <Title order={1} fw={500}>
              {value}
            </Title>
            <Badge bg={rate > 1 ? "green" : "red"} size="md">
              {rate > 2
                ? "High Impact"
                : rate < 2
                  ? "Low Impact"
                  : "Medium Impact"}
            </Badge>
          </div>
          <p>{description}</p>
          {/* https://cdn. dribbble. com/userupload/13724216/file/original-e7650fa60d5737382c64ba1575b22dab.png?resize=1905x1429v */}
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
    rate: 2,
    description: "Average age or your open accounts",
  },
  {
    description: "Total open and closed accounts",
    name: "Total accounts",
    value: 28,
    rate: 1,
  },
];
