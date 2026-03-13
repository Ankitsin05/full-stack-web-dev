const newsDiv = document.getElementById("news")

async function getNews(topic="startup"){

const res = await fetch(`https://hn.algolia.com/api/v1/search?query=${topic}`)
const data = await res.json()

newsDiv.innerHTML=""

data.hits.slice(0,10).forEach(news=>{

newsDiv.innerHTML += `
<div class="news-item">
<p>${news.title}</p>
<button onclick="readNews('${news.url}','${news.objectID}')">Read</button>
</div>
`

})

}

function readNews(url,id){

alert("Opening article...")

if(url){
window.open(url,"_blank")
}else{
window.open(`https://news.ycombinator.com/item?id=${id}`,"_blank")
}

}

getNews()