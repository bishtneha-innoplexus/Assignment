
//input -> P 130, C, Q 10 , P 6, R 75.53,P 10,R 20

function titleCase() 
{
    var str ;
    var str1;
    str1 = 0
    str = document.getElementsByName("fname")[0].value;
    var array = str.split(",");
    for (var j=0;j<array.length;j++){
        var regex = /(\d+)/g;
        var regex1 = /\D/g;
        var num ;
        if (array[j].charAt(0) == 'P'){
        	array[j]=array[j].replace(/^\D+/g,'');
            num = Number(array[j]);
            str1 = str1+num;

        }

    }
    //var i = str.length;
    //str1 = str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1,txt.length-2).toLowerCase() + txt.charAt(txt.length-1).toUpperCase();});
  
  alert(str1);

  //return str.join(' ');

}
