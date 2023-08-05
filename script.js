
 /* Add "https://api.ipify.org?format=json" statement
               this will communicate with the ipify servers in
               order to retrieve the IP address $.getJSON will
               load JSON-encoded data from the server using a
               GET HTTP request */
                
               $.getJSON("https://api.ipify.org?format=json", function(data) {
     
               sessionStorage.setItem("data",JSON.stringify(data));
                   
               $("#gfg").html(data.ip);
           })


const fetchButton = document.getElementById('get-started')
fetchButton.addEventListener('click' ,()=>{
    // alert("heloo")
    window.location.href = './postOffice'
})