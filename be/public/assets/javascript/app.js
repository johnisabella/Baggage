$("#Submit1").on("click", function() {
  event.preventDefault()
  var BagName = document.getElementById("BagName").value;
  var BagType = document.getElementById("BagType").value;
  var BagItem1 = document.getElementById("BagItem1").value;

  console.log("Bag Items "+ BagName +" "+ BagType +" "+ BagItem1);

  $.ajax({
    method: "POST",
    url: "/Bags/",
    data: {
      BagName: $("#BagName").val(),
      BagType: $("#BagType").val(),
      BagItem1: $("#BagItem1").val()
    }
  })


  $("#BagName").val('');
  $("#BagType").val('');
  $("#BagItem1").val('');
});
