
var c=0;
function change()
{
    var ele = document.getElementById("btn");
    /*var c = parseInt(ele);*/
    c=c+1;
    c=c%5;

    imgs=["img/iitb.jpg","img/iitd.jpg","img/iitm.jpeg","img/iitr.jpg","img/iiit.png"];

    ele.src=imgs[c];
}

