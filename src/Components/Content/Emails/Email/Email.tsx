import React from 'react'
import InteractiveItens from './InteractiveItens/InteractiveItens'


const Email = () => {
  const senderPlaceholder = "zequinha_destruidor"
  const emailTitlePlaceholder = "Novo Modo: ENXAME"
  const emailContentPlaceholder = "Para jogar o novo modo Enxame do LoL, abra o League of Legends, clique em “Jogar” e depois selecione o “Modo Enxame”, geralmente o último da lista. Feito isso, basta clicar em encontrar partida ou convidar amigos."
  return (
    <div className='flex justify-start border-solid border-[1px] border-[#ECEFF1] w-full h-[3.75rem] gap-[255px]'>
    <InteractiveItens sender={senderPlaceholder}/>
    <div className='flex items-center w-full'> <div className='w-[15%]'><p className='truncate w-[80%]'>{emailTitlePlaceholder}</p></div> <div className='w-full'><p className='w-full truncate'>{emailContentPlaceholder}</p></div></div>
    </div>
  )
}

export default Email