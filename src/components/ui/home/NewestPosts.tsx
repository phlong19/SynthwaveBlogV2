import { Box } from "@mantine/core";
import Heading from "../Heading";
import { BentoGrid, BentoGridItem } from "../BentoGrid";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import style from "./NewestPosts.module.css";

interface Props {
  data: {
    className?: string | undefined;
    title: string;
    description?: React.ReactNode;
    thumb?: string | undefined;
    icon?: React.ReactNode;
    sider?: boolean | undefined;
  }[];
}

function NewestPosts({ data }: Props) {
  const autoplay = useRef(Autoplay({ delay: 4000 }));

  return (
    <Box>
      <Heading name="Newest Posts" order={3}>
        Newest Posts
      </Heading>
      <BentoGrid>
        {/* idk  */}
        <Carousel
          classNames={style}
          plugins={[autoplay.current]}
          slideGap={12}
          withIndicators
          className="rounded-xl bg-transparent shadow-lg hover:shadow-xl"
          height="100%"
        >
          {data.map((i, index) => (
            <Carousel.Slide key={index} className="h-full overflow-x-hidden">
              <BentoGridItem
                {...i}
                className="bg-white shadow-none hover:shadow-none"
              />
            </Carousel.Slide>
          ))}
        </Carousel>
        {data.slice(0, 6).map((i, index) => (
          <BentoGridItem
            key={index}
            {...i}
            className={index === 2 || index === 5 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </Box>
  );
}

export default NewestPosts;
