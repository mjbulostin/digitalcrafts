# ask the user to create a building (new instance of the building class)
# they will enter in height
# capacity (people)
# sqft
# 5 instances of a building
# print out the specs of the buildilng everytime a building is made
# print statement needs to be a method

class Building:
    def __init__(self, height, capacity, sqft):
        self.height = height
        self.capacity = capacity
        self.sqft = sqft

def createBuilding():
    counter = 1
    while counter < 6:
        buildingHeight = (input(f"How tall is building number {counter}?"))
        buildingCapacity = (input("What is your building's maximum capacity? How many people can it hold?"))
        buildingSqft = (input("What is the square footage of your building?"))
        newBuilding = Building(buildingHeight, buildingCapacity, buildingSqft)
        print(f"Building {counter} is {newBuilding.height} tall, its max capacity is {newBuilding.capacity} people, and the square footage is {newBuilding.sqft} sqft.")
        counter += 1

createBuilding()


