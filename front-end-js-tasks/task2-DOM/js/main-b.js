// Put code of task B here
const main = document.querySelector("main")
const article = document.createElement("article")
const header = document.createElement("header")
const figure = document.createElement("figure")
const figCaption = document.createElement("figcaption")
const p = document.createElement("p")

header.innerHTML = "<h2>2nd article header</h2>"
p.innerHTML = 'Here is some more text. Here is some more text. Here is some more text.'
figure.innerHTML = '<img src="http://placekitten.com/320/160" alt="another title">'
figCaption.innerHTML = "Caption"

main.append(article);
article.append(header, figure, p);
figure.append(figCaption);