console.log("yash rastogi aidncopancswanscp");
const insert = document.getElementById("insert");

window.addEventListener("keydown", function(e) {
    insert.innerHTML = `
        <div class= "color">
            <table>
                <tr>
                    <th>key</th>
                    <th>KeyCode</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>${e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>
    `
})