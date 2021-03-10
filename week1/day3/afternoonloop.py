first_name_of_user = input("What is your first name?")
length_of_username = len(first_name_of_user)

while(length_of_username < 1):
    first_name_of_user = input("What is your first name?")
    length_of_username = len(first_name_of_user)

last_name_of_user = input("What is your last name?")
length_of_lastname = len(last_name_of_user)
while(length_of_lastname < 1):
    last_name_of_user = input("What is your last name?")
    length_of_lastname = len(last_name_of_user)
print("The username is %s %s" % (first_name_of_user, last_name_of_user))

first_name_of_friend = input("What is your friend's first name?")
length_of_friend_name = len(first_name_of_friend)
print("Your friend's first name is ", first_name_of_friend)
while(length_of_friend_name < 1):
    first_name_of_friend = input("What is your friend's first name?")
    length_of_friend_name = len(first_name_of_friend)

last_name_of_friend = input("What is your friend's last name?")
length_of_friend_last_name = len(last_name_of_friend)
print("Your friend's last name is ", last_name_of_friend)
while(length_of_friend_last_name < 1):
    last_name_of_friend = input("What is your friend's last name?")
    length_of_friend_last_name = len(last_name_of_friend)

print("Your name is %s and you are friends with %s" %
      (first_name_of_user, first_name_of_friend))
