// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

//Build Table Function
function buildTable(data) {
    tbody.html("");

    //Loop Thru Data
    data.forEach((dataRow) => {
        let row = tbody.append("tr");

        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}