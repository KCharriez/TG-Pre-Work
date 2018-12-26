# TG-Pre-Work

## When we hit https://www.techtonicgroup.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

KC: When we click on a link for a webpage, a request to access the document which builds the webpage is sent by our computer (the client), to the computer that stores that document (the server). The server then verifies that it has the file requested and, if it does, sends that that file to the client's computer. The code in the file instructs the client's browser program on how to visually represent the file requested, building what we know as a modern webpage.

## From start to finish how does that data reach you to be rendered in the browser?

KC: Data is wrapped in computer instructions called code and stored in a computer database. This database is connected to a network. Other computers on this network request the data, becoming clients of the server computer. The request is managed through protocol, which is the language computers use to talk to one another. Internet browsers and servers use the Hypertext Transfer Protocol, or HTTP, to converse.
When the request is received and understood, a response is sent back to the client in the form of the file with the data requested. The instructions that accompany the data, are read by the client's browser. These instructions tell the browser what resources it will need to gather to render the data for display. The browser then gathers these resources and begins to build the webpage. When this is completed, the webpage is rendered according to the instructions from the server and the other files that it referenced for building, if any. The webpage is displayed on the client's terminal with the user's desired data framed in the way that the computers instructions meant it to be.

## What code is rendered in the browser?

KC: The code that is rendered in the browser is based on what the server-side computer provides as a response from the client's request. This includes the HTML file but can also include JS, CSS, and other programs if the file document references those files. It will then request for those files as well. All of the files used in building the webpage document are used to render, or display, the webpage on the client's computer screen.

## What is the server-side code’s main function?

KC: The main function of server-side code is to control information that is sent to the client-side computer, deciding what data is sent out when a request is made.

## What is the client-side code’s main function?

KC: The main function of client-side code is to give instructions on how to present the requested data.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

KC: Instances of client-side assets are created depending on how many are referenced in the document file requested.

## How many instances of the server-side code are available at any given time?

KC: The server-side code instances are made available varies based on the server computer used and its hardware and the frequency of client requests it receives.

## What is runtime?

KC: In programming, runtime is the time during which the computer is following the instructions of its code.

## How many instances of the databases connected to the server application are created?

KC: The number of database instances that are created depends on how many client requests the server receives.
