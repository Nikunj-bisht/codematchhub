import { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import React from "react";
import { db } from "../../config/firebaseConfig.ts";
import {
  CodeBlock,
  CopyBlock,
  atomOneDark,
  dracula,
  googlecode,
  github,
  codepen,
  sunburst,
} from "react-code-blocks";
import "./quizQuestions.css";
import { Options } from "./options.tsx";

const Actions = ({ item }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(item.like);
  function updateLike(id: string, initialLike) {
    const docRef = doc(db, "quiz", id);
    updateDoc(docRef, {
      like: initialLike + 1,
    }).then((data) => {
      setIsLiked(true);
      setLikeCount((prev) => prev + 1);
    });
  }
  return (
    <div
      style={{
        marginTop: 40,
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          flex: 0.3,
          justifyContent: "space-between",
        }}
      >
        <div
          onClick={() => !isLiked && updateLike(item.id, item.like)}
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <img
            src={
              isLiked
                ? require("../../assests/love.png")
                : require("../../assests/heart.png")
            }
            style={{
              width: 30,
              height: 30,
              cursor: "pointer",
              // marginTop: 8,
            }}
          ></img>
          <p style={{ color: "black", marginLeft: 6, fontSize: 18 }}>
            {likeCount} likes
          </p>
        </div>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={require("../../assests/chat.png")}
            style={{ width: 30, height: 30, cursor: "pointer" }}
          ></img>
          <p
            style={{
              color: "black",
              marginLeft: 6,
              fontSize: 18,
              flexDirection: "row",
              display: "flex",
            }}
          >
            {item.like} comments
          </p>
        </div>
      </div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={require("../../assests/solutions.png")}
          style={{ width: 30, height: 30, cursor: "pointer" }}
        ></img>
        <p style={{ color: "black", marginLeft: 6, fontSize: 25 }}>
          {item.like}
        </p>
      </div>
    </div>
  );
};

function QuizQuestion() {
  const [data, setData] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  useEffect(() => {
    async function getQuizdata() {
      let tempData = [];
      const queryShots = await getDocs(collection(db, "quiz"));
      queryShots.forEach((item) => {
        let temp = { ...item.data(), id: item.id };
        tempData.push(temp);
      });
      return tempData;
    }
    getQuizdata().then((dat) => setData(dat));
  }, []);
  console.log(data, "data");
  function updateLike(id: string, initialLike) {
    const docRef = doc(db, "quiz", id);
    updateDoc(docRef, {
      like: initialLike + 1,
    }).then((data) => setIsLiked(true));
  }
  return (
    <div className={"containerqui"}>
      <h1 style={{ fontSize: "3vw", marginBottom: 30 }}>
        Javascript Quiz - Promises
      </h1>

      {data && (
        <>
          {data?.map((item, index) => {
            return (
              <div className={"innerContainerqui"}>
                <h3 className={"questitle1"}>
                  Q. Mark the correct answer based on the syntax provided below:
                </h3>
                <CodeBlock
                  text={item?.code?.replaceAll("\\n", "\n")}
                  language={"javascript"}
                  showLineNumbers={true}
                  theme={github}
                  lineNumberContainerStyle={{
                    "font-style": "normal",
                    "margin-bottom": "10px",
                    "background-color": "#171E29",
                    "border-radius": "20px",
                  }}
                  //   customStyle={{"background-color":"red"}}
                  codeContainerStyle={{
                    "background-color": "#FBF9F1",
                    "border-width": "1px",
                    "font-size": "19px",
                    "border-radius": "20px",
                  }}
                  codeBlockStyle={{
                    "margin-bottom": "100px",
                    "background-color": "#FBF9F1",
                  }}
                  customStyle={{
                    "background-color": "#FBF9F1",
                    "border-radius": "20px",
                    "padding-top": "10px",
                    "padding-bottom": "10px",
                  }}
                />

                <Options answer={item.answer} options={item.options} />
                <Actions item={item} />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export { QuizQuestion };
