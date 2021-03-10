nameofuser = input("What is your first name?")
lengthofname = len(nameofuser)
lastnameofuser = input("What is your last name?")
lengthoflastname = len(lastnameofuser)
Friendsname = input("What is your friends name?")
Friendslastname = input("What is your friends last name? ")
while(lengthofname > 1):
    print("Your first name is %s " % nameofuser)
    print("Your last name is %s " % lastnameofuser)
    print("Your first and last name is %s %s " % (nameofuser, lastnameofuser))
    print("Your friends name is %s " % Friendsname)
    print("Your friends last name is %s " % Friendslastname)
    print("Your names are %s %s %s %s" %
          (nameofuser, lastnameofuser, Friendsname, Friendslastname))
