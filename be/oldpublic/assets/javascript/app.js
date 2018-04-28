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

$("#Submit2").on("click", function() {
  event.preventDefault()
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  console.log("ID "+ username +" "+ password);

  $.ajax({
    method: "POST",
    url: "/api/username/",
    data: {
      username: $("#username").val(),
      password: $("#password").val(),
    }
  })

  $("#username").val('');
  $("#password").val('');
});
