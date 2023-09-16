'use client'

import { CaretLeft, Clipboard } from '@phosphor-icons/react'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

interface ReideForm {
  pokemon: string
  stars: string
  openTime: string
  markedTime: string
  nickname: string
  level: number
  team: string
  pcMeta: number
  strongType: string
}

export default function Reide() {
  const { register, handleSubmit, setValue } = useForm<ReideForm>()
  const handleCopy = (data: ReideForm) => {
    console.log(data)
    const template = `
📢 Organização de Reide 📢
  
Pokemon: ${data.pokemon}
Estrelas: ${data.stars}
Horário de abertura: ${data.openTime}
Horário marcado: ${data.markedTime}

▶️ Participantes
Nickname - lvl - time (🔵🟡🔴)

1. ${data.nickname} - ${data.level} - ${data.level}
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 
10. 
11. 
12. 
13. 
14. 
15. 
16. 
17. 
18. 
19. 
20. 

▶️ Informações Extras

PC do 100%IV: ${data.pcMeta} PC
Tipagem forte: ${data.strongType}
`
    navigator.clipboard.writeText(template)
    toast.success('Copiado para área de transferência')
  }

  const MaskTime = (e: { target: { value: string } }) => {
    const inputValue = e.target.value
    const inputLength = inputValue.length

    if (inputLength >= 2) {
      const formattedValue = `${inputValue.slice(0, 2)}:${inputValue.slice(2)}`
      setValue('openTime', 'BANAAA')
      setValue('markedTime', formattedValue) // Aplica o mesmo formato a ambos os campos
    } else {
      setValue('openTime', inputValue)
      setValue('markedTime', inputValue)
    }
  }

  return (
    <main className="w-full h-full px-4 py-10 flex flex-col gap-12">
      <header>
        <Link href={'/'}>
          <CaretLeft size={'3rem'} />
        </Link>
      </header>
      <section className="w-full h-auto">
        <h1 className="text-6xl">Reide</h1>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(handleCopy)}
        >
          <div className="flex flex-col gap-2">
            <p className="mt-4">Informações da Reide:</p>
            <input
              className="w-full h-12 border rounded-lg pl-2 outline-none"
              type="text"
              placeholder="Pokemon"
              {...register('pokemon')}
            />
            <select
              id="stars"
              className="bg-white h-12 border rounded-lg px-2 block w-full outline-none text-gray-400"
              {...register('stars')}
            >
              <option className="text-lg" value="">
                Estrelas
              </option>
              <option value="⚜️">⚜️</option>
              <option value="⚜️⚜️">⚜️⚜️</option>
              <option value="⚜️⚜️⚜️">⚜️⚜️⚜️</option>
              <option value="⚜️⚜️⚜️⚜️">⚜️⚜️⚜️⚜️</option>
              <option value="⚜️⚜️⚜️⚜️⚜️">⚜️⚜️⚜️⚜️⚜️</option>
            </select>
            <div className="w-full flex gap-2">
              <input
                type="text"
                placeholder="Horário de Abertura"
                className="w-1/2 h-12 bg-white border px-2 rounded-lg outline-none"
                {...(register('openTime'),
                {
                  onChange: MaskTime,
                })}
              />
              <input
                type="text"
                placeholder="Horário Marcado"
                className="w-1/2 bg-white border px-2 rounded-lg outline-none"
                {...(register('markedTime'),
                {
                  onChange: MaskTime,
                })}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="mt-4">Informações do jogador:</p>
            <input
              className="w-full h-12 border rounded-lg pl-2 outline-none"
              type="text"
              placeholder="Nickname"
              {...register('nickname')}
            />
            <div className="w-full flex gap-2">
              <input
                type="number"
                placeholder="Level"
                className="w-1/2 h-12 bg-white border px-2 rounded-lg outline-none"
                {...register('level')}
              />
              <select
                id="stars"
                className="bg-white w-1/2 h-12 border rounded-lg px-2 block outline-none text-gray-400"
                {...register('team')}
              >
                <option className="text-lg" value="">
                  Time
                </option>
                <option value="🔵">🔵 Azul</option>
                <option value="🔴">🔴 Vermelho</option>
                <option value="🟡">🟡 Amarelo</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p>Informações extras (opcional)</p>
            <input
              className="w-full h-12 border rounded-lg pl-2 outline-none"
              type="number"
              placeholder="PC do IV 100%"
              {...register('pcMeta')}
            />
            <input
              className="w-full h-12 border rounded-lg pl-2 outline-none"
              type="text"
              placeholder="Tipagem forte"
              {...register('strongType')}
            />
          </div>
          <button className="w-full font-bold flex items-center justify-center  gap-1 h-16 bg-blue-white text-black rounded-lg custom-shadow">
            Copiar Template
            <Clipboard type="submit" size={'1.2rem'} />
          </button>
        </form>
      </section>
    </main>
  )
}
