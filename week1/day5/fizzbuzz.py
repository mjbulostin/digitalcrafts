for x in range(0, 101):
    if x % 3 == 0 and x % 5 == 0:
        print("FizZBuzZ")
    elif x % 3 == 0:
        print("FizZ")
    elif x % 5 == 0:
        print("BuzZ")
    elif (x % 3 != 0 and x % 5 != 0):
        print(x)
