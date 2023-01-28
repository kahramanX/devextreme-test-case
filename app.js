const $ = require("jquery");
const Dialog = require("devextreme/ui/dialog");
require("./assets/styles/style.scss");

console.log("start");

// decextreme integration
require("devextreme/integration/jquery");
require("devextreme/ui/button");
//require("devextreme/ui/dialog");

$(".myButton").dxButton({
  text: "Say 'Hello world'",
  onClick: function () {
    console.log("Hello world!");
    Dialog.alert("Hello world!", "TESTTT", false);
  },
});

/* $(".header-user-actions").dxResponsiveBox({
  rows: [{ ratio: 1 }],
  cols: [{ ratio: 1 }, { ratio: 1 }],
}); */

console.log("end");
