export const blog = `
# Developer Blog
## 11/11/20
I had the idea about two days ago to create this website as a repository for blueprints created with "Ghettobird", the scraping framework/tool that I have built.

https://pypi.org/project/ghettobird/

yarn add ghettobird

The project is something I created to ease the development of web scrapers. Even with libraries like beautifulsoup, the code is messy and often repeats itself. There are a few
scraping frameworks and tools out there (none which I have used), but I wanted to create something myself because that's the sort of person I am. I will reinvent a shitty wheel to say I did it.

The idea is to pack all the fragile parts of a web scraping script into one area. There are a ton of points of failure for any scraper, captchas, failed requests, blocked requests, and probably the most prevelant,
the change of HTML/CSS/JS structure of a website. 

I have created a function within my ghettobird package (called fly) that takes a JSON-esque shape that drives the entire scraper. The shape includes a url, options, and names of fields you are trying to get
and a sort of direction in which to look, using xpaths (XML PATHING LANGUAGE).

This fly function has two variatans, the Selenium version and the XMLX version (i forgot what its called). Both work exactly the same, but are slightly different behind the scenes.

The LXML version grabs web pages through simple get requests, which is the preferred method if its possible to grab data thsi way.

The Selnium method is for webpages that are loaded with javascript (like your average react app). A get request to these websites won't give you what you are expecting.

I've used my ghettobird package, and this website is an expansion on the idea. I think it will serve as a repo for the blueprints (the JSON structure that outline data and their appropriate xpath).

Not only that, but as a sort of proof of concept, i've wrapped retreived data with graphql (which I learned a bit about yesterday, which was a dumb thing to do i should have taken it slow), and have created

a microscopic API with the scraped data. 

This is all horribly innificent, but remember the entire point of scraping is too grab public information when their is no public api. This is a place where blueprints could be modified, fixed, changed, if 

anything goes wrong, where people could request blueprints, and the backend i'm building could sort of serve as a middleman api. Where scraped data is turned into a database and users could query it like it was 

an official API. 


`

export const about= `

verb
verb: ghetto; 3rd person present: ghettoes; past tense: ghettoed; past participle: ghettoed; gerund or present participle: ghettoing

    put in or restrict to an isolated or segregated area or group.


Web scraping: explain what it is, where an API doesn't exist, we grab data

Data is ripped from its organized structure and scattered among HTML elements for aesthetics.

GhettoQL is a way of sectioning of fragile goad into a JSON. It drives a function. 

Writing a scraper goes from boiler plate, functions, xpaths, yadadadada, to a JSON. I call these JSON's flightpaths.

Ghettobird can serve as a repo for these flightpaths, and an easy way to see if an unofficial api exists.

It can be usd to quickly fix api's that are broken do to changes in HTML/JSS/CSS.

Right now, it's a bit limited because I can't pass functions through JSON. The pip package has some built in functions I call transfomer functions that somehoe interacts and usually grabs data from elements


tech used:

backend: python, flask, ghettobird,

db: firebase 

frontend: react, graphql (Wraps a json)

(MAYBE MAKE A REQUEST TO GITHUB FOR THE REQUIREMENTS.TXT AND PACKAGE JSON TO GIVE AN IDEA OF TECH USED)
`