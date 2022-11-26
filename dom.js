//cache the user input the button and the unorderd list
var userInput = document.getElementById("user-input");
var enter = document.getElementById("enter");
var todo = document.getElementById("todo");

var deleteButton = document.createElement("button");
deleteButton.classList.add("delete");
deleteButton.appendChild(document.createTextNode("Delete"));



function deleteList(){
	deleteButton.parentNode.remove();
}
deleteButton.addEventListener("click",deleteList)

function addToList(){
	var list = document.createElement("li");
	list.appendChild(document.createTextNode(userInput.value))
	todo.appendChild(list)
	userInput.value="";
    list.appendChild(deleteButton);
}
function onPress(event){
   if(userInput.value !=="" && event.keyCode === 13){
   	addToList();
   }

}

function onClick(){
   if(userInput.value !==""){
   	addToList();
   }

}
userInput.addEventListener("keypress",onPress);
enter.addEventListener("click",onClick);

