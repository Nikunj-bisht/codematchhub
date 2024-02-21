import React, { useEffect, useState } from "react";
import "./rightsection.css";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../config/firebaseConfig.ts";
import { Card } from "antd";

const { Meta } = Card;
const BlogSection = ({item}) => {
  return (
    <Card
      hoverable
      style={{ width: "25rem",overflow:'hidden',marginTop:30 }}
      cover={
        <img
          alt="example"
          style={{height:300,overflow:'hidden'}}
          src={item.img}
        />
      }
      // title={item.heading}
    >
      <Meta   title={item.heading}  /><br></br>
      <Meta title={item.description}  />

    </Card>
  );
};

function RightSection() {
  const [topQuizes, setTopQuizes] = useState([]);
  const [topBlogs,setTopBlogs] = useState([]);
  useEffect(() => {
    async function getTopQuizes() {
      const topTempQuizes = await getDocs(collection(db, "topquizs"));
      let temp: any = [];
      topTempQuizes.forEach((item) => temp.push(item.data()));
      setTopQuizes(temp);
    }
    async function getBlogs(){
       const topBlogs = await getDocs(collection(db,'languageblogs'));
       const temp = [];
       topBlogs.forEach((item)=>temp.push(item.data()));
       setTopBlogs(temp)
    }
    getTopQuizes();
    getBlogs()
  }, []);
  return (
    <div className="containerri">
      <div style={{ marginBottom: 20 }}>
        <h2 className="top1">Top Quizes</h2>
        <p className="topsub1">Top Trending Tech Quiz Collection.</p>
      </div>
      {topQuizes.length > 0 ? (
        topQuizes.map((item) => {
          return (
            <div className="inner2">
              <img
                
                style={{ width: 40, height: 40, borderRadius: 15 }}
                src={item.url}
              ></img>
              <div style={{ marginLeft: 20, justifyContent: "center" }}>
                <p className="nam21">{item.name} Quizes</p>
                <p className="des21">{item.description}</p>
              </div>
            </div>
          );
        })
      ) : (
        <></>
      )}
      <div style={{marginTop:60}}>
      <h2 className="top1">Blogs</h2>
      {
        topBlogs.map((item)=>{
          return (
<BlogSection item={item}/>
          )
        })
      }
      
      
      </div>
    </div>
  );
}

export { RightSection };
