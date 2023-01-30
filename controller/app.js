DevExpress.setTemplateEngine("underscore");

let topTabPanelSource = [
  {
    panelTitle: "Sayfam",
    panelContent: "Boş sayfa",
  },
];

let listOfCallSource = [
  {
    ID: 1,
    name: "Giacomo Gulizzoni",
    company: "Makrovit",
    date: "01/01/2023",
    employee: "Selim Yılmaz",
  },
  {
    ID: 2,
    name: "Marco Botton",
    company: "Salimpeks Müh.",
    date: "01/02/2023",
    employee: "Burakhan Şenkal",
  },
  {
    ID: 3,
    name: "Mariah Maclochian",
    company: "Better Half",
    date: "01/03/2023",
    employee: "Salih Kaya",
  },
  {
    ID: 4,
    name: "Timur Yılmaz",
    company: "Apple",
    date: "01/04/2023",
    employee: "Tuğrul Çekiç",
  },
  {
    ID: 5,
    name: "Riccardo Visser",
    company: "Coza",
    date: "01/05/2023",
    employee: "Yusuf Kuzu",
  },
  {
    ID: 6,
    name: "Giacomo Gulizzoni",
    company: "Makrovit",
    date: "01/01/2023",
    employee: "Selim Yılmaz",
  },
  {
    ID: 7,
    name: "Marco Botton",
    company: "Salimpeks Müh.",
    date: "01/02/2023",
    employee: "Burakhan Şenkal",
  },
  {
    ID: 8,
    name: "Mariah Maclochian",
    company: "Better Half",
    date: "01/03/2023",
    employee: "Salih Kaya",
  },
  {
    ID: 9,
    name: "Timur Yılmaz",
    company: "Apple",
    date: "01/04/2023",
    employee: "Tuğrul Çekiç",
  },
  {
    ID: 10,
    name: "Riccardo Visser",
    company: "Coza",
    date: "01/05/2023",
    employee: "Yusuf Kuzu",
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
    itemTemplate: templateOfGridData,
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
      panelContent: $(".tab-panel-layer").append().html(),
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

function templateOfGridData(params) {
  console.log(params);
  return $("<div>")
    .addClass("list-of-call-content")
    .append($("<h4>").text("Çağrı Listesi"))
    .append(
      $("<div>")
        .addClass("list-of-call-actions")
        .append(
          $("<button>")
            .addClass("edit")
            .text("Edit")
            .append($("<i>").addClass("dx-icon-edit"))
        )
        .append(
          $("<button>")
            .addClass("delete")
            .text("Delete")
            .append($("<i>").addClass("dx-icon-trash"))
        )
        .append(
          $("<button>")
            .addClass("create")
            .text("Create")
            .append($("<i>").addClass("dx-icon-plus"))
            .click(() => {
              console.log("yaratma");
            })
        )
    )
    .append(
      $("<div>")
        .attr("id", "ListOfCallWithGridData")
        .dxDataGrid({
          keyExpr: "ID",
          dataSource: listOfCallSource,
          paging: {
            pageSize: 5,
          },
          pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [4, 6, 9],
          },
        })
    );
}
