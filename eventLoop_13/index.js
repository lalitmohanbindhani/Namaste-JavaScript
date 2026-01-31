/*
JavaScriptis a synchronous single threaded language it has one 
call stack and it can do only one thing at a time. the call stack is present 
inside the JavaScript engine and the js engine is present inside
the browser
browser has many super powers like local storage, timer, link that we give access to outer 
enviromnnt, and many more
tho access these super powers we need web APIS through a global object that is window ex:- window.setTimeout()
1.set timeout
2.dom apis
3.fetch()
4.local storage
5.console
6.location


When a setimeout occurs then the call back function inside that is attaches to the timer 
and java script run as usaula as the code executed the gec quickly poped up the stack
and still the timer is running after 5 second when the timer expires the callback function 
need to push inside the call stack but it can not directly move inside the call stack so it 
register in the call back queue and then event loop checks that if anything present inside 
the call back queue and also moniter call stack if callstack is empty and the call back 
queue has a call back function then it quickly send that to the call stack and quickly execute
it and log the console.

microtask queue - it is similar to the call back queue but it has higher priprity.
1.all the callback function that comes through  promises will go to microtask queue
2.mutation observer - keeps check whether some mutation in the observer or  not

starvation of callback queue - as microtask queue has more preference so if there were 
so many call back function in the microtask queue so the cb inside callback queue does 
not get a chance to execute inside call stack this is called starvation of callback queue.

*/
