(function(window) {
  "use strict";
  // var FORM_PAYMENT = "[data-payment-form=form]";
  var FORM_SELECTOR = "[data-coffee-order=form]";
  var CHECKLIST_SELECTOR = "[data-coffee-order=checklist]";
  var App = window.App;
  var Truck = App.Truck;
  var Datastore = App.Datastore;
  var FormHandler = App.FormHandler;
  var CheckList = App.CheckList;
  var myTruck = new Truck("ncc-1701", new Datastore());
  window.myTruck = myTruck;
  var checkList = new CheckList(CHECKLIST_SELECTOR);
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function(data) {
    myTruck.createOrder.call(myTruck, data);
    checkList.addRow.call(checkList, data);
  });

  // var formhandler1 = new FormHandler(FORM_PAYMENT);
  // formhandler1.addSubmitHandler(myTruck.createOrder.bind(myTruck));
  console.log(formHandler);
  // console.log(formhandler1);
})(window);
