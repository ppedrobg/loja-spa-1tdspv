import React from 'react'
import Link from 'next/link'

export default function Cabecalho() {
  return (
    <div>
        <ul>
        <li><Link href="/produtos/calca">CALÇA</Link></li>
        <li><Link href="/produtos/camisa">CAMISA</Link></li>
        <li><Link href="/produtos/tenis">TÊNIS</Link></li>
        </ul>
    </div>    
  )
}
