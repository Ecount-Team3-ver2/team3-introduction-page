var boardArray = new Array();

function Board(uName, uContent) {
    this.userName = uName;
    this.content = uContent;
    this.writeDay = new Date();
}
Board.prototype.userLocalString = function () {
    return this.writeDay.getFullYear() + "-"
        + (this.writeDay.getMonth() + 1) + "-"
        + this.writeDay.getDate() + "-"
        + this.writeDay.getHours() + ":"
        + this.writeDay.getSeconds();
}

function main() {
    var uName = document.getElementById("uName").value;
    var uContent = document.getElementById("uContent").value;

    var len = boardArray.length;

    boardArray[len] = new Board(uName, uContent);

    print(len);

    clear();
}

// 내용 출력 함수
function print(idx) {
    var tableNode = document.getElementById("bbsTable");
    var trNode = document.createElement("tr");

    trNode.appendChild(createTdNode((idx + 1).toString()));
    trNode.appendChild(createTdNode(boardArray[idx].userName));
    trNode.appendChild(createTdNode(boardArray[idx].content));
    trNode.appendChild(createTdNode(boardArray[idx].userLocalString()));

    tableNode.appendChild(trNode);
}

function createTdNode(val) {
    var textNode = document.createTextNode(val);
    var tdNode = document.createElement("td");
    tdNode.appendChild(textNode);
    return tdNode;
}

function clear() {

    document.getElementById("uName").value = "";
    document.getElementById("uContent").value = "";
    document.getElementById("uName").focus();

}
