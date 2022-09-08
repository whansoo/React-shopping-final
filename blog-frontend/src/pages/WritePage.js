// import React from "react";
import Responsive from "../components/common/Responsive";
// import WriteActionButtons from "../components/write/WriteActionButtons";
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