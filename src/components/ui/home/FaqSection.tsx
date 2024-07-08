import { Accordion, Container, ThemeIcon } from "@mantine/core";
import Heading from "../Heading";
import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.";

function FaqSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="faq" style={{ minHeight: 300 }}>
      <Heading name="Frequently asked questions">FAQ</Heading>

      <Container maw="100%" mt={20} className="font-cas">
        <Accordion
          chevronPosition="right"
          chevronSize={26}
          variant="separated"
          styles={{
            label: { color: "var(--mantine-color-black)" },
            item: { border: 0 },
          }}
          chevron={
            <ThemeIcon radius="xl" size={26} bg="black" c="white">
              <IconPlus
                size={16}
                strokeWidth={2}
                className="transition-all duration-200 group-hover:rotate-90"
              />
            </ThemeIcon>
          }
        >
          {ques.map((q, index) => (
            <Accordion.Item
              onClick={() =>
                setActive((s) => (s === index + 1 ? 0 : index + 1))
              }
              className="group"
              key={index}
              value={q.value}
            >
              <Accordion.Control
                className={`${active === index + 1 ? "rounded-t-md !bg-slate-200 dark:!bg-slate-800" : "rounded-md"} transition-colors duration-300 hover:bg-slate-200 hover:dark:bg-slate-800`}
              >
                {q.ques}
              </Accordion.Control>
              <Accordion.Panel
                className={`${active === index + 1 ? "rounded-b-md" : ""} bg-slate-50 text-sm italic text-zinc-600 shadow-lg`}
              >
                {placeholder}
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}

export default FaqSection;

const ques = [
  { value: "reset-password", ques: "How can I reset my password?" },
  { value: "account", ques: "Can I create more than one account?" },
  { value: "sub", ques: "How can I subcribe to monthly newletter?" },
  { value: "credit", ques: "Do you store credit card information securely?" },
  { value: "sell", ques: "Do you sell user's data?" },
];
