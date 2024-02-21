import React, { useEffect, useRef, useState } from "react";
import type { CarouselProps, RadioChangeEvent } from "antd";
import { Carousel, Progress, Radio, Space, Steps } from "antd";
import { DotPosition } from "antd/es/carousel";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebaseConfig.ts";
import { CodeBlock, github, atomOneDark } from "react-code-blocks";
import "./quizroom.css";
import { Button, Divider, Flex } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const contentStyle: React.CSSProperties = {
  height: "150vh",
  color: "#fff",
  background: "#121212",
  flex: 1,
  display: "flex",
  flexWrap: "wrap",
};

function CodeSection({ code }) {
  return (
    <CodeBlock
      text={code?.replaceAll("\\n", "\n")}
      language={"javascript"}
      showLineNumbers={true}
      theme={atomOneDark}
      lineNumberContainerStyle={{
        "font-style": "normal",
        "margin-bottom": "10px",
        "background-color": "#171E29",
        "border-radius": "20px",
      }}
      //   customStyle={{"background-color":"red"}}
      codeContainerStyle={{
        "border-width": "1px",
        "font-size": "19px",
        "border-radius": "20px",
      }}
      codeBlockStyle={{
        "margin-bottom": "100px",
        "background-color": "#1D1C1E",
      }}
      customStyle={{
        "border-radius": "20px",
        "padding-top": "10px",
        "padding-bottom": "10px",
        "background-color": "#1D1C1E",
        width: "50rem",
        height: "30rem",
      }}
    />
  );
}
function Options({ options }) {
  return (
    <Radio.Group style={{ marginTop: 50 }} onChange={() => {}} value={0}>
      <Space direction="vertical">
        {options.map((item) => (
          <Radio className="radio" value={1}>
            {item}
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  );
}
function QuizRoom() {
  const [dotPosition, setDotPosition] = useState<DotPosition>("top");
  const [quizRoomData, setQuizRoomData] = useState([]);
  const carRef = useRef(null);
  useEffect(() => {
    async function getRoomQuiz() {
      const tempData = [];
      const dataQuery = query(
        collection(db, "quiz"),
        where("tags", "array-contains", "js")
      );
      const data = await getDocs(dataQuery);
      data.forEach((item) => tempData.push(item.data()));
      setQuizRoomData(tempData);
    }
    getRoomQuiz();
  }, []);

  const steps = [
    {
      title: "First",
      content: "First-content",
    },
    {
      title: "Second",
      content: "Second-content",
    },
    {
      title: "Last",
      content: "Last-content",
    },
    {
      title: "Last",
      content: "Last-content",
    },
    {
      title: "Last",
      content: "Last-content",
    },
    {
      title: "Last",
      content: "Last-content",
    },
    {
      title: "Last",
      content: "Last-content",
    },
    {
      title: "Last",
      content: "Last-content",
    },
    {
      title: "Last",
      content: "Last-content",
    },
    {
      title: "Last",
      content: "Last-content",
    },
    {
      title: "Last",
      content: "Last-content",
    },
  ];
  console.log(quizRoomData, "qr");
  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <div style={{ height: "150vh" }}>
      <Steps
        style={{
          paddingTop: 20,
          paddingBottom: 20,
          paddingLeft: 20,
          paddingRight: 20,
        }}
        current={4}
        items={items}
      />

      <Carousel dots={false} ref={carRef} dotPosition={dotPosition}>
        {quizRoomData.map((item) => {
          return (
            <div>
              <div style={contentStyle}>
                <div className="code">
                  <h2
                    style={{
                      textAlign: "left",
                      alignSelf: "flex-start",
                      paddingLeft: 30,
                      marginBottom: 30,
                    }}
                  >
                    What will be output of below code?
                  </h2>
                  <CodeSection code={item.code} />
                  <div
                    style={{
                      justifyContent: "space-around",
                      display: "flex",
                      width: "100%",
                      alignItems: "center",
                      paddingTop:20
                    }}
                  >
                    <Progress
                      type="circle"
                      percent={75}
                      format={(percent) => (
                        <p style={{ color: "white" }}>{100}</p>
                      )}
                    />
                    <Button
                      disabled={false}
                      onClick={() => carRef?.current?.prev()}
                      type="primary"
                      style={{
                        width: "20rem",
                        alignSelf: "flex-end",
                        justifySelf: "flex-end",
                        marginTop: 90,
                      }}
                      shape="round"
                      icon={<DownloadOutlined />}
                      size={"large"}
                    >
                      Next Question
                    </Button>
                  </div>
                </div>
                <div className="optionroom">
                  <p className="headop">Choose your correct Option:</p>
                  <Options options={item.options} />
                  <Button
                    disabled={false}
                    onClick={() => carRef?.current?.next()}
                    type="primary"
                    style={{
                      width: "30rem",
                      alignSelf: "flex-end",
                      justifySelf: "flex-end",
                      marginTop: 90,
                    }}
                    shape="round"
                    icon={<DownloadOutlined />}
                    size={"large"}
                  >
                    Next Question
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export { QuizRoom };
