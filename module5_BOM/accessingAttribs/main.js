var img = document.getElementsByTagName("img")[0];
var attributesToShow = "";

var attributes = img.attributes;
for (var i = 0; i < attributes.length; i++)
{
    attributesToShow += attributes[i].name + ": " +
        attributes[i].value + "\n";
}
alert(attributesToShow);
