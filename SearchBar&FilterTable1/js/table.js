let disease;

async function fetcher() {
  disease = await fetch("json/AnimalDiseases.json").then(function (res) {
    return res.json();
  });
}

async function start(){
  await fetcher();

  document.getElementById("search-input").addEventListener("keyup", function () {
    var value = this.value;
    console.log("Value:", value);
    var data = searchTable(value, disease);
    buildTable(data);
  });

  buildTable(disease);
}

function searchTable(value, disease) {
  var filteredData = [];

  for (var i = 0; i < disease.length; i++) {
    value = value.toLowerCase();
    var name = disease[i].name.toLowerCase();

    if (name.includes(value)) {
      console.log("작동");
      filteredData.push(disease[i]);
    }
  }
  return filteredData;
}

function buildTable(disease) {
  var table = document.getElementById("myTable");

  table.innerHTML = "";

  for (var i = 0; i < disease.length; i++) {
    var row = `<tr>
                        <td>${disease[i].축종}</td>
                        <td>${disease[i].질병명}</td>
                        <td>${disease[i].주요증상}</td>
                    <tr>`;
    table.innerHTML += row;
  }
}
start();
