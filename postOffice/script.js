// DOM elemnts callet by Id
const ipAddress = document.getElementById("ipAddress")
const latitude = document.getElementById("lat")
const longitude = document.getElementById("long")
const city = document.getElementById("city")
const region = document.getElementById("region")
const orginization = document.getElementById("org")
const hostName = document.getElementById("host")
const timeZone = document.getElementById("timeZone")
const date = document.getElementById("date")
const pincode = document.getElementById("pincode")
const message = document.getElementById("message")
const map = document.getElementById("map")


const ipInfo = JSON.parse(sessionStorage.getItem('data'))
console.log(ipInfo)
const url = `http://ip-api.com/json/${ipInfo.ip}`

fetch(url)
.then((data) => data.json())
.then((info) => {
   console.log(info);
   map.innerHTML = `<iframe  src="https://maps.google.com/maps?q=${info.lat}, ${info.lon}&z=15&output=embed" width="600" height="300" frameborder="0" style="border:0"></iframe>`
 ipAddress.innerText = `IP Address:${info.query}`
 latitude.innerText =`Latitude:${info.lat}`
 longitude.innerText = `Longitude:${info.lon}`
 city.innerText = `City: ${info.city}`
 region.innerText = `Region: ${info.region}`
 orginization.innerText = `Organisation: ${info.org}`
 hostName.innerText = `HostName: Priyam Patel`
 timeZone.innerText = `Time Zone: ${info.timezone}`
 pincode.innerText = `Pincode: ${info.zip}`


//  putting the data  on the card which is to be displayed
let url2 = `https://api.postalpincode.in/pincode/${info.zip}`
let dataShowTO = "";
fetch(url2)
.then((pin) => pin.json())
.then((pinData) => {

        let postOfficeArray = pinData[0].PostOffice
        console.log(postOfficeArray)
        message.innerText = `Message: Number Of Pincode(s) found: ${postOfficeArray.length}`
        postOfficeArray.map((data)=>{
                    dataShowTO +=` <div class="items">
                <p>Name: ${data.Name}</p>
                <p>Brach type: ${data.BranchType}</p>
                <p>delivery Status: ${data.DeliveryStatus}</p>
                <p>District: ${data.District}</p>
                <p>Division: ${data.Division}</p>
                </div>`
                });
                document.getElementById('card').innerHTML = dataShowTO;});

});

