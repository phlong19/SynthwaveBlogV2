import { NavLink as RLink } from "react-router-dom";
import {
  NavLink as MLink,
  NavLinkProps,
  PolymorphicComponentProps,
} from "@mantine/core";

interface Props {
  children?: React.ReactNode;
  to?: string;
  props?: PolymorphicComponentProps<"a", NavLinkProps>;
  label: string;
  tree?: boolean;
}

function NavLink({ tree = false, children, to, props, label }: Props) {
  return !tree ? (
    <MLink
      {...props}
      className="capitalize dark:hover:brightness-110"
      label={label}
      component={RLink}
      to={to!}
    />
  ) : (
    <MLink {...props} label={label} className="capitalize">
      {children}
    </MLink>
  );
}

export default NavLink;
