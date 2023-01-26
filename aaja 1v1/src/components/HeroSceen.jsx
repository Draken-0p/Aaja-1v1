import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";

function HeroScreen({ setRoomId, socket }) {
  const navigate = useNavigate();

  const createRoom = () => {
    const id = uuid();
    setRoomId(id);
    socket.emit("create_room", id);
    navigate(`/${id}`);
  };

  return (
    <div>
      <div>
        <button onClick={createRoom}>Create Room</button>
      </div>
    </div>
  );
}

export default HeroScreen;
