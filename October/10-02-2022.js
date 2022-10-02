// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// // When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

//Solution

correct = s => s.replace(/0/g, 'O').replace(/1/g, 'I').replace(/5/g, 'S')


// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'


//solution

function greet(name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest'
}
//Alternative solution

//function greet (name, owner) {
// if(name===owner){
//   return 'Hello Boss'
// }else{
//   return 'Hello guest'
// }}


// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

function hero(bullets, dragons) {

    if (bullets >= 2 * dragons) {
        return true
    } else {
        return false
    }
}
