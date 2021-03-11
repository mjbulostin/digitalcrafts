# While loop
# A condition will have to be true, then your loop will keep running
# while (length_of_username < 0):

nameOfUser = input("What is your name?")
lengthOfUserName = len(nameOfUser)
while (lengthOfUserName < 1):
    nameOfUser = input("What is your name?")
    lengthOfUserName = len(nameOfUser)

print("The user name is %s %s " % (first_name_of_user, last_name_of_user))

word = input("Type in a word")

# sudo code
# is that word, a palindrome
# racecar
# tacocat
# FAANG
