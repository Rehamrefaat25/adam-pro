function validate(){
    let text="";
    if(document.myform.name.value =="" && document.myform.mail.value=="" && document.myform.tell.value ==""){
        text="please,fill the form";
            document.getElementById("demo").innerHTML=text;
        document.myform.name.focus();
    return false;
    }
    if (document.myform.name.value==""){
       text="name can’t be empty";
        document.getElementById("demo").innerHTML=text;
    document.myform.name.focus();
return false;}
if(document.myform.mail.value==""){
    text="Email can’t be empty";
    document.getElementById("demo").innerHTML=text;
    document.myform.mail.focus();
    return false;
}
var mail= document.myform.mail.value;
let at = mail.indexOf("@")
let dot =mail.lastIndexOf(".");
if( at <1 || dot -at<2)
    {
        text="Enter valid Email";
        document.getElementById("demo").innerHTML=text;
        document.myform.mail.focus();
        return false;
    }
    if(document.myform.tell.value==""){
        text="This field can’t be empty";
        document.getElementById("demo").innerHTML=text;
    document.myform.tell.focus();
return true;}

}

