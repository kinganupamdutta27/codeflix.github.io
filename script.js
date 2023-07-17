const fdata = async()=>{
  const responce = await fetch('https://kontests.net/api/v1/all');
  console.log(responce.ok)
  const data = await responce.json();
  return data;
}

const pic = async()=>{
  var API_KEY = '38284571-46c10439b6b2986bd8bd29017';
  var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent('hackers');
  const responce  = await fetch(URL)
  const data  = await responce.json()
  return data;
}

const mainM = async()=>{
  let i = 0
  let div1 = document.getElementById('div1')
  let innerH = ''
  let x = await fdata()
  let p = await pic()
  
  for(key in x){
    if(i>19){
      i=0
    }
    let imgurl = p.hits[i].largeImageURL
    let name = x[key].name
    let site = x[key].site
    let start_time = x[key].start_time
    start_time = dateL(start_time)
    let status = x[key].status
    let url = x[key].url
    let end_time = x[key].end_time
    end_time = dateL(end_time)
    i+=1
    //console.log(imgurl)
    //console.log(name, site, url)
    innerH += `<div class="card" style="width: 25rem; height: 37rem; margin: 15px 10px; padding: 5px 5px; border-radius: 20px; background-color:black; box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; align-items: center; justify-content: center; border:1px solid white;">
  <img src="${imgurl}" class="card-img-top" style="border-radius: 20px;" width=50px height=298px alt="...">
  <div class="card-body text-white bg-dark mb-3" style="width:380px; height:298px; border:1px solid white; margin-top:5px;">
    <h5 class="card-title"><b style="font-size: 16px;">${name}</b></h5>
    <hr><p class="card-text"><b>Starting Time:</b> ${start_time}.<br><b>Site:</b> ${site}.<br>
    <b>End on:</b> ${end_time}.<br><b>Status:</b> ${status}.</p><hr>
    <a href="${url}" style="border:2px solid #0c0066;" target=_blank class="btn btn-primary"><b>Join The Contest</b></a>
  </div>
</div>`
  }
  div1.innerHTML = `${innerH}`
}
mainM()

/*----Date-Time Logic----*/
const dateL =(DT)=>{
  const dateString = DT
  const date = new Date(dateString);

const formattedDate = date.toLocaleDateString("en-US", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const formattedTime = date.toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});

const formattedDateTime = `${formattedDate} at ${formattedTime}`;

return formattedDateTime;
}

/*----Alert-----*/
let x = setTimeout(()=>{
  document.getElementById('alert1').setAttribute('hidden', 'true')
  console.log("Alert Closed")
},15000)
//alert.close()
function countdown() {
  var count = 15;
  var countdownElement = document.getElementById('countdown');

  var timer = setInterval(function () {
    countdownElement.innerHTML = `Close in Just <b style="text-align: center; align-items: center; justify-content: center;">${count}</b> Seconds`;
    count--;

    if (count < 0) {
      clearInterval(timer);
      countdownElement.textContent = 'Countdown is finished!';
    }
  }, 1000);
}

countdown();

/*--------Prevent Context Menu Right Click --------------*/
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
/*------------Copy Right Auto Year---------------------------------*/
const d = new Date();
let yr = d.getFullYear();
console.log(yr)
document.getElementById('spyr').textContent = yr