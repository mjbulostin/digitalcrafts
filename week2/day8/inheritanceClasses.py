class Currency:
    def __init__(self, name, nation, price):
        self.name = name
        self.nation = nation
        self.price = price
        self.quantity = quantity

    def printCurrency(self):
        print(f"{self.nation} {self.name} {self.price} ")

    def addQuantity(self, amount):
        # self.addQuantity += amount
        self.quantity = self.quantity + amount


# print("The value of this currency is ", yen.price)
# print("This currency is %s, it is %s, from %s" %
#         (yen.name, yen.price, yen.nation)
#         )   
# print(f"{yen.name} {yen.price} {yen.nation}")
# usDollar = Currency("Dollar", "US", 1)
# print(f"{usDollar.nation} {usDollar.name} {usDollar.price} ")

yen = Currency("Yen", "Japan", 20, 10)
yen.printCurrency()

usDollar = Currency("Dollar", "US", 1, 10)
usDollar.printCurrency()

swedishKrona = Currency("Krona", "Swedish", 1, 10)
swedishKrona.printCurrency()
