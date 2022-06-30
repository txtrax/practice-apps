import React from 'react';
import Entry from './Entry.jsx';

const EntryList = (props) => (
  <div>
    {props.list.map(word => {
      return <Entry entry={word} key={word._id} onAdd={props.onAdd}/>
    })}
  </div>
)

export default EntryList;