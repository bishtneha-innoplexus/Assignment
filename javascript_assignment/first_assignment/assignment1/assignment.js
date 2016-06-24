function titleCase() 
{
    var str ;
    var str1;
    str = document.getElementsByName("fname")[0].value;
    var i = str.length;
    str1 = str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1,txt.length-2).toLowerCase() + txt.charAt(txt.length-1).toUpperCase();});
  
  alert(str1);

  return str.join(' ');

}
