import {
  AnchorProps,
  Anchor as MAnchor,
  PolymorphicComponentProps,
} from "@mantine/core";
import { Link } from "react-router-dom";

function Anchor({
  children,
  to,
  props,
}: {
  props?: PolymorphicComponentProps<"a", AnchorProps>;
  children: React.ReactNode;
  to: string;
}) {
  return (
    <MAnchor {...props} to={to} component={Link}>
      {children}
    </MAnchor>
  );
}

export default Anchor;
