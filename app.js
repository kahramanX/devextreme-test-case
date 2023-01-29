const $ = require("jquery");
const Dialog = require("devextreme/ui/dialog");

require("./assets/styles/style.scss");

// devextreme jquery integration
require("devextreme/integration/jquery");
require("devextreme/ui/tabs");

$("#leftMenu").dxTabs({
  items: [
    {
      text: "Çağrılar",
      disabled: true,
      icon: "bell",
    },
    {
      text: "Çağrı Listele",
    },
    {
      text: "Çağrı Ekle",
    },
  ],
  width: 250,
  scrollingEnabled: false,
  orientation: "vertical",
  onItemClick(event) {
    console.log(event);
  },
});

$("#rightMenu").dxTabs({
  items: [
    {
      text: "Sayfam",
    },
    {
      text: "Çağrı Ekle",
    },
  ],
  scrollingEnabled: false,
  onItemClick(event) {
    console.log(event);
  },
});
