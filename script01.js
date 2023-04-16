// Get the input field and project list
var input = document.getElementById("project-search");
var projects = document.getElementById("project-list").getElementsByTagName("li");

// Add event listener for input field
input.addEventListener("keyup", function() {
  // Get the value of the input field and convert to lowercase
  var filter = input.value.toLowerCase();

  // Loop through all the project list items
  for (var i = 0; i < projects.length; i++) {
    var title = projects[i].getElementsByTagName("h3")[0];
    var tech = projects[i].getElementsByClassName("tech")[0];
    var description = projects[i].getElementsByTagName("p")[1];

    // Check if the title or technology or description contains the filter value
    if (title.innerHTML.toLowerCase().indexOf(filter) > -1 ||
        tech.innerHTML.toLowerCase().indexOf(filter) > -1 ||
        description.innerHTML.toLowerCase().indexOf(filter) > -1) {
      projects[i].style.display = "";
    } else {
      projects[i].style.display = "none";
    }
  }
});
