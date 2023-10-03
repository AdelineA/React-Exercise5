import React from "react";

export default function ListItems(props) {
  return (
    <li className="list-none px-4 py-3 rounded bg-blue-100">
      {props.name} {props.head}
    </li>
  );
}
