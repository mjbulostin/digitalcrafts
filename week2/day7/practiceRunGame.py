# You have two characters, a Hero and a Goblin
# your goal is to let them fight, whoever wins, will be printed out
# in a victory message (fancy way of saying a function that prints)
# whoever is defeated can be printed out in that message as well

# Hero
#   name
#   attack
#   defense
#   hp

# Goblin
#   name
#   attack
#   defense
#   hp
#   clan

class Hero:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp
        self.characterClass = "Hero"

    def takeDamage(self):
        self.hp -= 5


class Goblin:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp
        self.characterClass = "Goblin"

     def attack(self):
        self.hp -= 5


class Knight:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp
        self.chacterClass = "Knight"

     def HeroAttacksGoblin(char1, char2):
         print(f"{char1.name}) attacks {char2.name}")
         char2.takeDamage()
         print(f"{char2.name}) takes 5 damage")
         print(f"{char2.name}) has {char2.hp} left")


def characterCreation():
    character = ""
    charName = input("What is your name?")
    charClass = input("What class would you like to be? Choose exactly ((k)Knight, (g)Goblin, (h)Hero)")
   
    if charClass == "h":
        hero = Hero(charName, 10)
    elif charClass == "g":
        character = Goblin(charName, 10)
    elif charClass == "k":
        character = Knight(charName, 10)


bob = Goblin("Mike", 10)
philip = Hero("Phillip", 10)
whitney = Hero("Whitney", 10)
randi = Hero("Randi", 10)
randy = Goblin("Randy", 10)
carlo = Knight("Carlo", 10)

# print("the name of this character", bob.name)
# print("the name of this character", philip.name)
# print("the name of this character", whitney.name)
# print("the name of this character", randi.name)
# print("the name of this character", randy.name)
# print("the name of this character", carlo.name)


# randi to punch randy, simulating your character attacking another character

# you take 5 damage to your health
# I ask the user to type in their name
# I give them health values
# I print out their health values
# I then set a global variable to be the while loop condition
character = characterCreation()
print(character.name, character.hp, character.characterClass)
# while character.hp > 0
#     print("What would you like to do?")
#     if()
    # characterAttack(randi, randy)
    # if randy.hp == 0:
    #     victoryMessage(carlo, joe)



