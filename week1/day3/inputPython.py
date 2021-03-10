# Take the user's first name


first_name_of_user = input("What is your first name?")
# Convert the user's first name into a number value that we can use
length_of_username = len(first_name_of_user)
while(length_of_username < 1):
    first_name_of_user = input("What is your first name?")
    length_of_username = len(first_name_of_user)

last_name_of_user = input("What is your last name?")

length_of_username = len(last_name_of_user)
while(length_of_username < 1):
    last_name_of_user = input("What is your last name?")
    length_of_username = len(last_name_of_user)
print("The username is %s %s" % (first_name_of_user, last_name_of_user))

# print("Username is ", first_name_of_user)
# print("Hello %s %s, welcome to python!" % (first_name_of_user, last_name_of_user))
# If statements. Do something if a certain condition happens or doesn't happen
# Underneath the IFFstatement, you need to indent your code, to let the IF statement
# know the code belongs to it
# If statements have if _your condition_ :
# else: code goes below it


# if length_of_username > 0:
#     # if this username length is greater than 0, aka it returns TRUE, we do the code in here
#     name_of_friend = input("What is your friend's name?")
#     print("Your friend's name is ", name_of_friend)
# else:
#     print("Please enter at least one letter...literally one letter")


# While loop
# A condition will have to be true, then your loop will keep running
# while (length_of_username < 0):

#     # Take the user's last name
# last_name_of_user = input("What is your last name?")
# # Store the user's last name into a number value that we can use
# length_of_user_last_name = len(last_name_of_user)

# print("This is the length of the user's first name ", length_of_username)
# print("This is the length of the user's last name ", length_of_user_last_name)
# print("The user name is %s %s " % (first_name_of_user, last_name_of_user))
