import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import vs from "../assets/vs.png";
import { userinfo } from "../context";

function HeroScreen({ setRoomId, socket }) {
  const navigate = useNavigate();
  const { user, setUser } = useContext(userinfo);
  const [username, setusername] = useState("elon");

  const createRoom = (e) => {
    const id = uuid();
    setRoomId(id);
    let user_details = {
      roomid: id,
      username: username,
    };
    console.log("d", user_details);
    console.log("shrey");
    setUser(user_details);
    socket.emit("create_room", id);
    navigate(`/${id}`);
    console.log("user context", user);
  };

  return (
    <div className="flex justify-center items-center h-[100vh] w-full">
      <div
        className=" flex w-[80vw] h-[75vh] min-h-[80vh] rounded-xl overflow-hidden text-white justify-center items-center"
        style={{
          boxShadow: "0 10px 30px rgb(0 0 0 / 3%)",
          opacity: ".85",
          backgroundColor: "#17191a",
        }}
      >
        <div className="flex-auto  pr-12 pl-16">
          <h1 className=" py-8">Welcome to Aaja 1v1</h1>

          <div class="space-y-9">
            <header class="mb-3 text-2xl font-bold">Guest Name</header>
            <div class="">
              <div class="flex">
                <span class="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-500 border border-r-0 border-gray-300 rounded-l-md dark:bg-transparent dark:text-gray-400 ">
                  @
                </span>
                <input
                  type="text"
                  id="website-admin"
                  onChange={(e) => {
                    setusername(e.target.value);
                  }}
                  class="rounded-none rounded-r-lg bg-gray-50 border text-white  block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-transparent "
                  placeholder={username}
                />
              </div>
            </div>

            <button
              onClick={createRoom}
              class="w-full rounded-xl bg-[#121689] py-3 font-bold text-white hover:bg-opacity-60 active:translate-y-[0.125rem] "
            >
              LOGIN AS GUEST
            </button>
            <div class="flex items-center space-x-4">
              <hr class="w-full border border-gray-400" />
              <div class="font-semibold text-gray-400">OR</div>
              <hr class="w-full border border-gray-400" />
            </div>
            <footer>
              <div class="grid grid-cols-3 gap-2  justify-items-center ">
                <div className=" border-[0.5px] border-gray-400 p-2 w-[6rem] flex justify-center ">
                  <img
                    src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/google-logo.png"
                    className=" hover:transformscale-150"
                  />
                </div>
                <div className=" border-[0.5px] border-gray-400 p-2 w-[6rem] flex justify-center">
                  <img src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/github.png" />
                </div>
                <div className=" border-[0.5px] border-gray-400 p-2 w-[6rem] flex justify-center">
                  <img src="https://img.icons8.com/ios/50/FFFFFF/twitter--v1.png" />
                </div>
              </div>

              <div class="mt-8 text-sm text-gray-400 text-center">
                Made with Love
              </div>
            </footer>
          </div>
        </div>
        <div>
          <img src={vs} alt="" className="w-[44rem] h-full" />
        </div>
      </div>
    </div>
  );
}

export default HeroScreen;
