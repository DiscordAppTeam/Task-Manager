/** Criamos um objeto contendo os itens do formulario
 *  Isso ajuda não repeti-los e deixar as funções mais limpas */
function getFields(){
    /* Criamos um objeto contendo os itens do formulario
    Isso ajuda não repeti-los e deixar as funções mais limpas */
    return {
        title: document.querySelector("#title"),
        desc: document.querySelector("#description"),
        maxDescChars: document.querySelectorAll(".desc-count"),

        date: document.querySelector("#date"),
        hour: document.querySelector("#hour"),
        popup: document.querySelector(".notify-popup")
    }
}
function getEditFields(){
    return {
        index: document.querySelector("#edt-index"),
        title: document.querySelector("#edt-title"),
        desc: document.querySelector("#edt-desc"),
        date: document.querySelector("#edt-date"),
        hour: document.querySelector("#edt-hour")
    }
}

/** Coloca o numero de letras da descrição na tela */
function setDescLenght(isPopup = false){
    const fields = getFields();
    const textElement = isPopup ? getEditFields().desc : fields.desc;
    const chars = textElement.value.length;
    fields.maxDescChars.forEach(element => {element.innerHTML = chars + "/300"})
}

/** Configura a data, tando o valor quanto o valor minimo */
function setDateDay(){
    const fields = getFields();
    fields.date.setAttribute("value", GetTodayUs())
    fields.date.setAttribute("min", GetTodayUs())
}


/**
 * Pega a data atual do computador e mapeia para retornar numeros com 0, tipo: 04, 05
 * sem este 0 no inicio teremos serios problemas no futuro...
 */
function GetTodayUs(){
    const today =  new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    return [year, month, day].map(d => d > 9 ? d : '0' + d).join('-');
}

function createTask(){
    const fields = getFields();

    /* Check Input Values */
    if(!fields.title.checkValidity()) Error("Title");
    else if(!fields.desc.checkValidity()) Error("Description");
    else if(!fields.date.checkValidity()) Error("Date");
    else if(!fields.hour.checkValidity()) Error("Hour");
    else{
        fields.popup.style = "display: flex;"
    }

    function Error(txt){
        window.alert(`The ${txt} is Invalid value!`);
        return;
    }

    /* Deixa o popup visivel para o preenchimento */
}

/** Cancela a operação de adicionar tarefa. */
function ExitNotify(){
    const fields = getFields();
    fields.popup.style = "display: none;"
}
/** Cancela a operação de editar tarefa. */
function ExitEdit(){
    const popup = document.querySelector(".edit-popup");
    popup.style = "display: none;"
    setDescLenght();
}


function toogleTask(index){
    const tasks = document.getElementById(index);
    const checkbox = tasks.querySelector(".checkbox");
    var todoStatus =  !(checkbox.getAttribute("class") == "checkbox active"); /* bool, se for verdadeiro, significa que a tarefa está concluida!*/
    
    checkbox.setAttribute("class", (todoStatus == true) ? "checkbox active" : "checkbox");
    
    toogleFinishedTask({todoStatus, index}); // Envia a informação para o main.js.
}

actualTask = {};
/** Pega os valores da tarefa clicada e envia para o popup seus valores, para uma melhor edição !! */
function editPopup(index){
    const olderTask = {
        title: document.getElementById(index).querySelector(".task-info h1"),
        desc: document.getElementById(index).querySelector(".description-text p"),
        date: document.getElementById(index).querySelector(".task-info .date-task"),
        hour: document.getElementById(index).querySelector(".task-info .hour-task")
    }
    const editFields = getEditFields();

    const popup = document.querySelector(".edit-popup");
    popup.style = "display: flex;"

    editFields.index.value = index;
    editFields.title.value = olderTask.title.innerHTML;
    editFields.desc.value = olderTask.desc.innerHTML;

    /* Desconstruimos o formato "Date: 20/10/2020" para um usavel, "2020-10-20" */
    const taskDate = olderTask.date.innerHTML.replace("Date: ", "").split("/")
    const taskDateFormat = taskDate[2] + "-" + taskDate[1] + "-" + taskDate[0]
    editFields.date.setAttribute("min", GetTodayUs())
    editFields.date.value = taskDateFormat;

    /* Desconstruimos o formato "Hour: 20:50" para um usavel, "*/
    const taskHour = olderTask.hour.innerHTML.replace("Hour: ", "")
    const taskHourFormat = taskHour
    editFields.hour.value = taskHourFormat;

    setDescLenght(true);
    actualTask = editFields;
}
function sendEditedTask(){
    task = {
        title: actualTask.title.value, 
        desc: actualTask.desc.value, 
        data: actualTask.date.value, 
        hora: actualTask.hour.value, 
        index: Number(actualTask.index.value)
    }
    sendTaskEdited(task);
}

function toogleMenu(index){
    const menu = document.getElementById(index).querySelector(".menu");
    var menuStatus =  menu.getAttribute("class") == "menu active"; /* bool, se for verdadeiro, significa que o menu está aberto!*/
    
    menuStatus = !menuStatus;
    menuStatus == true ?
    menu.setAttribute("class", "menu active") : menu.setAttribute("class", "menu");
}
