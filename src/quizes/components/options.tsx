import React, { useState } from "react";
import "./options.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCircleDot,
  faRadio,
} from "@fortawesome/free-solid-svg-icons";
import type { RadioChangeEvent } from "antd";
import { Input, Radio, Space } from "antd";

interface OptionsProps {
  options: [];
  answer: number;
}

function Options(props: OptionsProps) {
  const { options = [], answer } = props;
  const [selected, setSelected] = useState(null);

  return (
    <div className="containerop">
      <Radio.Group
        size="large"
        onChange={() => {}}
        value={selected !== null ? selected : null}
      >
        <Space direction="vertical">
          {options.map((item, index) => {
            return (
              <div onClick={() => !selected && setSelected(index)}>
                <Radio
                  style={
                    selected === null
                      ? {
                          width: "78vh",
                          paddingBottom: 10,
                          paddingTop: 10,
                          alignItems: "center",
                          paddingLeft: 9,
                          borderRadius: 10,
                          backgroundColor: "#EFEFEF",
                        }
                      : answer === index
                      ? {
                          width: "78vh",
                          paddingBottom: 10,
                          paddingTop: 10,
                          alignItems: "center",
                          paddingLeft: 9,
                          borderRadius: 10,
                          backgroundColor: "#d1e7dd",
                          borderColor:"#5fcf80",
                          borderWidth:1
                        }
                      : {
                          width: "78vh",
                          paddingBottom: 10,
                          paddingTop: 10,
                          alignItems: "center",
                          paddingLeft: 9,
                          borderRadius: 10,
                          backgroundColor: "#fbc6c2",
                        }
                  }
                  value={index}
                >
                  {item}
                </Radio>

                {/* <p style={{ paddingLeft: 15 }}>
              {index === 0
                ? "A."
                : index === 1
                ? "B."
                : index === 2
                ? "C."
                : "D."}
            </p>{" "}
            <p className={"optionText"}>{item}</p> */}
              </div>
            );
          })}
        </Space>
      </Radio.Group>
    </div>
  );
}
//19B88E
export { Options };
