import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from "../../../public/home/whats.jpg";

export default function Whatsapp() {

  return (
    <div>
      <FloatingWhatsApp 
      phoneNumber="+55 11 42930396"
      accountName=""
      chatMessage="Olá! Bem-vindo A MAYER, BASTOS & COSTA ADVOGADOS. Como posso ajudar hoje?"
      statusMessage="MAYER, BASTOS & COSTA"
      placeholder='Digite sua mensagem...'
      avatar={logo.src}
      />
</div>
  )
}

