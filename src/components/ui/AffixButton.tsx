import { Affix, Transition } from "@mantine/core";
import Button from "./Button";
import { IconArrowUp } from "@tabler/icons-react";
import { useWindowScroll } from "@mantine/hooks";

function AffixButton() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <Button size="xs"
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
            leftIcon={<IconArrowUp className="z-20 text-white" size={18} />}
          >
            Scroll to top
          </Button>
        )}
      </Transition>
    </Affix>
  );
}

export default AffixButton;
