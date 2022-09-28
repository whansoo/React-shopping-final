import Responsive from "../components/common/Responsive";
import EditorContainer from "../containers/auth/write/EditorContainer";
import TagBoxContainer from "../containers/auth/write/TagBoxContainer";
import WriteActionButtonsContainer from "../containers/auth/write/WriteActionButtonsContainer";

const WritePage = () => {
    return (
        <Responsive>
            <EditorContainer/>
            <TagBoxContainer/>
            <WriteActionButtonsContainer/>
        </Responsive>
    )
};

export default WritePage;