/*
*JavaScript can run inside a browser, surver, samart watch, lignt bulb it all possible because of javascript runtime enviroment.
*jsavascript runtime enviroment has js engine, set of APi, call back queue, microtask queue event loop
*js engine is the heart of javascript runtime enviroment 
*different  javascript engine in javaScript runtime enviroment 
1.microsoft edge - Chakra
2.Mozila firefox - Spider Monkey. 
3.Google Chrome, node JS , Dino - v8 and many more
*what was the first Js Engine developed in the world -
The first JavaScript engine was created by Brendan Eich ,SpiderMonkey engine, still used by the Firefox browser.
*Javascript takes human readeble code as input, and it goes through three steps
 *1. parsing - in this phase code is broken down into tokens ex:- let a = 10; and there is a syntax parser which takes the code and 
 converts it in to an AST - Abstarct Syntax tree then this AST pass to the compilation pahase.
*website - astexplorer.net - generate an AST
The compilation and execution goes hand in hand
*interpretor:-  Interpretter basically takes our code and it execute the code line by line ,it does not know what will happen in the next line.
code is fast and doest not have to wait for complied first .
*Compiler:- inCse of compiled language our whole code is compiled first even before executing a single line of code. then the code is 
compiled and a new code is form which is the optimized version of the complied code,compiled language have more efficiency.
*javaScript is a interpretter as well as complied language.
*JIT compilation - just in time compilation means javascript can execute in both interpretter and complier language according to the JS engine.
*2. compilation - The AST is goes to the interpretter and then the interpreeter converts the high level code to bite codw and then it 
moves to the executiom phase.
while it is doing so it takes the  help of the compiler to optimize the code
*3. execution:- there are two components here 
1.Memory heap - this the place where all the memory is stored, it is insink with the call stack garbage collector.
1.1 Gsrbage Collector :- it tries to free up memory space whenever possible
2.Call stack
*v8 JS Engine
*JavaScript Source code- parser - Abstract syntax tree - interpreter - byte code
                                                                    - compiler Turbofan -   optimized machine code -byte code  
garbage collector - Orinoco, it uses mark and swipe algorithm         
*/
