'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ListPassengers () {
  const [passengers, setPassengers] = useState([{
      name: 'Renato',
      email: '8Jpjv@example.com',
      phone: '11 99999-9999'
    },
    {
      name: 'Renato',
      email: '8Jpjv@example.com',
      phone: '11 99999-9999'
    }
  ])

  return (
    <div className="overflow-x-auto">
      <h1 className="text-3xl font-bold text-center my-4 bg-transparent">Lista de Pessoas Passageiras</h1>

      <div className='flex justify-start items-center'>
        <Link href="/passengers/add" className="bg-[#0C6D18] text-white px-4 py-2 rounded mb-4">
          Adicionar passageiro
        </Link>
      </div>
      

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-[#0C6D18] text-gray-200">Nome</th>
            <th className="px-4 py-2 bg-[#0C6D18] text-gray-200">E-mail</th>
            <th className="px-4 py-2 bg-[#0C6D18] text-gray-200">Telefone</th>
          </tr>
        </thead>
        <tbody>
          {passengers.map((passenger) => (
            <tr key={passenger.email}>
              <td className="border px-4 py-2">{passenger.name}</td>
              <td className="border px-4 py-2">{passenger.email}</td>
              <td className="border px-4 py-2">{passenger.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}