const loadingScreen = document.querySelector(".loadingScreen");
const loadingQuote = document.querySelector(".loadingQuote");
const navBar = document.querySelector(".navBar");
const quoteAuthor = document.querySelector(".quoteAuthor");
const items = document.querySelectorAll(".navBar_item");
const media = document.querySelectorAll(".media");
const sticky = navBar.offsetTop;
window.onload = () =>
{
	loadingQuote.classList.add("loadingQuoteOnLoad");	
	quoteAuthor.classList.add("loadingQuoteOnLoad");
	
	loadingQuote.addEventListener("transitionend", () => loadingQuote.classList.add("loadingQuoteAfterLoad"));
	quoteAuthor.addEventListener("transitionend", () => quoteAuthor.classList.add("loadingQuoteAfterLoad"));
	setTimeout(function ()
	{
		loadingScreen.classList.add("loadingScreenAfterLoad");
		setTimeout( () => loadingScreen.remove(), 600);
	}, 3200);
	
}

items.forEach(item => item.addEventListener("mouseover", (e) =>
{
	item.classList.add("itemOnHover");
}, false));

items.forEach(item => item.addEventListener("mouseout", (e) =>
{
	item.classList.remove("itemOnHover");
}, false));

function changeTheme()
{
	console.log(scrollY);
	if(Math.round(window.scrollY) >= 730)
	{
		media.forEach(socialMedia => socialMedia.style.color = "white");
		document.body.classList.add("darkTheme");
	}
	else
	{
		media.forEach(socialMedia => socialMedia.style.color = "#28282B");
		document.body.classList.remove("darkTheme");
	}
}

window.addEventListener("scroll", changeTheme);


