import { NextResponse } from "next/server";

export async function GET() {
  const queijos = [
    {
      id: 1,
      nome: "Leite",
      preco: 3.5,
      categoria: "Laticínios",
      descricao: "Leite integral",
      imagem: "https://www.paodeacucar.com/img/uploads/1/100/547100.png",
    },
    {
      id: 2,
      nome: "Queijo",
      preco: 5.5,
      categoria: "Laticínios",
      descricao: "Queijo Minas",
      imagem: "https://www.paodeacucar.com/img/uploads/1/100/547100.png",
    },
    {
      id: 3,
      nome: "Iogurte",
      preco: 2.5,
      categoria: "Laticínios",
      descricao: "Iogurte Natural",
      imagem: "https://www.paodeacucar.com/img/uploads/1/100/547100.png",
    },
    {
      id: 4,
      nome: "Manteiga",
      preco: 4.5,
      categoria: "Laticínios",
      descricao: "Manteiga",
      imagem: "https://www.paodeacucar.com/img/uploads/1/100/547100.png",
    },
    {
      id: 5,
      nome: "Requeijão",
      preco: 6.5,
      categoria: "Laticínios",
      descricao: "Requeijão",
      imagem: "https://www.paodeacucar.com/img/uploads/1/100/547100.png",
    },

  ];

  return NextResponse.json(queijos);
}