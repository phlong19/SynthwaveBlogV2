interface Props {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: Props) {
  return <div>{children}</div>;
}

export default ProtectedRoute;
