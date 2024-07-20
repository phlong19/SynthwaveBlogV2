import { FallbackProps } from "react-error-boundary";
import Button from "./Button";
import { IconHome2 } from "@tabler/icons-react";

function FallBackErrorBoundary({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="relative mx-auto flex h-screen max-w-full flex-col items-center justify-center gap-10 lg:max-w-[80%]">
      <h3 className="whitespace-pre-line font-medium">{error.message}</h3>
      <div className="w-44">
        <Button onClick={resetErrorBoundary} leftIcon={<IconHome2 className="z-20 text-white" />}>
          click here
        </Button>
      </div>
    </div>
  );
}

export default FallBackErrorBoundary;
