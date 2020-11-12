# Web scraping
Web scraping is the act of grabbing/stealing public data in a programmatic way rather than by hand. It's sort of gray area in tech, and this grayness itself is a bit of a gray area because the difference between a computer scraping and a human scraping is speed. Speed shouldn't be a crime unless in a school zone. 

I suppose the real issue with web scraping is when Terms of Service agreements are breached. TOS often forbids visits by bots and excessive requests to their server.

## A scraping use-case
I had a freelance client who wanted to grab (I will opt to use the word grab over steal) data about job openings for ~1000 companies in germany, and he wanted this data to get updated regularly. This would generally done with an API, but none were available. This would be a tall task for a human, but a simple script can automate the process.

## What does scraping entail?

There are many tools and libraries that can be used to scrape. A common one is "BeautifulSoup", which is a python library that helps to query HTML documents. A simple web scraping script may make a get request to a target website, and then HTML elements with the relevant data will be queried for (often time by CSS selectors).

If we have an element such as this:

    <div class="information">This is information</div>

We could find every bit of information with the class "information", extract its text, and have the data for ourself. 


## Show me some code

Here is an example of what a scraping script may look like. This [website](http://ghettobird.sample.s3-website.us-east-2.amazonaws.com/) will be used for the purposes of demonstration. It contains a header/title, a salary range, and a list of job listings that include a job title, a description, and the date they were posted. 

We could extract this data with a python [script](https://github.com/miles-moran/ghettobird/blob/master/src/main_without_ghettobird.py).


## What can go wrong?

There are tons of points of failure for a scripting app. 
* 503 Response
* Captchas

While these issues can be remedied with proxy rotation and/or captcha solving services, it's inevitable to encounter the following, unless you are scraping [Space Jam](https://www.spacejam.com/).

* HTML/CSS/JS changes and restructuring. 

If a developer John Smith at Jane Doe industries takes a look at their application and feels that the CSS selector "kafka-esque" isn't descriptive enough and replaces it, the scraping script could break.
# Ghettobird (GhettoQL)
Ghettobird is a PIP [package](https://pypi.org/project/ghettobird/0.0.46/) I have developed for web scraping.

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install Ghettobird.
```bash

pip install ghettobird

```
## What is the goal?
The goal of GhettoQL is ease the development and maintenance of web scrapers, but it does this by isolating points of failure. With GhettoQL an entire scraping script can be powered by a single JSON that serves as a blueprint for the website.

The aforementioned [script](https://github.com/miles-moran/ghettobird/blob/master/src/main_without_ghettobird.py) can be replaced by the following:

```
from ghettobird import fly

itinerary = {
	"url": "http://ghettobird.sample.s3-website.us-east-2.amazonaws.com/",
	"flightpath": {
		"header": "//*[@class='page-header']",
		"jobs": [{
			"@iterate": "//div[@class='job']",
			"title": ".//h4[@class='title']",
			"description": ".//h4[@class='description']",
			"dateposted": ".//div[@data-element-type='date']",
			"salary": "//h3[@id='salary-query']"
		}]
	}
}

fly(itinerary)
```
As a result, we can:
* Standardize error handling and logging
* Reuse code
* Create a more readable scraping application
* Easily diagnose hiccups

As a bonus, we can:
* Create scraping scripts without coding knowledge and/or knowledge of XPATH's
## How is Ghettobird used?
I create a Ghettobird itinerary after examing the website I am hoping to scrape. The JSON has three fields:
* url
* options
* flightpath

The **url** field is quite simply the page we are hoping to scrape.
The **options** field are a series of configurations that alter the execution of the scraping script. The most important of these is the *brower* option. The browser option takes a Selenium browser. If a browser is not provided, the *fly* function will follow it's *lxml* routine, which means it will grab HTML with a simple get request. If a browser, is provided, the HTML document will be manipulated with Selenium.

#### LXML Method
This is the quickest method and most preferred method of scraping. However, for Javascript-heavy pages (like most React applications), this will not be enough to grab data. 
#### Selenium Method
This is the method required for Javascript heavy pages. It is slow and inefficient, but often necessary. Avoid at all costs.  

After creating the flightpath, calling the *fly* function will return an object that include
* Data
* Error logs 

# Ghettobird
A repo for GhettoQL flightpaths and a source of unnoficial GraphQL API's.

## Original goal
The scope of this website is something i'm still figuring out, but my original goal was to create it as a repo for flightpaths that I have created, and list them under the URL's to which they belong.

By downloading the Ghettobird package and a flightpath JSON, you could easily scrape any website locally. 

Blueprints for websites could be added by users, edited, requested, and mantained. Broken flightpaths could be updated quickly. 
## Expanding on this goal
I plan to create an API that takes a flightpath ID's as a query and accepts a GraphQL query. A Graphiql "playground" exists for each established unnoficial API. Rather than "scraping", you could simply use one of many API's.