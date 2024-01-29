alert("sss")

const url = "https://api.webflow.com/v2/sites/65a1fff36ec356ca7af685ad/collections"
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    authorization: "Bearer 7b06a025dd94c212ce3b9b0c124a19ed795ead2470da0524229895d0f7537012",
  },
}

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err))
