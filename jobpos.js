const jobdiv = document.getElementById('jobsec')
let n = 0
const h1 = document.querySelector('ul')
const next = document.getElementById('next')
next.addEventListener('click', () => {
    n += 1
    console.log(n)
    hello(n)
})
const prev = document.getElementById('prev')
prev.addEventListener('click', () => {
    if (n == 0) {
        n;
        alert("No previous Page")
    }
    else {
        n -= 1
    }
    console.log(n)
    hello(n)
})
async function hello(pagen) {
    let inHtml = ``
    const response = await fetch(`https://www.arbeitnow.com/api/job-board-api?page=${pagen}`, { mode: 'cors' });
    const data = await response.json();
    let data1 = data.data
    console.log(data1[0])
    for (let key in data1) {
        let title = data1[key].title
        let created_at = new Date(data1[key].created_at * 1000)
        let description = data1[key].description
        let location = data1[key].location
        let remote = data1[key].remote
        let slug = data1[key].slug
        let urll = data1[key].url
        let tags = data1[key].tags[0]
        //console.log(title,created_at,description,location,remote,slug,tags)
        inHtml += `<div class="card" style="width: 530px; overflow: auto; margin:10px 5px; height:500px; border-radius: 20px;">
            <br><h5 class="card-title">${title}</h5><hr>
            <p class="card-text"><b>Created At:</b>${created_at}</p>
            <div>
            ${description}
            </div>

            <table id="jtable" style="width: 45%; margin-left: 5px;" class="table table-dark">
                <tbody>
                    <tr>
                        <th scope="row">Location</th>
                        <td>${location}</td>
                    </tr>
                    <tr>
                        <th scope="row">Remote Job</th>
                        <td>${remote}</td>
                    </tr>
                    <tr>
                        <th scope="row">Slag</th>
                        <td>${slug}</td>
                    </tr>
                    <tr>
                        <th scope="row">Sector</th>
                        <td>${tags}</td>
                    </tr>
                </tbody>
            </table>
            <a href="${urll}" class="btn btn-primary">Apply</a><hr>
        </div>
    </div>
   `
    }
    jobdiv.innerHTML = inHtml
    //console.log(inHtml)
}
hello(n)
/*--------Prevent Context Menu Right Click --------------*/
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});