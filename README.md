# Resturaunt-Page

The goal of this project was to apply the fundementals of webpack and npm. 

I succeeded in creating a site with three tabs. The logic within each module loads the page content, and the logic in index.js clears and loads the next pages content. 

Challanges: 

The challenges I faced centered mostly around working with npm. I had issues at first linking a stylesheet from within the source folder because the script was loading before the webpage and not being applied. I fixed this by adding an event listener that triggered on DOMElementLoad. 

I also spent about two hours trying to refix this issue because I added a semi-colon to the css which was blocking all declarations after it.

I also ran into several bugs which prevented me from running 'npm webpack' in the console. They were frustrating but at least I know how to circumvent them in the future. 

Successes:

The tab switch logic was no problem at all to make, and while element creation was slow, overall it wasn't too challenging. I was impressed at how quickly I actully got the tab switch logic functional. 

Future:

Style wise this page looks like crap. Right now my focus isn't on the style, so I may come back and improve upon the design if I feel this is a worthwhile project for my portfolio. 