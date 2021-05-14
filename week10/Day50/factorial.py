number = int(input(" Enter a number to find factorial : "))
fact = 1

for i in range(1, number + 1):
    fact = fact * i
print("The factorial of %d = %d" %(number, fact))