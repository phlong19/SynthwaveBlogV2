interface Props {
  name: string;
  order?: number;
  children: React.ReactNode;
  className?: string;
  fz?: string;
}

function Heading({
  name,
  order = 1,
  children,
  fz = "text-xl",
  className,
}: Props) {
  const Heading = `h${order}` as keyof JSX.IntrinsicElements;

  return (
    <Heading
      data-name={name}
      className={`title mx-0 my-4 font-cas font-bold leading-[1.4] ${fz} ${className}`}
    >
      {children}
    </Heading>
  );
}

export default Heading;
