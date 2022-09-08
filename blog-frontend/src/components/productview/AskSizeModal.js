import SizeModal from "../common/SizeModal";

const AskSizeModal = ({ visible, onConfirm, onCancel }) => {
    return (
        <SizeModal
        visible={visible}
        description= "/image/size.jpg"
        onConfirm={onConfirm}
        onCancel={onCancel}
        />
    );
};

export default AskSizeModal;