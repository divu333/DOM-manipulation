// This function should retrieve all the project objects from projects array.
// It should then traverse over the array to create individual cards displaying each project details.
function loadProjects() {
  // Write your code here

  var newArr = projects;
  console.log(projects);
  var projectContainer = document.getElementById("projects");

  for (var i = 0; i < newArr.length; i++) {
    var project = newArr[i];
    console.log(project);
    // Create a new card element
    var card = document.createElement("div");

    // Populate the card with project information

    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h2>${project.title}</h2>
        <p>${project.description}</p>        
    `;

    // Append the card to the container
    projectContainer.appendChild(card);
  }
}



// This function should return the projectId of the new project
function newProjectId() {
  // Write code to create and return new Project Id
  var numberOfProjects = projects.length;
  var newId = numberOfProjects > 0 ? numberOfProjects + 1 : 1;
  alert('new project added and the id is :' + newId);
  return newId;
}

function saveNewProject() {

  // Write your code here
  // Get the new project details by using the DOM elements
  var title = document.getElementById("title").value;
  var description = document.getElementById("desc").value;
  var image = document.getElementById("image").value;
  console.log(title);
  console.log(description);
  console.log(image);
  // Create the new projectId by calling the newProjectId() function

  var projectId = newProjectId();

  // Create a new project object

  var newProject = {
    id: projectId,
    title: title,
    description: description,
    image: image
  };
  console.log(newProject);
  // Add the new project object to the projects array 

  projects.push(newProject);

  // Load the projects after adding the new project
  loadProjects(projects.js);

  // Clear the values of the New Project Details Form after adding the new project
  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("image").value = "";
}
