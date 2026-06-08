import { Modal, useModal } from "@himanshu-sorathiya/react-kit";
import DeleteModal from "../components/modals/DeleteModal.tsx";

function ModalLayout() {
	const { id, data } = useModal();

	return (
		<Modal className="m-auto">
			{id === "delete" && <DeleteModal bar={data} />}
		</Modal>
	);
}

export default ModalLayout;
