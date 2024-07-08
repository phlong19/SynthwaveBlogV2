import {
  ActionIcon,
  Container,
  Divider,
  Flex,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-10 bg-white px-4 pt-10">
      <Flex maw="60rem" justify="space-between">
        <Flex maw={200} direction="column">
          <p>logo</p>
          <Text size="xs" c="dimmed">
            Build fully functional accessible web applications faster than ever
          </Text>
        </Flex>
        <Flex justify="space-between" wrap="wrap">
          {data.map((group, index) => (
            <Stack key={index} miw={160} w={160}>
              <Text fw="bold">{group.title}</Text>
              {group.links.map(({ label, link }) => (
                <Link key={label} to={link}>
                  <Text fz="sm">{label}</Text>
                </Link>
              ))}
            </Stack>
          ))}
        </Flex>
      </Flex>

      <Divider my="xl" />
      <Flex justify="space-between" align="center">
        <Text c="dimmed" size="sm">
          © 2024 phl19.dev. All rights reserved.
        </Text>

        <Group gap={0} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram stroke={1.5} />
          </ActionIcon>
        </Group>
      </Flex>
    </footer>
  );
}

export default Footer;

const data = [
  {
    title: "About",
    links: [
      { label: "Features", link: "#" },
      { label: "Pricing", link: "#" },
      { label: "Support", link: "#" },
      { label: "Forums", link: "#" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "Contribute", link: "#" },
      { label: "Media assets", link: "#" },
      { label: "Changelog", link: "#" },
      { label: "Releases", link: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Join Discord", link: "#" },
      { label: "Follow on Twitter", link: "#" },
      { label: "Email newsletter", link: "#" },
      { label: "GitHub discussions", link: "#" },
    ],
  },
];
