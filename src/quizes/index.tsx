import React from "react";
import "./indexpo.css";
import { QuizQuestion } from "./components/quizQuestion.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBroom,
  faPerson,
  faQuestion,
  faRestroom,
} from "@fortawesome/free-solid-svg-icons";
import Topics from "./components/accordion.tsx";
import { NavBar } from "../App.tsx";
import { RightSection } from "./components/rightSection.tsx";
import QuizRoomModal from "./components/quizRoomModal";
import { Button, Dropdown, MenuProps, Modal, Space } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import {useNavigate} from 'react-router-dom';


// Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
function HomeQuiz() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const history = useNavigate()
  function openModal() {
    setIsOpen(true);
  }
  const items: MenuProps['items'] = [
    {
      label: '1st menu item',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: '2nd menu item',
      key: '2',
      icon: <UserOutlined />,
    },
    {
      label: '3rd menu item',
      key: '3',
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: '4rd menu item',
      key: '4',
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];
  
  const menuProps = {
    items,
    onClick: ()=>{},
  };
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div style={{}}>
      <NavBar />
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          paddingRight: 20,
          paddingLeft: 20,
          marginBottom: 40,
        }}
      >
        <section>
          <h2></h2>
        </section>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            paddingTop: 12,
            paddingBottom: 12,
            paddingLeft: 20,
            paddingRight: 20,
            backgroundColor: "#0889D3",
            color: "white",
            borderRadius: 10,
            alignSelf: "flex-end",
            marginTop: 20,
            borderWidth: 0,
            cursor: "pointer",
            fontSize: 24,
          }}
        >
          Quiz Room
          <FontAwesomeIcon style={{ marginLeft: 12 }} icon={faPerson} />
        </button>
      </div>
      <div className="container1">
        <div
          style={{
            flex: 0.6,
            paddingLeft: 8,
            marginTop: 35,
            overflowY: "scroll",
            borderRight: 1,
            borderColor: "black",
          }}
        >
          <Topics />
        </div>
        <QuizQuestion />
        <div style={{ flex: 1 }}>
          <RightSection />
        </div>
      </div>
      <Modal
      //  style={{width:"40rem"}}
        open={modalIsOpen}
        style={{flexDirection:'row'}}

        styles={{body:{flexDirection:'row',display:'fl'},footer:{marginTop:70}}}       
        title="Select Quiz Room Options"
        onOk={()=>history('/quizroom')}
        onCancel={()=>setIsOpen(false)}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <Button>Custom Button</Button>
            <CancelBtn />
            <OkBtn />
          </>
        )}
      >
        <Dropdown  menu={menuProps}>
          
      <Button style={{margin:10}}>
        <Space>
          
          Select Language
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
    <Dropdown menu={menuProps}>
          
      <Button>
        <Space>
          Select Difficulty Level
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown><Dropdown menu={menuProps}>
          
          <Button>
            <Space>
              Number of Questions
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </Modal>
    </div>
  );
}

export { HomeQuiz };
