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

This is because when it starts it enters two for loops based on the length of the array, which gives a complexity of $n*n$ or $n^2$

After that it enters a while loop which runs until we can no longer split the array into halves, which is $log(n)$.  It also contains another for loop but as it is less than the $log(n)$ complexity it won't change it.

so we have a complexity of $\Theta(n*n\*log(n) + 1)$ = $\Theta(n^2log(n))$


I wasn't sure how the different declarations worked in for loops so I used this reddit forum link (https://www.reddit.com/r/javascript/comments/a50jte/is_it_best_to_use_var_or_let_in_for_loop/) for answers.

I used wikipedia at this link (https://en.wikipedia.org/wiki/Merge_sort) to get the steps of the process down.

I also got some help from this (https://adrianmejia.com/how-to-find-time-complexity-of-an-algorithm-code-big-o-notation/#Logarithmic-Time-Loops) website because I wasn't sure how to analyze my while loop at first and it helped put it into perspective.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice
