
var myTypeahead = $.typeahead({
    input: '.js-typeahead-country_v1',   //initialising the class in typeahead
    order: "desc",   //order in descending 
    source: {
        data: [
            "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
            "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh",
            "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia",
            "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma",
            "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad",
            "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic", "Congo, Republic of the",
            "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti",
            "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador",
            "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
            "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Guatemala", "Guinea",
            "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India",
            "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
            "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos",
            "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
            "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
            "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Mongolia", "Morocco", "Monaco",
            "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
            "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru",
            "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino",
            "Sao Tome", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone",
            "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain",
            "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan",
            "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
            "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
            "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
        ]
    },
    callback: {
        onInit: function (node) {
            console.log('Typeahead Initiated on ' + node.selector);
            //making a dictionary to store country name
            var dict = {
                country : []
            };
        },
        onClickAfter: function (node, a, item, event) {
            event.preventDefault();
            console.log(item);

            var State = document.createElement('span');  // creating span for different states
            var time = document.createElement('span');   // creating span for time at which they were selected
            State.innerHTML = item.display;     
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!
            var dict = {};

            var yyyy = today.getFullYear();
            if(dd<10){
                dd='0'+dd
            } 
            if(mm<10){
                mm='0'+mm
            } 
            var today = yyyy+'/'+mm+'/'+dd;
            time.innerHTML = today;
            State.style.display = 'block';
            document.getElementById("printdiv").appendChild(State);
            time.style.display = 'block'
            document.getElementById("printdiv").appendChild(time);

            if(localStorage.getItem(today) == null){
                dict[today] = [item.display];   
            }else{
                dict = JSON.parse(localStorage.getItem(today));
                dict[today].push(item.display);
            }

            localStorage.setItem(today, JSON.stringify(dict));
        }
    }
});


$(document).ready(function(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var dict = {};

    var yyyy = today.getFullYear();
    if(dd<10){
    dd='0'+dd
    } 
    if(mm<10){
    mm='0'+mm
    } 
    var today = dd+'/'+mm+'/'+yyyy;
if(localStorage.getItem(today) != null){
var data = JSON.parse(localStorage.getItem(today));
for(i=0;i<data[today].length;i++){
    var State = document.createElement('span');
    var time = document.createElement('span');
    State.innerHTML = data[today][i]; 

    time.innerHTML = today;
    State.style.display = 'block';
    document.getElementById("printdiv").appendChild(State);
    time.style.display = 'block'
    document.getElementById("printdiv").appendChild(time);   
}
 
}

});

function pick_date()
  {
    var result = ""

    var x = document.getElementById('pick_me').value;
    var inop = x.replace(/-/g,"/");
    result = localStorage.getItem(inop);
    if(result != null){
    var data1 = JSON.parse(localStorage.getItem(inop));
    for(i=0;i<data1[inop].length;i++){
    var State1 = document.createElement('span');
    //var time1 = document.createElement('span');
    State1.innerHTML = data1[inop][i]; 

    //time.innerHTML = today;
    State1.style.display = 'block';
    document.getElementById("disp").appendChild(State1);
    //time.style.display = 'block'
    //document.getElementById("printdiv").appendChild(time);   
}
 
}
    

   // for(var k in dict)
    //{
     // if(k===inop)
      //{
        //alert(dict[k]);
        //for(var j=0; j < dict[k].length; j++)
          //  result += dict[k][j] + "<br />";
      //}
      //else {
        //    alert('No records');
        //}
    //}
    //document.getElementById("disp").innerHTML = result;
  }  
