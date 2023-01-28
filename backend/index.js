//Import Statements
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';
import { Server } from "socket.io";


//Additional Config
dotenv.config();
const PORT = process.env.PORT;
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});


//Middlewares
app.use(cors())

//Main Routes
app.use("/", (req, res) => {
    res.send("Sever is Working")
})

//Server Listen
let room = []
let userinroom =[]

io.on('connection', async (socket) => {
    console.log('a user connected', socket.id);


    socket.on("create_room", (anotherSocketId) => {
        console.log(anotherSocketId)
        socket.join(anotherSocketId);
    });

    socket.on('alluser',(e)=>{
            console.log("pram",e)
           
    })

    socket.on('disconnect',()=>{

    })

});


server.listen(PORT, () => {
    console.log(`listening on :${PORT}`);
});
