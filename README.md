# _Beep Boop_

#### _A web page to take a numerical input and output something new, 6-14-2019_

#### _Authors: Nate Wangemann_

## Description

_A web page to Beep Boop a numberical input_

## Setup/Installation

Step 1: Clone this repository to your desktop

Step 2: Open index.html

## Specs

| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| The program returns a range of numbers from 0 to the users inputted number | 4 | 0,1,2,3,4 |
| Numbers that contain a 1: all digits are replaced (all digits) with "Beep!" | 4 | 0, Beep!, 2, 3, 4 |
| Numbers that contain a 2: all digits are replaced (all digits) with "Boop!" | 4 | 0, Beep!, Boop!, 3, 4 |
| Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that." | 4 | 0, Beep!, Boop!, "I'm sorry, Dave. I'm afraid I can't do that.", 4 |
| For numbers with both a 3 and a 2, all digits are replaced with "I'm sorry, Dave. I'm afraid I can't do that." | 32 | ... "I'm sorry, Dave. I'm afraid I can't do that." ... |
| For numbers with both a 2 and a 1, all digits are replaced with "Boop!" | 21 | ... "Boop!" ... |
| For numbers with both a 3 and a 1, all digits are replaced with "I'm sorry, Dave. I'm afraid I can't do that." | 13 | ... "I'm sorry, Dave. I'm afraid I can't do that." ... |

## Licensing

MIT License

Copyright (c) 2019 Nathan Wangemann

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
