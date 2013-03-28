---
title: Node.js
layout: page
tags: ['express','node.js', 'development']
pageOrder: 3
---

Why Node?
---------

I've been obsessed with [Node.js](http://nodejs.org/) since mid-2012 when I started to get curious about why distributed p2p social hasn't been built in a usable way yet --this led me to Node.js. Node lets me deploy and create modular job-specific apps to interact with users and servers on the distributed web.

This is a page where you can discover some of the more fascinating resources I've come across. My aim is to simultaneously introduce you to the basics of Node.js.

### Getting started with Node.js

Node.js apps are modular. To get started with Node, you'll inevitably start by loading one or more modules. One of the first modules you learn to load is the 'http' module. This allows your Node.js server to communicate with browsers.

Here's a very basic Hello World Node.js HTTP server. You'll see various examples of this in tutorials below, and on the [Node.js website](http://nodejs.org).

	var http = require('http');

	http.createServer(function (req, res) {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Hello World!\n');
	}).listen(3000);

	console.log('Server running at http://localhost:3000');

Follow the installation instructions for installing [Node.js](http://nodejs.org/download/) on your system. 

To run this app, save it in a text file called helloworld.js. Then use your terminal to start the server like so:

	$ node helloworld.js

Point your browser to [http://localhost:3000](http://localhost:3000) and you'll see 'Hello World!'

If you had this Node.js app hosted on a VPS, you'd be able to point an domain name at it, and then access your app from the internet-at-large.

### Getting started with Express.js

Now, let's take this Node server a step farther, and a step simpler with [Express.js](http://expressjs.com/). 

Create a new file, called helloexpress.js and type the following:

	var express = require('express');
	var app = express();

	app.get('/', function(req, res){
		res.send('Hello World!');
	});

	app.listen(3000);

To run this server, you'll need to install the express module.

	$ npm install express
	$ node helloexpress.js

Navigate to [http://localhost:3000](http://localhost:3000) and you'll see a similar app to the one you created above. This time, you're using Express to handle your routing.

### Node.js things of interest

+ [Express](http://expressjs.com/)
+ [Jade](http://jade-lang.com/)
+ [Stylus](http://learnboost.github.com/stylus/)

### Learn Javascript

+ [Eloquent Javascript](http://eloquentjavascript.net/)
+ [JavaScript for Cats](http://jsforcats.com)
+ [Learning to Love Javascript at Google I/O 2011](https://www.youtube.com/watch?v=seX7jYI96GE)

### Learn Node.js

+ [Art of Node](https://github.com/maxogden/art-of-node)
+ [The Node Beginner Book](http://www.nodebeginner.org/)
+ [The Stream Handbook](https://github.com/substack/stream-handbook)
+ [Mixu's Node Book](http://book.mixu.net/single.html)

### Tutorials

+ [Getting Started with Express.js](http://howtonode.org/getting-started-with-express)
+ [Express JS Tutorial: Part 04, Routes](http://youtu.be/Hc3v6wbmebQ)
+ [Understanding Backbone.js](https://github.com/kjbekkelund/writings/blob/master/published/understanding-backbone.md)
+ [Build a contact form using Node.js and Express](http://dailyjs.com/2012/09/13/express-3-csrf-tutorial/)

### Videos
+ [Intro to Node.js with Ryan Dahl](http://www.youtube.com/watch?v=jo_B4LTHi3I)
+ [James Halliday controls a killer AR Drone with Node.js](https://www.youtube.com/watch?v=zgt-jNqbxF8)
+ [James Halliday on harnessing the awesome power of Node.js streams](https://www.youtube.com/watch?v=lQAV3bPOYHo)
+ [James Halliday on enabling chaotic Node.js infrastructure](https://www.youtube.com/watch?v=ZI2whsVNAz4)
+ [James Halliday on building federated architecture with Node.js](https://www.youtube.com/watch?v=84PE6EF3YWY)
