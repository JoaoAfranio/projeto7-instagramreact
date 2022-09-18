import React from "react";

export default function Usuario(props) {
  const [nome, setNome] = React.useState(props.usuario);
  const [imagem, setImagem] = React.useState(props.img);

  return (
    <div class="usuario">
      <img
        onClick={() => {
          const novaImagem = prompt("Digite o url da nova imagem");
          setImagem(novaImagem);
        }}
        src={imagem}
        alt=""
      />
      <div class="texto">
        <strong>{nome}</strong>
        <span
          onClick={() => {
            const novoNome = prompt("Digite o novo nome de usuário");
            setNome(novoNome);
          }}
        >
          {props.nome}
          <ion-icon name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}
