# Type of a function
# built in function for python
# print ("")
# len(2)

# print(1 + 3)
# defining a function
# the word "def", the name of the function, parenthesis (), then a colon :
# in the body of the function, you need a return statement

# def printMessage():
#     return print("haiiiii")

# def add(number1, number2):
#     return number1 + number2

# def multiply(number1, number2):
#     return number1 * number2

# def subtract(number1, number2):
#     return number1 - number2

# def division(number1, number2):
#     return print(number1 / number2)

# if (getOperand == "/")
# division(getFirstNumber, getSecondNumber)

# print(add(2, 3))
# firstString = input("Gimme a word")
# secondString = input ("Gimme another word")

# def input1 ():
#     return firstString / secondString

# def division(number1, number2):
#     return print(number1 // number2)

# division(10, 5)

# string1 = input(
#     "Findout how many characters are in your name by typing it out here")
# # lengthOfstring = len(string1)
# # print (lengthOfstring)


# def exampleCalc(word):
#     length = len(word)
#     return print(length)

# exampleCalc(string1)

# ask for input, take that string, and print it out, all in a function
askUserToType = input("Type in a word")
askUserToTypeAgain = input("Type in another word")


def printWhatUserTypes(firstMessageTyped, secondMessageTyped):
    # Local Variable
    combinedMessage = firstMessageTyped + " " + secondMessageTyped
    print(askUserToType)
    return print(combinedMessage)


# SCOPE
# SCOPE is about having access to certain things in your program
# Global scope, means anyone can access this variable,function from anywhere inside your program
# Local scope, or LEXICAL SCOPE, means you only have access to certain variables INSIDE of a specific place

# printWhatUserTypes(askUserToType, askUserToTypeAgain)

# printMessage()
# Your assignment to redo your calculator
# getFirstNumber = input("Gimme a number")
# getSecondNumber = input("Gimme a second number")
# getOperand = input("Gimme a Operand")
