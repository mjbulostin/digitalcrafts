pets = ["doggo", "cat", "iguana", "pikachu"]
otherPets = ["mouse", "bird", "rabbit"]
people = ["bob", "sally", "will"]
# you can use len to find the length of the list
# print(len(pets))

# Loop over a list
index = 0

# looping over a list, a while loop requires a condition
# while index < len(pets):
#     pet = pets[index]
#     print("What pet are you? I'm a %s" % pet)
#     index += 1
#     # index = index + 1, same as the above


# For loop, foreign, for...in <--- BETTER TO USE IN LISTS than while loops --->
# count = 0
# write for, write the singular name of the lists you are looping over, write of, write the name of the list
# for pet in people:
#     print(pet)
#     print(count)
#     count += 1
# How do we combine lists?
# combinedLists = pets + otherPets
# firstList = [1, 2, 3]
# firstList.extend([4, 5, 6])

# print(firstList)

# How do we modify a list?

pets[0] = "otter"
print(pets)
