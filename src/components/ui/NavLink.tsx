import { NavLink as RLink } from "react-router-dom";
import {
  NavLink as MLink,
  NavLinkProps,
  PolymorphicComponentProps,
} from "@mantine/core";
import { useAppSelector } from "@/hooks/redux";

interface Props {
  children?: React.ReactNode;
  to?: string;
  onClick?: () => void;
  props?: PolymorphicComponentProps<"a", NavLinkProps>;
  label: string;
  tree?: boolean;
}

function NavLink({ tree = false, children, to, props, label, onClick }: Props) {
  const { theme } = useAppSelector((s) => s.darkMode);

  const properties = {
    onClick,
    ...props,
    label,
    className: `capitalize ${!tree ? "dark:hover:brightness-110" : ""}`,
    color: theme ? "blue" : "orange",
  };

  return !tree ? (
    <MLink {...properties} component={RLink} to={to!} />
  ) : (
    <MLink {...properties}>{children}</MLink>
  );
}

export default NavLink;
