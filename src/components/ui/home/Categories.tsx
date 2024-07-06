import { AspectRatio, Box, Flex, Image, SimpleGrid, Text } from "@mantine/core";
import Heading from "../Heading";
import { Link } from "react-router-dom";

interface Props {
  data: {
    link: string;
    name: string;
    displayName: string;
  }[];
}

function Categories({ data }: Props) {
  return (
    <Flex direction="column" my={12}>
      <Heading name="All categories">All categories</Heading>
      <SimpleGrid
        spacing={{ base: "sm", md: "md" }}
        cols={{ base: 1, xs: 2, md: 3, lg: 4 }}
      >
        {data.map((i, index) => (
          <Link
            to="/"
            className="clipped group overflow-hidden brightness-100 transition-all duration-300 hover:brightness-[0.85]"
            key={index}
          >
            <AspectRatio
              ratio={16 / 9}
              pos="relative"
              className="overflow-hidden"
              mx="auto"
            >
              <Image
                className="inset-0 h-full w-full transition-all duration-500 group-hover:scale-110"
                src={i.link}
              />

              <Flex justify="center" align="center" pos="absolute" inset={0}>
                <Text
                  c="white"
                  ta="center"
                  className="min-w-24 rounded-md bg-black"
                >
                  #{i.displayName}
                </Text>
              </Flex>
            </AspectRatio>
          </Link>
        ))}
      </SimpleGrid>
    </Flex>
  );
}

export default Categories;
