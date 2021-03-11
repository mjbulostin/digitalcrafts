def welcomeMsg():
    msg = """\n \n \n
    \n \n \n

    "Welcome to my calculator!

             ( ͡° ͜ʖ ͡°)
    \n \n \n

    """
    return print(msg)


def operation(operator, number1, number2):
    answer = ""
    if (operator == "+"):
        answer = int(number1) + int(number2)
    elif(operator == "*"):
        answer = int(number1) * int(number2)
    elif(operator == "/"):
        answer = int(number1) / int(number2)
    elif(operator == "-"):
        answer = int(number1) - int(number2)
    else:
        print("Invalid operation")
    return print("Your operation of %s %s %s is = %s \n" % (number1, operator, number2, answer))


choice = "Thank you for using my calculator, goodbye!"
while(choice != "y"):
    welcomeMsg()
    firstNumber = input("Gimme your first number!")
    operand = input(
        "Gimme an operation, ( +, -, *, /)\n")
    secondNumber = input("Gimme your second number!\n")
    operation(operand, firstNumber, secondNumber)
    quitMsg = input("Would you like to quit? y (yes) or n (no)")
    choice = quitMsg
