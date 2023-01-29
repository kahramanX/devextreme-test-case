const $ = require("jquery");
const Dialog = require("devextreme/ui/dialog");

const setTemplateEngine = require("devextreme/core/set_template_engine");

// not working!
setTemplateEngine("underscore");

require("./assets/styles/style.scss");

// devextreme jquery integration
require("devextreme/integration/jquery");
require("devextreme/ui/tabs");
require("devextreme/ui/tab_panel");

let topTabPanelSource = [
  {
    panelTitle: "company 1",
    panelContent: "content 1",
  },
  {
    panelTitle: "company 2",
    panelContent: "content 2",
  },
];

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
  onItemClick: addButtonHandler,
});

const topTabPanelElement = $("#tableTopTabs")
  .dxTabPanel({
    dataSource: topTabPanelSource,
    itemTitleTemplate: $("#companyTitle"),
    width: "100%",
    selectedIndex: 0,
    selectionMode: "single",
    scrollingEnabled: true,
    itemTemplate: $("#companyContent"),
    animationEnabled: true,
    onItemClick(event) {
      console.log(event);
    },
    onSelectionChanged(e) {
      console.log("changed", e.component.option("selectedIndex"));
    },
  })
  .dxTabPanel("instance");

function addButtonHandler(event) {
  const tabPanelItems = topTabPanelElement.option("dataSource");

  console.log(event, "event name");

  tabPanelItems.push({
    panelTitle: event.itemData.text,
    panelContent: "content 2",
  });

  console.log(topTabPanelElement.option("dataSource"));

  topTabPanelElement.option("dataSource", tabPanelItems);
  topTabPanelElement.option("selectedIndex", tabPanelItems.length - 1);
}
