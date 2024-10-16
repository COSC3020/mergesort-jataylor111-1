# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

-------------------------------------------------

I believe that my iterative mergesort should be $\Theta(n^2log(n))$

the first thing it does is check if the array is either emtpy or of size 1 which is a constant +1

Then on line 8 there is the first for loop that will increase by a factor of 2 each time it iterates, not reaching every element due to this, this as a
result creates an asymptotic complexity of $log(n)$

And on line 9 it immedietly enters a second for loop that will compare every element so it will have a complexity of $n$

After that it enters a while loop on line 30 which in it's worst possible case will compare every possible element in the array which will create an 
asymptotic complexity of $n$.  

This while loop also contains another for loop at line 36 but it has a constant run time so it is "consumed" by the $log(n)$

so we have a complexity of $\Theta(log(n)*n\*n + 1)$ = $\Theta(n^2log(n))$


I got help from Ali in the lab this time because no matter how I looked at it I couldn't think of any other complexity than $\Theta(n^2log(n))$.  He helped me see that I was looking at it backwards and that I was getting too much info from the third resource below.  The complexity wound up being the same but he was a great help in understanding how to go about this in the future.

I wasn't sure how the different declarations worked in for loops so I used this reddit forum link (https://www.reddit.com/r/javascript/comments/a50jte/is_it_best_to_use_var_or_let_in_for_loop/) for answers.

I used wikipedia at this link (https://en.wikipedia.org/wiki/Merge_sort) to get the steps of the process down.

This link steered me in the wrong direciton and as I mentioned above had me looking at my code incorrectly, I was going to remove it but decided to keep for documentary purposes.  (https://adrianmejia.com/how-to-find-time-complexity-of-an-algorithm-code-big-o-notation/#Logarithmic-Time-Loops) website because I wasn't sure how to analyze my while loop at first and it helped put it into perspective.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice
