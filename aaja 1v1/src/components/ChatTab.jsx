import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { socket } from '../App'

const ChatTab = () => {
  const {id}  = useParams()
  
  useEffect(()=>{
  
    socket.emit('alluser', id)

  },[])
  return (
    <div className='bg-[#1e1e1e]'>
      ChatTab
    </div>
  )
}

export default ChatTab