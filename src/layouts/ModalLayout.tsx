import { Modal, useModal } from "@himanshu-sorathiya/react-kit";
import DeleteModal from "../components/modals/DeleteModal.tsx";
import EditModal from "../components/modals/EditModal.tsx";

function ModalLayout() {
	const { id, data } = useModal();

	return (
		<Modal className="m-auto">
			{id === "delete" && <DeleteModal bar={data} />}
			{id === "edit" && <EditModal bar={data} />}
		</Modal>
	);
}

export default ModalLayout;
