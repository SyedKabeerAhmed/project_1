//var list = { data: ['a', 'b', 'c'] };
// array for drop down list of parent
var drp_list = [];
var drop_list = [];
//for serial no
var index = 0;

//the main array which is geting data from the form ,after checks application goes in an array and then inth is Array object.
var user = new Array();
//array object for storing images 
var img = new Image();


function ADD(name, details, parent, image, ) { // arguments of variables
    index = index + 1;
    var serial_no = index; // document.getElementById("serial_no").value;
    var name = document.getElementById("name").value; //this line of code says that pick up anything having this id of name and vale is used for getting value of that having the same id
    var details = document.getElementById("details").value;
    var parent = document.getElementById("parent").value;
    var image = document.getElementById("image").files[0].name; //as here value is replace by file bcz valu can be used for strings and file is used when ther is some sort of file image or some other things like that is concerned and .name is used bcz by using .name my image will print according to the name bcz we have seprate array o bject for  images  
    debugger
    // conditions to validate the data which is coming directly from the form  
    // to validate the feild of name checking for 
    if (name != "") {

        if (isNaN(name)) {
            if (name.length >= 3) {
                if (name.length <= 18) {
                    debugger
                    // details k if ki condition
                    if (details.length >= 3) {
                        if (details.length <= 35) {
                            // details k if ki condition end
                            if (name != parent) {

                                var alphaExp = /^[a-zA Z]+$/;
                                if (name.match(alphaExp)) {

                                    var alphaExp = /^[a-zA Z]+$/;
                                    if (details.match(alphaExp)) {
                                        var item = [];

                                        // array
                                        var usere = [];
                                        usere.name = name;
                                        usere.parent = parent;
                                        usere.details = details;
                                        usere.serial_no = serial_no;
                                        usere.image = image;


                                        user.push(usere);

                                        var table = "<table id='data_table' border='1'><tr><th>S.no#</th><th>Name</th><th>Details</th><th>Parent</th><th>image</th><th>Remove</th><th>Edit</th></tr>";
                                        debugger
                                        for (i in user) {
                                            table += "<tr><td>" + user[i].serial_no + "</td><td>" + user[i].name + "</td><td>" + user[i].details + "</td><td>" + user[i].parent + "</td><td><img src='" + user[i].image + "'/></td><td>" + "<input type='button' value='Remove' id='" + i + "' onclick='get_row(this.id)' />" + "</td><td>" + "<input type='button' value='Edit' id='" + i + "' onclick='editRow(" + i + ");' />" + "</td></tr>";
                                        }
                                        table += "</table>";
                                        debugger
                                        document.getElementById("demo").innerHTML = table;

                                        document.getElementById("name").value = ""
                                        document.getElementById("details").value = ""
                                        document.getElementById("parent").value = ""
                                        document.getElementById("image").files[0].name = ""
                                        $.notify("Added successfully", "success");
                                        drp_list.push(user[i].name);
                                        drop_list.push(user[i].name);

                                    } else {
                                        $.notify('please use only alphabatic charracters in datalis feild');

                                    }

                                } else {
                                    $.notify('please use only alphabatic charracters in name feild');

                                }
                            } else {
                                $.notify('you can not enter same name and parent');

                                //alert("Plz enter an alphabetic name");
                            }
                        } else {
                            $.notify('Plz enter less than 35 alphabet details');

                            //alert("Plz enter an alphabetic name");
                        }
                    } else {
                        $.notify('Plz enter more than 2 alphabet name');

                        //alert("Plz enter an alphabetic name");
                    }
                } else {
                    $.notify('Plz enter less than 18 alphabat name');

                    //alert("Plz enter an alphabetic name");
                }
            } else {
                $.notify('Plz enter more than 2 alphabet name');

                //alert("Plz enter an alphabetic name");
            }
        } else {
            index = index - 1;
            $.notify('Plz enter an alphabetic name');

            //alert("Plz enter an alphabetic name");
        }

    } else {
        //alert("Fill the name plz");
        $.notify("Plz enter the name", "error");

    }
    populate_drop();
    populate_drp();
    hide();

}

