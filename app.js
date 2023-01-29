DevExpress.setTemplateEngine("underscore");

let topTabPanelSource = [
  {
    panelTitle: "Sayfam",
    panelContent: "Boş sayfa",
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

  if ((event.itemData.text = "Çağrı Listele")) {
    tabPanelItems.push({
      panelTitle: event.itemData.text,
      panelContent: "Çağrı listele tabı",
    });
  } else if ((event.itemData.text = "Çağrı Ekle")) {
    tabPanelItems.push({
      panelTitle: event.itemData.text,
      panelContent: "Çağrı Ekle tabı",
    });
  }

  topTabPanelElement.option("dataSource", tabPanelItems);
  topTabPanelElement.option("selectedIndex", tabPanelItems.length - 1);
}
