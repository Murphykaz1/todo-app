let selectors = {
    todoTask: "todo-task",
    todoHeader: "task-header",
    todoDate: "task-Date",
    todoDescription: "task-description",
    taskId: "task-",
    formId: "todo-form",
    dataAttribute: "data",
    deleteDiv: "delete-div",

}
codes = {
    "1": "#pending",
    "2": "#inprogrogress",
    "3": "#complted"
};

// Adding task
let generateElement = function (para) {
    let parent = $(codes[para.code]);
    let wrapper;
    if (!parent) {
        return;
    }

    wrapper = $("<div />", {
        "class": selectors.todoTask,
        "id": selectors.taskId + para.id,
        "data": para.id
    }).appendTo(parent);

    $("<div />", {
        "class": selectors.todoHeader,
        "text": para.title
    }).appendTo(wrapper);

    $("<div/>", {
        "class": selectors.todoDate,
        "text": para.date
    }).appendTo(wrapper);


    $("<div />", {
        "class": selectors.todoDescription,
        "text": para.description
    }).appendTo(wrapper);

};

// Remove Task

let removeElement = function(para){
    $("#"+selectors.taskId+para.id).remove();
};


// saving task in Local Stoarge
let data = JSON.parse(localStorage.getItem("todoData"));
localStorage.setItem("todoData", JSON.stringify(data));

// submitting the todo form
let addItem = () => {
    let inputs = $("#"+selectors.formId+ " : input");
    let errormessage = "Title can be empty";
    let id, title, description, date, tempDate;
    if (!title.length !==4){
        return;
    }
    title = inputs[0].value;
    description= inputs[1].value;
    date=inputs[2]. value;
    if(!title){
        generateDialog(errormessage);
        return;
    }
    id = new Date().getItem();

    tempDate = {
        id : id,
        code : "1",
        title : title,
        data: date,
        description : description



    };

    // Saving Elments in Local Storage
    data[id] = tempDate;
    localStorage.setItem("todoData", JSON.stringify(data));

    // Generate Todo ELement
    generateElement(tempDate);

    // Reset Form
    inputs[0]
    inputs[1]
    inputs[2]
    
}