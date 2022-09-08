import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TagBox1 from "../../components/productwrite/Tag";
import { changeField } from "../../modules/product";



const TagBoxContainer = () => {
   const dispatch = useDispatch();
   const tags = useSelector(state => state.write.tags);

   const onChangeTags = nextTags => {
    dispatch(
        changeField({
            key: 'tags',
            value: nextTags,
        }),
    );
   };

   return <TagBox1 onChangeTags={onChangeTags} tags={tags} />;
};

export default TagBoxContainer;
