In this project, I was tasked to create a random password generator that prompts the user for password length. 
I was able to generate a random character easily, but I spent a lot of time struggling into putting it into an array.
But, after figuring out how to push it into the array, I realized that I was going about it wrong. If I put it into an 
array, each character would be separated. As such, I needed to make the variable into a string instead of an array and use
+= to add letters into a string. After, I used dom elements to change the text box into the newly generated password.

My biggest struggle is creating the check box for each type of characters. While the password the app generates is strong, it doesn't allow for user feedback on the types of characters they want to use. My idea was to create arrays separate arrays for each one that would be pushed onto each other that would be added depending on the buttons the user presses. But, when the arrays get pushed into one array, they create arrays in that array that is hard to call on.


