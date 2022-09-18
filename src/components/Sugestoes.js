import Sugestao from "./Sugestao";

const listSugestao = [
  { url: "bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você" },
  { url: "chibirdart.svg", nome: "chibirdart", razao: "Segue você" },
  {
    url: "razoesparaacreditar.svg",
    nome: "razoesparaacreditar",
    razao: "Novo no Instagram",
  },
  {
    url: "adorable_animals.svg",
    nome: "adorable_animals",
    razao: "Segue você",
  },
  { url: "smallcutecats.svg", nome: "smallcutecats", razao: "Segue você" },
];

export default function Sugestoes() {
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {listSugestao.map((sugestao) => (
        <Sugestao
          url={sugestao.url}
          nome={sugestao.nome}
          razao={sugestao.razao}
        />
      ))}
    </div>
  );
}
