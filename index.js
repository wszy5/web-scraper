const PORT = 47

const axios = require("axios")
const cheerio = require("cheerio")
const { response } = require("express")
const express = require("express")

const app = express()

const url = "https://www.polsatnews.pl"

axios(url).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const articles = []
    // $(".news news--over", html).each((x) => {
    //     const url = $(this).find("a")
    //     articles.push(url)
    // })

    // console.log(($("div").find("article")).length)
    $("div").find("article").each(function(){
        const title = $(this).find("img").attr("alt")
        const url = $(this).find("a").attr("href")
        const article = {
            title,
            url
        }
        articles.push(article)
    })
    console.log(articles)
})

app.listen(PORT, ()=>{
    console.log("server is running...")
})