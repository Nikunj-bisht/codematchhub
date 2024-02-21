import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './home/index.tsx';
import { HomeQuiz } from './quizes/index.tsx';
import { QuizRoom } from './quizroom/index.tsx';
import Sample from './quizes/sample.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
     
    ]
  }, {
    path:"quiz",
    element:<HomeQuiz/>
  },{
    path:"quizroom",
    element:<QuizRoom/>
  },{
    path:"madhuri",
    element:<Sample/>
  }
]); 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
