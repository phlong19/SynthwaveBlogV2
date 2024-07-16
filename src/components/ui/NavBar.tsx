import { HoveredLink, Menu, MenuItem, ProductItem } from "./NavbarMenu";
import { cn } from "@/lib/utils";
import { Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { Link } from "react-router-dom";
import Actions from "./Actions";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [opened, { open, close }] = useDisclosure();

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-50 mx-auto max-w-full bg-white/30 font-cas shadow-md backdrop-blur-md",
        className,
      )}
    >
      <Menu setActive={setActive}>
        <div>
          <Link to={"/"}>logo</Link>
        </div>
        <div className="hidden flex-1 items-center justify-center gap-4 lg:flex">
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">
                Interface Design
              </HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="grid grid-cols-2 gap-10 p-4 text-sm">
              {productItems.map((item) => (
                <ProductItem key={item.title} {...item} />
              ))}
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
        </div>

        <Actions />

        {/* burger btn */}
        <button className="lg:hidden" onClick={open}>
          x
        </button>
      </Menu>

      {/* mobile drawer */}
      <Drawer
        size="xs"
        position="right"
        opened={opened}
        onClose={close}
        title="hi"
      >
        <Link to="/auth/login">login page</Link>
      </Drawer>
    </div>
  );
}

const productItems = [
  {
    title: "Algochurn",
    href: "https://algochurn.com",
    src: "https://assets.aceternity.com/demos/algochurn.webp",
    description: "Prepare for tech interviews like never before.",
  },
  {
    title: "Tailwind Master Kit",
    href: "https://tailwindmasterkit.com",
    src: "https://assets.aceternity.com/demos/tailwindmasterkit.webp",
    description:
      "Production ready Tailwind css components for your next project",
  },
  {
    title: "Moonbeam",
    href: "https://gomoonbeam.com",
    src: "https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png",
    description:
      "Never write from scratch again. Go from idea to blog in minutes.",
  },
  {
    title: "Rogue",
    href: "https://userogue.com",
    src: "https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png",
    description:
      "Respond to government RFPs, RFIs and RFQs 10x faster using AI",
  },
];
