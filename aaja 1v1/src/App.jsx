import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroScreen from "./components/HeroSceen";

import io from "socket.io-client";

const socket = io(`http://localhost:5000/`);

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [userName, setUserName] = useState(null);
  const [roomId, setRoomId] = useState(null);

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    return () => {
      socket.off("connect");
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HeroScreen
                setRoomId={setRoomId}
                roomId={roomId}
                socket={socket}
              />
            }
          />
          <Route path="/:id" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
