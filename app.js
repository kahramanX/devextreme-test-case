const $ = require("jquery");
const Dialog = require("devextreme/ui/dialog");
require("./assets/styles/style.scss");

// devextreme jquery integration
require("devextreme/integration/jquery");

require("devextreme/ui/button");

$(".myButton").dxButton({
  text: "Say 'Hello world'",
  onClick: function () {
    console.log("Hello world!");
    Dialog.alert("Hello world!", "", false);
  },
});
