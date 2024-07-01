import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import Heading from "@/components/ui/Heading";
import { Box, Container, Flex, Stack, Title } from "@mantine/core";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

function Home() {
  return (
    <Container miw={{ base: "100%", lg: "950px", xl: "1200px" }}>
      {/* hero */}
      <Flex direction={{ base: "column", md: "row" }} gap={20}>
        <Box>
          <Heading name="Newest Posts" order={3}>
            Newest Posts
          </Heading>
          <BentoGrid>
            {items.map((i, index) => (
              <BentoGridItem
                key={index}
                {...i}
                className={index === 3 || index === 6 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        </Box>
        <Box>
          <Heading name="Trending posts" order={3}>
            Trending posts
          </Heading>

          <Stack
            miw={{ base: "100%", md: "30%", lg: "20%" }}
            mt={15}
            h="100%"
            display={{ base: "flex", sm: "grid", md: "flex" }}
            style={{ gridTemplate: "1fr 1fr / 1fr 1fr" }}
          >
            {items.slice(0, 6).map((i, index) => (
              <BentoGridItem key={index} {...i} sider />
            ))}
          </Stack>
        </Box>
      </Flex>
      {/* all posts */}

      {/* all cat */}

      {/* tags */}

      {/* news letter */}
    </Container>
  );
}

export default Home;

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    thumb:
      "https://img-cdn.pixlr.com/image-generator/history/65772796905f29530816ea40/4ca9ba3d-c418-4153-a36a-77f4182236a7/medium.webp",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    thumb:
      "https://img-cdn.pixlr.com/image-generator/history/65772796905f29530816ea40/4ca9ba3d-c418-4153-a36a-77f4182236a7/medium.webp",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    thumb:
      "https://img-cdn.pixlr.com/image-generator/history/65772796905f29530816ea40/4ca9ba3d-c418-4153-a36a-77f4182236a7/medium.webp",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    thumb:
      "https://img-cdn.pixlr.com/image-generator/history/65772796905f29530816ea40/4ca9ba3d-c418-4153-a36a-77f4182236a7/medium.webp",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    thumb:
      "https://img-cdn.pixlr.com/image-generator/history/65772796905f29530816ea40/4ca9ba3d-c418-4153-a36a-77f4182236a7/medium.webp",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    thumb:
      "https://img-cdn.pixlr.com/image-generator/history/65772796905f29530816ea40/4ca9ba3d-c418-4153-a36a-77f4182236a7/medium.webp",
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    thumb:
      "https://img-cdn.pixlr.com/image-generator/history/65772796905f29530816ea40/4ca9ba3d-c418-4153-a36a-77f4182236a7/medium.webp",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
