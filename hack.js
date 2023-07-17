/*--------Prevent Context Menu Right Click --------------*/
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
const Message = [
    "This Server Is Hacked<hr>",
    "Initializing hack tool.........................................................",
    "Getting IP address.....................",
    "Getting Mac address....................",
    "Fetching network informations.........",
    "Pushing malware into the system........",
    "Getting your personal informations and data............",
    "Decrypting data..............................",
    "Sending data to another server...........",
    "We got all usernames and passwords Which are saved in your browser...................",
    "Searching banking information...........................",
    "Fetching UPI recorded data....................",
    "Decrypting UPI pass codes...................",
    "Sending data back to the server....................",
    "Operation complete<hr>"
]
let doc = document.getElementById('div1')
const pause = async()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(true)
        },1000)
    })
}
let innh = ""
const pauseloopfun =async (x)=>{
        await pause();
        //console.log(x)
        innh += `<br><b>${x}</b><br>`
        doc.innerHTML = innh
}

const loopfun = async(x)=>{
    for (let i = 0; i < x.length; i++) {
        await pauseloopfun(x[i])
    }
}
setTimeout(async()=>{
    console.log(doc.removeAttribute('hidden'))
    await loopfun(Message);
    let ipa = await ip();
    console.log(ipa)
    innh += `<table>
    <tr>
        <th>Content</th>
        <th>Information Data</th>
    </tr>
    <tr>
        <td>We found your IP address as</td>
        <td><b>${ipa.ip}</b></td>
    </tr>
    <tr>
        <td>Your Internet Service Provider's ASN ID is</td>
        <td><b>${ipa.connection.asn}</b></td>
    </tr>
    <tr>
        <td>Your Internet Service Provider is</td>
        <td><b>${ipa.connection.isp}</b></td>
    </tr>
    <tr>
        <td>Your Location Country is</td>
        <td><b>${ipa.countryName} ${ipa.location.native_name}</b></td>
    </tr>
    <tr>
        <td>Your Location State is</td>
        <td><b>${ipa.regionName}</b></td>
    </tr>
   
    <tr>
        <td>Your Location City is</td>
        <td><b>${ipa.cityName}</b></td>
    </tr>
    <tr>
        <td>Your Location TimeZone is</td>
        <td><b>${ipa.timeZone}</b></td>
    </tr>
    <tr hidden>
        <td>Your ISP Co-org Name is</td>
        <td><b>${ipa.org}</b></td>
    </tr>
</table><hr>`
    doc.innerHTML = innh
},1000)

const ip = async () =>{
    const resolve = await fetch('https://api.ipify.org?format=json')
    //const resolve2 = await fetch('http://ip-api.com/json/')
    //const data2 = await resolve2.json();
    const data = await resolve.json();
    const data3 = await ip2(data.ip)
    
    const concatenatedObj = Object.assign(data,data3);
    console.log(concatenatedObj)
    return concatenatedObj;
}
const ip2 = async(ipad)=>{
    let myHeaders = new Headers();
    myHeaders.append("apikey", "nQtOlCAodWZxhphHNNX1Q1tBn7T4uHx2");

    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
    console.log(requestOptions)
    const resolve = await fetch(`https://freeipapi.com/api/json/${ipad}`)
    const data = await resolve.json();
    const resolve2 = await fetch(`https://api.apilayer.com/ip_to_location/${ipad}`, requestOptions)
    const data2_2 = await resolve2.json();
    const concatenatedObj = Object.assign(data, data2_2);
    //console.log(concatenatedObj.connection.isp)
    return concatenatedObj
}
/*fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const ipAddress = data.ip;
        console.log('IP address:', ipAddress);
        // Do something with the IP address
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle the error
    });*/

