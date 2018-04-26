$("#Submit1").on("click", function() {
  event.preventDefault()
  var BagName = document.getElementById("BagName").value;
  var BagType = document.getElementById("BagType").value;

  console.log("Bag Items "+ BagName +" "+ BagType +" "+ BagItem1);

  $.ajax({
    method: "POST",
    url: "/Bags/",
    data: {
      BagName: $("#BagName").val(),
      BagType: $("#BagType").val(),
    }
  })


  $("#BagName").val('');
  $("#BagType").val('');
});
