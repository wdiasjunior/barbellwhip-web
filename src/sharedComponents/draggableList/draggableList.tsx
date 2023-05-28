import React, { useState } from 'react';

import './draggableList.css';

import DraggableListItem from './draggableListItem';

const DraggableList = (props) => {

  const [dragStartIndex, setDragStartIndex] = useState(null);

  const onDragStart = (index) => {
    setDragStartIndex(index);
  }

  const onDrop = (dropIndex) => {
    const dragItem = props.data[dragStartIndex];
    let list = [...props.data];
    list.splice(dragStartIndex, 1);

    let newList = [];

    if(dragStartIndex < dropIndex) {
      newList = [
        ...list.slice(0, dropIndex - 1),
        dragItem,
        ...list.slice(dropIndex - 1, list.length)
      ];
    } else {
      newList = [
        ...list.slice(0, dropIndex),
        dragItem,
        ...list.slice(dropIndex, list.length)
      ];
    }
    props.onDragEnd(newList, dragStartIndex, dropIndex);
  }

  return (
    <ul className="draggable-list">
      {
        props?.data?.map((item, index) => {
          return (
            <DraggableListItem
              key={index}
              index={index}
              onDragStart={(index) => onDragStart(index)}
              onDrop={(index) => onDrop(index)}
            >
              {/*week {index + 1}*/}
              {props.renderItemContent(item, index)}
            </DraggableListItem>
          )
        })
      }
      {/*
          add last item so you can drag item to last position
          last item dont need onDragStart because it can not be draged
      */}
      <DraggableListItem
        key={props.data?.length}
        index={props.data?.length}
        draggable={false}
        onDrop={(index) => onDrop(index - 1)}
      />
    </ul>
  );
}

export default DraggableList;
