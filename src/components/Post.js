import React from "react";

export default function Post(props) {
  const [iconeSalvar, setIconeSalvar] = React.useState("bookmark-outline");
  const [valorPostSalvar, setValorPostSalvar] = React.useState(false);

  const [iconeCurtida, setIconeCurtida] = React.useState("heart-outline");
  const [corIconeCurtida, setCorIconeCurtida] = React.useState("");
  const [valorCurtida, setValorCurtida] = React.useState(false);

  const [curtidas, setCurtidas] = React.useState(props.curtidas);

  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={"assets/img/" + props.usuarioImg} alt="" />
          {props.usuarioNome}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={"assets/img/" + props.conteudo} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon
              name={iconeCurtida}
              class={corIconeCurtida}
              onClick={() => {
                if (valorCurtida === false) {
                  setIconeCurtida("heart");
                  setValorCurtida(true);
                  setCurtidas(curtidas + 1);
                  setCorIconeCurtida("red");
                } else {
                  setIconeCurtida("heart-outline");
                  setValorCurtida(false);
                  setCurtidas(curtidas - 1);
                  setCorIconeCurtida("");
                }
              }}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              name={iconeSalvar}
              onClick={() => {
                if (valorPostSalvar === false) {
                  setIconeSalvar("bookmark");
                  setValorPostSalvar(true);
                } else {
                  setIconeSalvar("bookmark-outline");
                  setValorPostSalvar(false);
                }
              }}
            ></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src="assets/img/respondeai.svg" alt="" />
          <div class="texto">
            Curtido por <strong>{props.ultimaCurtida}</strong> e{" "}
            <strong>outras {curtidas.toLocaleString("pt-Br")} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
