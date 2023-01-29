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
];

$("#ListOfCallWithGridData").dxDataGrid({
  dataSource: listOfCallSource,
  keyExpr: "ID",
});
