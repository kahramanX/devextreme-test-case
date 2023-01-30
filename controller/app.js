DevExpress.setTemplateEngine("underscore");

// Tablar için data
let topTabPanelSource = [
  {
    panelTitle: "Sayfam",
    panelContent: "",
  },
  {
    panelTitle: "Çağrı Listele",
    panelContent: "",
  },
  {
    panelTitle: "Çağrı Düzenle",
    panelContent: "",
  },
];

// GridData için data
let listOfCallSource = [
  {
    ID: 1,
    Name: "Giacomo Gulizzoni",
    Company: "Makrovit",
    Date: "01/01/2023",
    Employee: "Selim Yılmaz",
  },
  {
    ID: 2,
    Name: "Marco Botton",
    Company: "Salimpeks Müh.",
    Date: "01/02/2023",
    Employee: "Burakhan Şenkal",
  },
  {
    ID: 3,
    Name: "Mariah Maclochian",
    Company: "Better Half",
    Date: "01/03/2023",
    Employee: "Salih Kaya",
  },
  {
    ID: 4,
    Name: "Timur Yılmaz",
    Company: "Apple",
    Date: "01/04/2023",
    Employee: "Tuğrul Çekiç",
  },
  {
    ID: 5,
    Name: "Riccardo Visser",
    Company: "Coza",
    Date: "01/05/2023",
    Employee: "Yusuf Kuzu",
  },
  {
    ID: 6,
    Name: "Giacomo Gulizzoni",
    Company: "Makrovit",
    Date: "01/01/2023",
    Employee: "Selim Yılmaz",
  },
  {
    ID: 7,
    Name: "Marco Botton",
    Company: "Salimpeks Müh.",
    Date: "01/02/2023",
    Employee: "Burakhan Şenkal",
  },
  {
    ID: 8,
    Name: "Mariah Maclochian",
    Company: "Better Half",
    Date: "01/03/2023",
    Employee: "Salih Kaya",
  },
  {
    ID: 9,
    Name: "Timur Yılmaz",
    Company: "Apple",
    Date: "01/04/2023",
    Employee: "Tuğrul Çekiç",
  },
  {
    ID: 10,
    Name: "Riccardo Visser",
    Company: "Coza",
    Date: "01/05/2023",
    Employee: "Yusuf Kuzu",
  },
];

// Sol menü komponenti ekleniyor
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

// Tab lar için komponent ekleniyor
const topTabPanelElement = $("#tableTopTabs")
  .dxTabPanel({
    dataSource: topTabPanelSource,
    itemTitleTemplate: titleTemplate,
    width: "100%",
    selectedIndex: 0,
    selectionMode: "single",
    scrollingEnabled: true,
    itemTemplate: templatesOfTabContents,
    animationEnabled: true,
    onItemClick(event) {
      //      console.log(event);
    },
    onSelectionChanged(e) {
      //console.log("changed", e.component.option("selectedIndex"));
    },
  })
  .dxTabPanel("instance");

// Menüye tıklandığında yeni bir tab oluşturan function
function addButtonHandler(event) {
  const tabPanelItems = topTabPanelElement.option("dataSource");

  // Menünün indexine göre tab oluşturulur. örn: çağrı ekleye tıklandıysa çağrı ekleme tabı oluşturulur
  if (event.itemIndex == 1) {
    tabPanelItems.push({
      panelTitle: event.itemData.text,
      panelContent: "",
    });
  } else if (event.itemIndex == 2) {
    tabPanelItems.push({
      panelTitle: event.itemData.text,
      panelContent: "",
    });
  }

  topTabPanelElement.option("dataSource", tabPanelItems);
  topTabPanelElement.option("selectedIndex", tabPanelItems.length - 1);
}

// Tabların adını düzenleyen ve kapatmak için icon ekleyen function
function titleTemplate(itemData, itemIndex, itemElement) {
  itemElement.append($("<span>").text(`${itemData.panelTitle}`));

  // Tab kapatmak için icon ekleniyor
  // ilk tab kapanmaması için ilk index dışındakilere kapatma iconu ekleniyor
  if (!itemIndex == 0) {
    itemElement.append(
      $("<i>")
        .addClass("dx-icon")
        .addClass("dx-icon-close")
        .click(() => {
          // Tab'ı kapatmayı sağlayan function. Gönderilen itemData sayesinde tıklanan tab bulunup siliniyor
          closeButtonHandler(itemData);
        })
    );
  }
}

function closeButtonHandler(itemData) {
  //Gönderilen itemData sayesinde tıklanan tab bulunup siliniyor
  const index = topTabPanelElement.option("dataSource").indexOf(itemData);
  const tabPanelItems = topTabPanelElement.option("dataSource");
  tabPanelItems.splice(index, 1);

  topTabPanelElement.option("dataSource", tabPanelItems);
  if (index >= tabPanelItems.length && index > 0)
    topTabPanelElement.option("selectedIndex", index - 1);
}

// Tab içeriğine hangi template geleceğini if sorgusu sayesinde seçilmesini sağlayan function
function templatesOfTabContents(param) {
  // Tüm contentler functionlara ayrıldı
  if (param.panelTitle == "Çağrı Listele") {
    return gridDataContent();
  } else if (param.panelTitle == "Çağrı Ekle") {
    return addCallContent();
  } else if (param.panelTitle == "Çağrı Düzenle") {
    return editCallContent();
  } else if (param.panelTitle == "Sayfam") {
    return myPageContent();
  }
}

// Tab içeriği komponentleri START
function gridDataContent() {
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
        )
    )
    .append(
      $("<div>")
        .attr("id", "ListOfCallWithGridData")
        .dxDataGrid({
          keyExpr: "ID",
          dataSource: listOfCallSource,
          showBorders: true,
          selection: {
            mode: "multiple",
            showCheckBoxesMode: "always",
          },
          filterRow: {
            visible: true,
          },
          focusedRowEnabled: true,
          columns: [
            {
              dataField: "ID",
              dataType: "number",
            },
            {
              dataField: "Name",
              dataType: "string",
            },
            {
              dataField: "Company",
              dataType: "string",
            },
            {
              dataField: "Date",
              dataType: "date",
            },
            {
              dataField: "Employee",
              dataType: "string",
            },
          ],
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

function addCallContent() {
  return "Çağrı Ekle";
}

function editCallContent() {
  return " düzenleee";
}

function myPageContent() {
  return "<h1>Sayfam</h1><br/><h4>Bu Sayfa Boş, üstteki tab ve sol menüye tıklamayı deneyin</h4><br/>";
}
// Tab içeriği komponentleri END
