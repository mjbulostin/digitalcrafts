# 1
# Create a User class, that has the ability to print the users name
# the ability to print the users age
# Create a TempUser class, that has the ability to only print his name.
# 
# Create a function that asks you to give the user a name, and give 
# the user an age, and will then create the user for you, 
# and print it to the screen. 
# The user will have a choice to either be a temp user or a User

#__init__ = dunder init (requires self)

# class User:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

# mike = User("Mike", 32)

# print("the name of this user", mike.name)
# print("the age of this user", mike.age)


# class TempUser:
#     def __init__(self, name):
#         self.name = name

# joe = TempUser("Joe")

# print("the name of this temp user is", joe.name)

class TempUser:
    def __init__(self, name):
        self.name = name

class PermUser:
    def __init__(self, name, email):
        self.name = name
        self.email = email

# joe = TempUser("Joe")


def typeOfUser():
    newUser = ""
    typeOfUser = input("Would you like to be a (t)Temporary User, or a (p)Permanent User?")
    if typeOfUser == "p":
        userName = input("What is your name?")
        userAge = input("What is your age?")
        newUser = PermUser(userName, userAge)
        print(f"{newUser.name} is {newUser.age} years old and is a Permanent User.")
    elif typeOfUser == "t":
        userName = input("What is your name?")
        newUser = TempUser(userName)
        print(f"{newUser.name} is a Temporary User.")
    else:
        print("Please try again.")
    return newUser

mike = typeOfUser()

def typeOfUser():
        newUser = ""
        typeOfUser = input("Would you like to be a (t)Temporary User, or a (p)Permanent           User?"
        if typeOfUser == "p":
          userName = input("What is your name?")
          userEmail = input("What is your email?")
          newUser = PermUser(userName, userEmail)
          print(f"{newUser.name} 's email is {newUser.email} and is a Permanent user.")
        elif typeOfUser == "t":
          userName = input("What is your name?")
          newUser = TempUser(userName)
          print(f"{newUser.name} is a Temporary User.")
        else:
          print("Please try again.")
        return newUser

mike = typeOfUser()



        

       
 



