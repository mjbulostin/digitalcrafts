# store dictionaries in a list +++
# make dictionar(ies) +++
# delete something on a list +++
# add something to a list +++
# view everything on the list +++
# have a way to quit +++
# can't stop won't stop until Q :check +++
# MAKE THEM IN FUNCTIONS check in progresss +++


toDoList = []


def welcomeMessage():
    messsage = """
( ͡° ͜ʖ ͡°)
Press 1 to add task
Press 2 to delete task
Press 3 to view all tasks
Press q to quit
( ͡° ͜ʖ ͡°)
"""

    return print(messsage)


def addfunction():
    # how do we add to a list
    toDoDictionary = {}
    taskToAdd = input("What task would you like to add?")
    priorityOfTask = input("What priority is this? high, medium, low?")

    # how do we add a "title"key and a "priority" value?
    toDoDictionary["title"] = taskToAdd
    toDoDictionary["priority"] = priorityOfTask
    toDoList.append(toDoDictionary)

    return print("I added * %s * to your list of things to do" % taskToAdd)


def viewfunction():
    count = 1
    print("Here are your ToDos")
    print("==========================")
    for task in toDoList:
        print(" %d. %s = %s " % (count, task["title"], task["priority"]))
        count += 1
    print("==========================")
    return print("Alrighty then!")


def delfunction():
    print("Here is your ToDos")
    viewfunction()
    taskToDelete = int(input(
        "What task would you like to delete (choose the index)\n")
    # toDoList.pop(taskToDelete - 1)
    taskToDeleteIndex=int(taskToDelete) - 1
    taskThatIsGettingDeleted=toDoList[taskToDeleteIndex]
    del toDoList[taskToDeleteIndex]
    return print("I deleted %s off of your list" % taskThatIsGettingDeleted)

    # return print("Here is your list of ToDos")

def determineTask(userChoice):
    whatTheyChose=""

    if(userChoice == "1"):
        whatTheyChose=addfunction()
    elif(userChoice == "2"):
        whatTheyChose=delfunction()
    elif(userChoice == "3"):
        whatTheyChose=viewfunction()

    else:
        print("Invalid key, please choose from the list provided)"


    whatTheyChose=choice
    return whatTheyChose


choice=""
while(choice != "q"):
    welcomeMessage()
    userChoices=input("What would you like to do?")
    outcome=determineTask(userChoices)
    choice=outcome
