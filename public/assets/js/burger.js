$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newDevour");
      var newDevourState = {
        devour: newDevour
      };
      $.ajax("/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devour to", newDevour);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
      var newBurger = {
        name: $("#burger").val().trim(),
      };
      $.ajax("/", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  });
  
  $(function() {
    $(".delete").on("click", function(event) {
      var id = $(this).data("id");
      console.log( "In Delete the id - " + id );
      $.ajax("/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("Deleted burger.");
       
          location.reload();
        }
      );
    });
  });