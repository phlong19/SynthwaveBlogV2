import { Affix, Tooltip, Transition } from "@mantine/core";
import Button from "./Button";
import { IconChevronsUp } from "@tabler/icons-react";
import { useWindowScroll } from "@mantine/hooks";

function AffixButton() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Tooltip label="Scroll to top">
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              size="xs"
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              <IconChevronsUp className="z-20 w-9 text-white" size={18} />
            </Button>
          )}
        </Transition>
      </Affix>
    </Tooltip>
  );
}

export default AffixButton;
