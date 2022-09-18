import Post from "./Post";

const listPost = [
  {
    usuarioImg: "barked.svg",
    usuarioNome: "barked",
    conteudo: "dog.svg",
    ultimaCurtida: "adorable_animals",
    curtidas: 99159,
  },
  {
    usuarioImg: "meowed.svg",
    usuarioNome: "meowed",
    conteudo: "gato-telefone.svg",
    ultimaCurtida: "respondeai",
    curtidas: 101523,
  },
];

export default function Posts() {
  return (
    <div class="posts">
      {listPost.map((post) => (
        <Post
          usuarioImg={post.usuarioImg}
          usuarioNome={post.usuarioNome}
          conteudo={post.conteudo}
          ultimaCurtida={post.ultimaCurtida}
          curtidas={post.curtidas}
        />
      ))}
    </div>
  );
}