function ADDdd(name, serial_no, details, parent, image, ) {

    var name = document.getElementById("name").value;
    var details = document.getElementById("details").value;
    var parent = document.getElementById("parent").value;
    var image = document.getElementById("image").files[0].name;
    debugger

    var usere = [];
    usere.name = name;
    usere.parent = parent;
    usere.details = details;
    usere.serial_no = serial_no;
    usere.image = image;


    var table = "<table id='data_table' border='1'><tr><th>S.no#</th><th>Name</th><th>Details</th><th>Parent</th><th>image</th><th>Remove</th><th>Edit</th></tr>";
    debugger
    for (i in user) {
        table += "<tr><td>" + user[i].serial_no + "</td><td>" + user[i].name + "</td><td>" + user[i].details + "</td><td>" + user[i].parent + "</td><td><img src='" + user[i].image + "'/></td><td>" + "<input type='button' value='Remove' id='" + i + "' onclick='get_row(this.id)' />" + "</td><td>" + "<input type='button' value='Edit' id='" + i + "' onclick='editRow(" + i + ");' />" + "</td></tr>";
    }
    table += "</table>";
    debugger
    document.getElementById("demo").innerHTML = table;


    debugger

    document.getElementById("name").value = ""
    document.getElementById("details").value = ""
    document.getElementById("parent").value = ""
    document.getElementById("image").files[0].name = ""

    drp_list.push(user[i].name);
    drop_list.push(user[i].name);

    populate_drop();
    populate_drp();
    debugger
}

//  add ki fields empty krna k lia
function clear_add() {

    document.getElementById("name").value = ""
    document.getElementById("details").value = ""
    document.getElementById("parent").value = ""
    document.getElementById("image").files[0].name = ""
    displaytable();
}
//add ki fields empty krna k lia////////
//////////////////////////
function populate_drp() {
    var drp = document.getElementById("parent");
    drp.innerHTML = "";

    option = document.createElement("OPTION");
    option.innerHTML = "";
    drp.options.add(option);
    for (i in drp_list) {
        drp.add(new Option(drp_list[i]));
    };
}
/////////////////////////
function populate_drop() {
    var drop = document.getElementById("re_parent");
    drop.innerHTML = "";

    options = document.createElement("OPTION");
    options.innerHTML = "";
    drop.options.add(options);
    for (i in drop_list) {
        drop.add(new Option(drop_list[i]));
    };
}
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\

function get_row(index) {
    delete user[index];
    debugger
    set_table();
    //populate_drp();
}
debugger

function set_table() {
    var table = "<table id='data_table' border='1'><tr><th>S.no#</th><th>Name</th><th>Details</th><th>Parent</th><th>image</th><th>Remove</th><th>Edit</th></tr>";
    debugger
    for (i in user) {
        table += "<tr><td>" + user[i].serial_no + "</td><td>" + user[i].name + "</td><td>" + user[i].details + "</td><td>" + user[i].parent + "</td><td><img src='" + user[i].image + "'/></td><td>" + "<input type='button' value='Remove' id='" + i + "' onclick='get_row(this.id)' />" + "</td><td>" + "<input type='button' value='Edit' id='" + i + "' onclick='editRow(" + i + ");' />" + "</td></tr>";
    }
    debugger
    table += "</table>";
    debugger
    document.getElementById("demo").innerHTML = table;

}

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
function hide() {

    document.getElementById("hide").innerHTML = "";

}

////////////////////////////////////////////////////////////////////////////////
function editRow(index) {

    displayedit();
    document.getElementById('re_name').value = user[index].name;
    document.getElementById('re_details').value = user[index].details;
    document.getElementById('re_parent').value = user[index].parent;
    document.getElementById('serial_nos').value = user[index].serial_no;
    document.getElementById('re_image').files[0].name = user[index].image;
}

