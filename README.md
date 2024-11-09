# knightsTravailsProject

so first i need to create the graph and decided to represent it with an adjacency gragh
because it seemed to be an elegant implementation.

i was going to fill in the multidemesnional array manually but decided that would take way to long
and decided im going to create a program to fill in the array instead. I have computed the first 
values myself to make sure my code fills in the array correctly. 
ive done [0,0], [0,1], [0,2], [0,3], [0,4]

completed the program started a function that will tell you the fastest route from one cordinate 
to another. The improvements i have to make are that it needs to not traverse to vertices that
it has already visted in the current branch. Aswell as i want the function to return all the possible
fastest routes. So if there is two ways to get the same place in the same amount of steps then i will
return both ways