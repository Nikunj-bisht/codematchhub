import React, { useRef, useState } from "react";
import { Collapse, Select } from "antd";
import { ExpandIconPosition } from "antd/es/collapse/Collapse";

function getListUi(topics) {
  return topics.map((item) => (
    <p style={{ paddingTop: 10, paddingBottom: 10, cursor: "pointer" }}>
      {item}
    </p>
  ));
}

const it = [
  {
    key: "12",
    label: "Javascript",
    children: getListUi([
      "All",
      "Functions",
      "Promise",
      "Closures",
      "Call Stack",
      "this",
      "call,bind and apply",
      "Message queue and Event loop",
    ]),
  },
  {
    uuid: "122",
    label: "Java",
    children: getListUi([
      "Hello from",
      "Promise",
      "Closures",
      "Prototype",
      "this",
      "Closures",
      "Closures",
      "Closures",
    ]),
  },
  {
    uuid: "1222",
    label: "Python",
    children: getListUi([
      "Hello from",
      "Promise",
      "Closures",
      "Prototype",
      "this",
      "Closures",
      "Closures",
      "Closures",
    ]),
  },
  {
    uuid: "122222",
    label: "React",
    children: getListUi([
      "All",
      "Promise",
      "Closures",
      "Prototype",
      "this",
      "Closures",
      "Closures",
      "Closures",
    ]),
  },
];

export default function Topics() {
  const [current, setCurrent] = useState(0);
  const [items, setItems] = useState(it);
  const [expandIconPosition, setExpandIconPosition] =
    useState<ExpandIconPosition>("start");

  return (
    <Collapse
      defaultActiveKey={[0,1,2]}
      onChange={() => {}}
      expandIconPosition={expandIconPosition}
      items={items}
    />
  );
}
