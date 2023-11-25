import { useState, useEffect } from 'react';
import Filme from './../filme/Filme';
import axios from 'axios';
import './Main.css';

type FilmeType = {
  id: number;
  titulo: string;
  sinopse: string;
  imagem: string;
};

const URL_API = "http://localhost:3000/filmes";

export default function Main() {
  const [texto, setTexto] = useState('');
  const [filminhos, setFilminhos] = useState<FilmeType[]>([]);

  useEffect(() => {
    const buscaFilminhos = async () => {
      try {
        const resposta = await axios.get<FilmeType[]>(URL_API, {
          headers: {
            Authorization: import.meta.env.VITE_API_KEY,
          },
        });
        setFilminhos(resposta.data);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    buscaFilminhos();
  }, []);

  function TrataTexto(e: React.ChangeEvent<HTMLInputElement>) {
    setTexto(e.target.value);
  }


  const filmesLocais: FilmeType[] = [
    {
      id: 1,
      titulo:'Monitoria 2022',
      sinopse:'Ficava à disposição para tirar as dúvidas e ajudar alguns alunos com dificuldades. Cada monitoria era realizada em um determinado horário, e somente para uma disciplina determinada.',
      imagem:'/monitoria.jpg',
    },
    {
      id: 2,
      titulo:'Semana do Meio Ambiente 2023',
      sinopse:'Participei do Minicurso - Propagação de plantas por métodos assexuados. O curso abordou o tema das técnicas de propagação de plantas via assexuada, tais como: enxertia por gemas, estacas e alporquias.',
      imagem:'/semana-meio-ambiente.png',
    },
    {
      id: 3,
      titulo:'Semana de Ciência e Tecnologia 2022',
      sinopse:'Tiveram palestras, oficinas, mesas-redondas, além das Feiras de Ciência e Tecnologia, e espaços para apresentações de trabalhos científicos.',
      imagem:'/ciencia-e-tecnologia.png',
    },
    {
      id: 5,
      titulo:'Festival de Arte e Cultura 2022',
      sinopse:'Houveram palestras, oficinas, minicursos e rodas de conversa. Teve apresentações de trabalhos de estudantes dos ensino fundamental, ensino médio e técnico integrado de nível médio, de escolas públicas e privadas.',
      imagem:'/arte-e-cultura.jpg',
    },
  ];

 
  const todosOsFilmes: FilmeType[] = [...filminhos, ...filmesLocais];

  return (
    <>
      <div className="campo_pesquisa">
        <p>Busque um Projeto</p>
        <input
          type="text"
          className="botao_pesquisa"
          placeholder="Pesquise um Título"
          onChange={TrataTexto}
        />
        {texto && <p>Resultados Para: {texto} </p>}
      </div>
      <main className="content-main">
        {todosOsFilmes
          .filter((filme) => filme.titulo.toLowerCase().includes(texto))
          .map((filme) => (
            <Filme
              key={filme.id}
              sinopse={filme.sinopse}
              titulo={filme.titulo}
              imagem={filme.imagem}
            />
          ))}

                
                {/* <Filme titulo='Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/barbie.png'
                />
                <Filme titulo='Filme Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser.'
                    imagem='/KEN.png'
                />
                <Filme titulo='Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/barbie.png'
                />
                <Filme titulo='Filme Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/boneca.jpg'
                />
                <Filme titulo='Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/barbie.png'
                />
                <Filme titulo='Filme Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/boneca.jpg'
                />
                <Filme titulo='Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/barbie.png'
                />
                <Filme titulo='Filme Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/boneca.jpg'
                /> */}

            </main>
        </>
    )
}



