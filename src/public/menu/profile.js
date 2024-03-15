document.addEventListener("DOMContentLoaded", function () {
    // Event listener for the Delete Account button
    document
      .getElementById("deleteAccountBtn")
      .addEventListener("click", function () {
        document.getElementById("myModal").style.display = "block";
      });
  
    // Event listener for the close button in the modal
    document
      .getElementById("closeModalBtn")
      .addEventListener("click", function () {
        document.getElementById("myModal").style.display = "none";
      });
  
    // Event listener for closing modal if user clicks outside of it
    window.addEventListener("click", function (event) {
      var modal = document.getElementById("myModal");
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  });