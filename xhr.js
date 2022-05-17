const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

var fullName = document.getElementById('customername');
var email = document.getElementById('customeremail');
var mobile = document.getElementById('customermobile');
var amount = document.getElementById('amount');
var desc = document.getElementById('description');

const getData = () => {
  
};

const sendData = () => {
    var data = new FormData();

    data.append("x-public-key", "pk_b7a26ffc8e5a4baa4c75889697d970e4");
    data.append("merchantname", "C-NET INTERNET COMMUNICATION SERVICES")
    data.append("amount", amount.value);
    data.append("description", desc.value);
    data.append("customername", fullName.value);
    data.append("customeremail", email.value);
    data.append("customermobile", mobile.value);
    data.append("fee", amount.value*0.02)
    
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

      xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
          console.log(this.responseText);      
           var jsonread = JSON.parse(this.responseText);
           var url = jsonread.data.checkouturl;
          //console.log(jsonread.data.checkouturl)        
          //console.log(url);
          
           window.location.href = url;
        }
   
      })

    xhr.open("POST", "https://g.payx.ph/payment_request");

    xhr.send(data);

}; // end of send data

console.error();

//getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
