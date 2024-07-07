import { BentoGridItem } from "@/components/ui/BentoGrid";
import Heading from "@/components/ui/Heading";
import Categories from "@/components/ui/home/Categories";
import FaqSection from "@/components/ui/home/FaqSection";
import NewestPosts from "@/components/ui/home/NewestPosts";
import { Box, Container, Flex, Stack } from "@mantine/core";
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
    <Container maw="1670px" className="!space-y-6 font-cas">
      {/* hero */}
      <Flex direction={{ base: "column", md: "row" }} justify="center" gap={20}>
        <NewestPosts data={items} />
        <Box>
          <Heading name="Trending posts">Trending posts</Heading>

          <Stack
            miw={{ base: "100%", md: "30%", lg: "20%" }}
            h="100%"
            display={{ base: "flex", sm: "grid", md: "flex" }}
            style={{ gridTemplate: "1fr 1fr / 1fr 1fr" }}
          >
            {items.slice(0, 6).map((i) => (
              <BentoGridItem key={i.id} {...i} sider />
            ))}
          </Stack>
        </Box>
      </Flex>
      {/* all cats */}
      <Categories data={cats} />

      <FaqSection />

      {/* news letter */}
    </Container>
  );
}

export default Home;

const items = [
  {
    id: Math.random().toString(),
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    thumb:
      "https://img-cdn.pixlr.com/image-generator/history/65772796905f29530816ea40/4ca9ba3d-c418-4153-a36a-77f4182236a7/medium.webp",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    tags: [
      { id: Math.random().toString(), value: "none" },
      { id: Math.random().toString(), value: "food" },
      { id: Math.random().toString(), value: "game" },
    ],
  },
  {
    id: Math.random().toString(),
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    thumb:
      "https://img-cdn.pixlr.com/image-generator/history/65772796905f29530816ea40/4ca9ba3d-c418-4153-a36a-77f4182236a7/medium.webp",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: Math.random().toString(),
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    thumb:
      "https://img-cdn.pixlr.com/image-generator/history/65772796905f29530816ea40/4ca9ba3d-c418-4153-a36a-77f4182236a7/medium.webp",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: Math.random().toString(),
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    thumb:
      "https://img-cdn.pixlr.com/image-generator/history/65772796905f29530816ea40/4ca9ba3d-c418-4153-a36a-77f4182236a7/medium.webp",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: Math.random().toString(),
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    thumb:
      "https://img-cdn.pixlr.com/image-generator/history/65772796905f29530816ea40/4ca9ba3d-c418-4153-a36a-77f4182236a7/medium.webp",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: Math.random().toString(),
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    thumb:
      "https://img-cdn.pixlr.com/image-generator/history/65772796905f29530816ea40/4ca9ba3d-c418-4153-a36a-77f4182236a7/medium.webp",
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: Math.random().toString(),
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    thumb:
      "https://img-cdn.pixlr.com/image-generator/history/65772796905f29530816ea40/4ca9ba3d-c418-4153-a36a-77f4182236a7/medium.webp",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

const cats = [
  {
    name: "yuta",
    link: "https://gcs.tripi.vn/public-tripi/tripi-feed/img/476318rVB/anh-mo-ta.png",
    displayName: "Yuta",
  },
  {
    name: "yuji",
    link: "https://static.wikia.nocookie.net/jjk/images/e/ef/Yuji_Itadori.jpg",
    displayName: "Yuji",
  },
  {
    name: "gojo",
    link: "https://static.wikia.nocookie.net/jjk/images/7/7a/Satoru_Gojo.jpg",
    displayName: "Gojo",
  },
  {
    name: "geto",
    link: "https://static.wikia.nocookie.net/jjk/images/0/0c/Suguru_Geto.jpg",
    displayName: "Geto",
  },
  {
    name: "character",
    link: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/d/db/Characters.jpg",
    displayName: "Character",
  },
  {
    name: "names",
    link: "https://images.unsplash.com/photo-1557844352-761f2565b35f",
    displayName: "Names",
  },
  {
    name: "sound",
    link: "https://images.unsplash.com/photo-1502767089025-6572583495c7",
    displayName: "Sound",
  },
  {
    name: "fucking",
    link: "https://i.sstatic.net/mT9Iq.jpg?s=256",
    displayName: "Fucking",
  },
];
