import { Modal } from "@mantine/core";

interface Props {
  close: () => void;
  opened: boolean;
}

function AdvancedSearch({ close, opened }: Props) {
  return (
    <Modal opened={opened} onClose={close} fullScreen>
      <Modal.Body className="fixed inset-0 flex items-center justify-center">
        <p>hi</p>
      </Modal.Body>
    </Modal>
  );
}

export default AdvancedSearch;
