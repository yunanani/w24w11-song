import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Container from './container.js'

const App = () => {
  const [builders, setBuilders] =useState([])
  useEffect(() => {
    const getBuilders = async () => {
      try {
        // 백엔드 API에서 데이터 가져오기
        const response = await axios.get('http://localhost:8080/api/builder'); // 백엔드 URL
        setBuilders(response.data); // 받아온 데이터로 상태 업데이트
      } catch (error) {
        console.error("Error fetching builders data:", error);
      }
    };
    getBuilders();
  }, []);

  return (
    <div>
      <Header />
      <Playlist title="보디빌더 소개" listBuilder={builders} />
    </div>
  );
};

const Header = () => {
  return (
    <h1>
      국내 탑 보디빌더들
    </h1>
  );
};

const Playlist = (props) => {
  return (
    <div className="playlist">
      <div className="playlist-title">{props.title}</div>
      {props.listBuilder.map(builder => 
        <Container key={builder.id} builder={builder} />
      )}
    </div>
  );
};

export default App;
  