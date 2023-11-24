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

export default function Main() {
  const [texto, setTexto] = useState('');
  const [filmes, setFilmes] = useState<FilmeType[]>([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/filme`, {
        headers: {
          Authorization: import.meta.env.VITE_API_KEY,
        },
      })
      .then((response) => {
        setFilmes(response.data);
      })
      .catch((error) => {
        console.error('Erro ao fazer a requisição:', error);
      });
  }, []);

  function TrataTexto(e: React.ChangeEvent<HTMLInputElement>) {
    setTexto(e.target.value);
  }




  return (
    <>
      <div className="campo_pesquisa">
        <p>Busque um Filme</p>
        <input
          type="text"
          className="botao_pesquisa"
          placeholder="Pesquise um Título"
          onChange={TrataTexto}
        />
        {texto && <p>Resultados Para: {texto} </p>}
      </div>
      <main className="content-main">
        {filmes
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


