import { Button, Flex, Title } from "@mantine/core";
import { default as CustomButton } from "@/components/ui/Button";

function Chart() {
  return (
    <div className="text-center dark:text-white">
      <Title>Hello, Hagen</Title>
      <Title fw="400">Here is your kcal rate ;)</Title>

      <Flex mx="auto" justify="center" mt={12} gap={5}>
        <Button>TransUnion</Button>
        <Button>Equifax</Button>
        <Button>Experian</Button>
      </Flex>

      <div className="h-60 bg-red-300 my-5 text-white">chart</div>

      <div className="mx-auto mt-8">
        <CustomButton>Update your credit points</CustomButton>
      </div>
    </div>
  );
}

export default Chart;
