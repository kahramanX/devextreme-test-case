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
  scrollingEnabled: false,
  onItemClick: addButtonHandler,
});

const topTabPanelElement = $("#tableTopTabs")
  .dxTabPanel({
    dataSource: topTabPanelSource,
    itemTitleTemplate: titleTemplate,
    width: "100%",
    selectedIndex: 0,
    selectionMode: "single",
    scrollingEnabled: true,
    itemTemplate: $("#companyContent"),
    animationEnabled: true,
    onItemClick(event) {
      //      console.log(event);
    },
    onSelectionChanged(e) {
      //console.log("changed", e.component.option("selectedIndex"));
    },
  })
  .dxTabPanel("instance");

function addButtonHandler(event) {
  const tabPanelItems = topTabPanelElement.option("dataSource");

  if (event.itemIndex == 1) {
    tabPanelItems.push({
      panelTitle: event.itemData.text,
      panelContent: "Çağrı listele tab",
    });
  } else if (event.itemIndex == 2) {
    tabPanelItems.push({
      panelTitle: event.itemData.text,
      panelContent: "Çağrı Ekle tab",
    });
  }

  topTabPanelElement.option("dataSource", tabPanelItems);
  topTabPanelElement.option("selectedIndex", tabPanelItems.length - 1);
}

function titleTemplate(itemData, itemIndex, itemElement) {
  itemElement.append($("<span>").text(`${itemData.panelTitle}`));

  if (!itemIndex == 0) {
    itemElement.append(
      $("<i>")
        .addClass("dx-icon")
        .addClass("dx-icon-close")
        .click(() => {
          closeButtonHandler(itemData);
        })
    );
  }
}

function closeButtonHandler(itemData) {
  const index = topTabPanelElement.option("dataSource").indexOf(itemData);
  const tabPanelItems = topTabPanelElement.option("dataSource");
  tabPanelItems.splice(index, 1);

  topTabPanelElement.option("dataSource", tabPanelItems);
  if (index >= tabPanelItems.length && index > 0)
    topTabPanelElement.option("selectedIndex", index - 1);
}
