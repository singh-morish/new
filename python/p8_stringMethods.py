# string are immutables
a = "harry! !!!!!"
print(len(a))
print(a.upper())
print(a.lower())
print(a.rstrip("!")) # rstrip removes the trailing character
print(a.replace("Harry", "John")) #replace all the character or string with the other
print(a.split( " ")) # change the string in a list when a space is found
print(a.capitalize())
print(a.count("r"))
print(a.endswith("!!!")) # tell us whether the string is ending with that particular character or not
print(a.find("r")) # tell us the first ocuurenc of the charater index
print(a.isalnum()) # check if our string is alphanumeric
print(a.isspace()) # check whether the our sting conatin white space or not

