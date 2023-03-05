# Calculator


This is the calculator project as part of the curriculum for The Odin Project. This is a simple calculator which evaluates arithmetic operations. Although the assignment called for linear calculations without regard for order of operations, I decided to create this calculator to account for precedence. This was a far greater difficulty than I thought, but it was a rewarding challenge that helped me grow and practice everything I've learned up until this point. 

This project used HTML5, CSS3, and JS ES6.

Extra credit for this assignment inlcuded:
- allow users to add a decimal and prevent multiple decimal inputs
- make the calculator look nice! I decided to make an iPhone-themed calculator and aimed to make an exact replica of it using CSS flexbox properties
- instead of a backspace button which deletes a single digit at a time, I created a clear key which deletes the current main input without erasing the entire calculation
- allow keyboard support to input numbers and operations. 

Some features of the calculator which I added of my own accord:  
- decrease the font size of the main display number as the length of the number increases beyond 6 digits and capping the length at 9 digits. This mimics the iPhone calculator's functionality
- for calculations exceeding 9 digits, turn the output into scientific notation
- secondary display which displays the entire calculation
- for long calculations, allow the secondary display to become a scrollable element to prevent expansion and overflow of the container
- allow ability to use output from a calculation for a new calculation and update the secondary display
- add plus/minus button to change a number into a positive or negative

Room for improvement/bugs:
- although I tried to make the code as clean as possible, I know there is still much to prune and optimize. As I learn and grow, I will revisit and update this code.
- the function I created to calculate operations is quite messy and likely an unorthodox method. In order to operate between mult/div and add/subtract and account for operation precedence (mult/div > add/sub), I created two arrays and looped through both. All numbers inputted in the calculator are initially pushed to the first array. In the first loop, the first array calculates all mult/div operations while pushing all add/sub operators and their involved operands to 
the second array. All products/quotients calculated from first array and then pushed to the second array. Then the second loop calculates all add/sub. The final result from the second loop is pushed to the input display.
- there is a bug with the calculator when alternating between using the keyboard and using the calculator's buttons. If a calculator's button is clicked, then attemping to use the keyboard will inadvertently click the last button pressed. 