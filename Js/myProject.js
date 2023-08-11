let dataProject = [];

function addedProject(event) {
  event.preventDefault();

  let projectName = document.getElementById("input-project-name").value;
  let startDate = document.getElementById("input-start-date").value;
  let endDate = document.getElementById("input-end-date").value;
  let description = document.getElementById("input-description").value;
  let image = document.getElementById("inputImage").files;

  const node = '<i class="fa-brands fa-node-js"></i>';
  const golang = ' <i class="fa-brands fa-golang"></i>';
  const react = '<i class="fa-brands fa-react"></i>';
  const javascript = '<i class="fa-brands fa-square-js"></i>';

  let nodeChecked = document.getElementById("nodejs").checked ? node : "";
  let golangChecked = document.getElementById("golang").checked ? golang : "";
  let reactChecked = document.getElementById("reactjs").checked ? react : "";
  let javascriptChecked = document.getElementById("javascript").checked
    ? javascript
    : "";

  image = URL.createObjectURL(image[0]);
  console.log(image);

  let projectDataObject = {
    projectName,
    startDate,
    endDate,
    nodeChecked,
    golangChecked,
    reactChecked,
    javascriptChecked,
    description,
    image,
  };

  dataProject.push(projectDataObject);
  console.log(dataProject);

  renderProject();
}

function renderProject() {
  document.getElementById("container-card").innerHTML = "";
  for (let i = 0; i < dataProject.length; i++) {
    document.getElementById("container-card").innerHTML += `
    <div class="card">
    <div class="image-project">
      <img src="${dataProject[i].image}" alt="image-project" />
    </div>
    <div class="title-and-duration">
      <h3>${dataProject[i].projectName}</h3>
      <p>Duration: 3 Month</p>
    </div>
    <div class="description-project">
      <p>
        ${dataProject[i].description}
      </p>
    </div>
    <div class="tech-project">
      ${dataProject[i].nodeChecked}
      ${dataProject[i].golangChecked}
      ${dataProject[i].reactChecked}
      ${dataProject[i].javascriptChecked}
    </div>
    <div class="button-group">
      <div class="btn-edit">
        <button type="button">Edit</button>
      </div>
      <div class="btn-delete">
        <button type="button">Delete</button>
      </div>
    </div>
  </div>
    `;
  }
}
