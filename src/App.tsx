import { ReactNode, useState } from 'react'
import './App.css'

function App() {

  const [jogoInicial, setJogoInicial] = useState([
    ["","",""],
    ["","",""],
    ["","",""]
  ])
  const [jogo, setJogo] = useState([
    ["","",""],
    ["","",""],
    ["","",""]
  ])

  const [jogador, setJogador] = useState("X")
  const [jogando, setJogando] = useState(true);



  const verificaVitoria = () => {
    let vitoria = false
    let pontos = 0;

    for(let l = 0; l < 3; l++){
      pontos = 0;
      for(let c = 0; c < 3; c++){
        if(jogo[l][c] == jogador){
          pontos++
        }
        if(pontos >= 3){
          vitoria = true
          return;
        }
      }
    }


    for(let l = 0; l < 3; l++){
      pontos = 0;
      for(let c = 0; c < 3; c++){
        if(jogo[c][l] == jogador){
          pontos++
        }
        if(pontos >= 3){
          vitoria = true;
          return
        }
      }
    }


    for(let d = 0; d < 3; d++){
      pontos = 0;
      if(jogo[d][d] == jogador){
        pontos++
      }

      if(pontos >= 3){
        vitoria = true;
        return;
      }
    }

    let l = 0;
    for(let c = 2; c >= 0; c--){
      pontos = 0;
      l++
      if(jogo[c][l] == jogador){
        pontos++
      }
      if(pontos >= 3){
        vitoria = true;
      }
    }

    return vitoria
  }

  const trocaJogador = () => {
    if(jogador == "X"){
      setJogador("O")
    } else {
      setJogador("X")
    }
  }

  const retPos = (e) => {
    const p = e.target.getAttribute("data-pos");
    const pos = [parseInt(p.substring(0,1)), parseInt(p.substring(1,2))];
    return pos;
  }

  const verificaEspacoVazio = (e) => {
    if(jogo[retPos(e)[0]][retPos(e)[1]] == ""){
      return true;
    } else{
      return false;
    }
  }

  const jogar = (e) => {
    if(jogando){
      if(verificaEspacoVazio(e)){
      jogo[retPos(e)[0]][retPos(e)[1]] = jogador
      trocaJogador()
      if(verificaVitoria()){
        trocaJogador()
        alert(`jogador ${jogador} venceu!!!!!`)
        setJogando(false)
      }
      }
      else{
        alert("espaco preenchido")
      }
    }
  }

  const tabuleiro = (j) => {
    return(
      <div className="tabuleiro">
      <div className="celula" data-pos="00" onClick={(e) => jogar(e)}>{j[0][0]}</div>
      <div className="celula" data-pos="01" onClick={(e) => jogar(e)}>{j[0][1]}</div>
      <div className="celula" data-pos="02" onClick={(e) => jogar(e)}>{j[0][2]}</div>
      <div className="celula" data-pos="10" onClick={(e) => jogar(e)}>{j[1][0]}</div>
      <div className="celula" data-pos="11" onClick={(e) => jogar(e)}>{j[1][1]}</div>
      <div className="celula" data-pos="12" onClick={(e) => jogar(e)}>{j[1][2]}</div>
      <div className="celula" data-pos="20" onClick={(e) => jogar(e)}>{j[2][0]}</div>
      <div className="celula" data-pos="21" onClick={(e) => jogar(e)}>{j[2][1]}</div>
      <div className="celula" data-pos="22" onClick={(e) => jogar(e)}>{j[2][2]}</div>
    </div>
    )
  }

  return (
    <>
    {
      tabuleiro(jogo)
    }
    </>
  )
}

export default App