function edittwo() {
    var re_name = document.getElementById('re_name').value;
    var re_details = document.getElementById('re_details').value;
    var re_parent = document.getElementById('re_parent').value;
    var serial_nos = document.getElementById('serial_nos').value;
    var re_image = document.getElementById('re_image').files[0].name;

    if (serial_nos != "") {

        if (re_name != "") {

            if (isNaN(re_name)) {
                if (re_name.length >= 3) {
                    if (re_name.length <= 18) {
                        debugger
                        // details k if ki condition
                        if (re_details.length >= 3) {
                            if (re_details.length <= 35) {
                                // details k if ki condition end
                                if (re_name != re_parent) {

                                    var alphaExp = /^[a-zA Z]+$/;
                                    if (re_name.match(alphaExp)) {

                                        var alphaExp = /^[a-zA Z]+$/;
                                        if (re_details.match(alphaExp)) {
                                            debugger
                                            var numbers = /^[0-9]+$/;
                                            if (serial_nos.match(numbers)) {
                                                debugger
                                                var items = [];

                                                var l = drp_list.indexOf(user.find(x => x.serial_no == serial_nos).name);
                                                drp_list[l] = re_name;

                                                var l = drop_list.indexOf(user.find(x => x.serial_no == serial_nos).name);
                                                drop_list[l] = re_name;

                                                user.find(x => x.serial_no == serial_nos).name = re_name;
                                                user.find(x => x.serial_no == serial_nos).details = re_details;
                                                user.find(x => x.serial_no == serial_nos).parent = re_parent;
                                                user.find(x => x.serial_no == serial_nos).image = re_image;

                                                debugger
                                                console.log(user);
                                                debugger

                                                document.getElementById("serial_nos").value = ""
                                                document.getElementById("re_name").value = ""
                                                document.getElementById("re_details").value = ""
                                                document.getElementById("re_parent").value = ""
                                                document.getElementById("re_image").files[0].name = ""
                                                $.notify("Added successfully", "success");
                                                debugger

                                            } else {
                                                $.notify('please use only numeric charracters in Id feild');

                                            }
                                        } else {
                                            $.notify('please use only alphabatic charracters in datalis feild');

                                        }

                                    } else {
                                        $.notify('please use only alphabatic charracters in name feild');

                                    }
                                } else {
                                    $.notify('you can not enter same name and parent');

                                    //alert("Plz enter an alphabetic name");
                                }
                            } else {
                                $.notify('Plz enter less than 35 alphabet details');

                                //alert("Plz enter an alphabetic name");
                            }
                        } else {
                            $.notify('Plz enter more than 2 alphabet name');

                            //alert("Plz enter an alphabetic name");
                        }
                    } else {
                        $.notify('Plz enter less than 18 alphabat name');

                        //alert("Plz enter an alphabetic name");
                    }
                } else {
                    $.notify('Plz enter more than 2 alphabet name');

                    //alert("Plz enter an alphabetic name");
                }
            } else {
                $.notify('Plz enter an alphabetic name');

                //alert("Plz enter an alphabetic name");
            }

        } else {
            //alert("Fill the name plz");
            $.notify("Plz enter the name", "error");

        }
    } else {
        //alert("Fill the name plz");
        $.notify("plz select first to edit from data table", "error");

    }
    debugger



}
debugger

function clear_edit() {
    document.getElementById("serial_nos").value = ""
    document.getElementById("re_name").value = ""
    document.getElementById("re_details").value = ""
    document.getElementById("re_parent").value = ""
    document.getElementById("re_image").files[0].name = ""

    displaytable();
}

// ............................................................... Hirarchy.................................................................................................................
function getNestedChildren() {
    delh();
    user.sort(function(a, b) {
        return (a.parent == null ? 0 : a.parent) - (b.parent == null ? 0 : b.parent);
    });
    debugger
    var tree = document.getElementById("tree");

    for (var i = 0; i < user.length; i++) {
        debugger
        if (user[i].parent == '') {
            createTreeElement("li", user[i].name, user[i].name, user[i].image, tree);
        } else {
            var treeChildNode = document.getElementById("t" + user[i].parent).getElementsByTagName("ul");
            if (treeChildNode.length) {

                createTreeElement("li", user[i].name, user[i].name, user[i].image, treeChildNode[0]);
            } else {
                createTreeElement("ul", user[i].parent, "", "", document.getElementById("t" + user[i].parent));
                createTreeElement("li", user[i].name, user[i].name, user[i].image, document.getElementById("t" + user[i].parent).getElementsByTagName("ul")[0]);
            }
        }
        debugger
    }

    function createTreeElement(name, id, text, img, parent) {
        debugger
        var node = document.createElement(name);
        node.id = "t" + id;
        if (name != 'ul')
            node.innerHTML = id;
        var image = document.createElement('img');
        image.src = img;
        node.appendChild(image);
        parent.appendChild(node);
    }
}

//...........................................hirarchy........................................................//
function delh() {
    document.getElementById('tree').innerHTML = ""
}

function displayadd() {

    var x = document.getElementById("add-form-hide");
    var y = document.getElementById("data-table-hide");
    var z = document.getElementById("edit-form-hide");
    var a = document.getElementById("hirarchy-hide");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
    }
}

function displayedit() {
    var x = document.getElementById("edit-form-hide");
    var y = document.getElementById("data-table-hide");
    var z = document.getElementById("add-form-hide");
    var a = document.getElementById("hirarchy-hide");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
    }
}

function displaytable() {
    var x = document.getElementById("data-table-hide");
    var y = document.getElementById("edit-form-hide");
    var z = document.getElementById("add-form-hide");
    var a = document.getElementById("hirarchy-hide");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
    }
}

function displayhirarchy() {
    var x = document.getElementById("hirarchy-hide");
    var y = document.getElementById("edit-form-hide");
    var z = document.getElementById("add-form-hide");
    var a = document.getElementById("data-table-hide");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
    }
}