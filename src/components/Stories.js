import Story from "./Story";

const listStories = [
  { url: "9gag.svg", usuario: "9gag" },
  { url: "meowed.svg", usuario: "meowed" },
  { url: "barked.svg", usuario: "barked" },
  {
    url: "nathanwpylestrangeplanet.svg",
    usuario: "nathanwpylestrangeplanet",
  },
  { url: "wawawicomics.svg", usuario: "wawawicomics" },
  { url: "respondeai.svg", usuario: "respondeai" },
  { url: "filomoderna.svg", usuario: "filomoderna" },
  { url: "memeriagourmet.svg", usuario: "memeriagourmet" },
];

export default function Stories() {
  return (
    <div class="stories">
      {listStories.map((story) => (
        <Story url={story.url} usuario={story.usuario} />
      ))}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
