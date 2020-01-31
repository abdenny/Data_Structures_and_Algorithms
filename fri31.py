
# 2.


def check_triplet(a, b, c):
    return (a**2) + (b**2) == (c**2)


limit = 1000

for x in range(1, 1001):
    for y in range(x+1, 1001):
        z = limit - (x + y)
        if(check_triplet(x, y, z)):
            if x + y + z == limit:
                print(x)
                print(y)
                print(z)
                print(x * y * z)
                break
# 3.
# list1 = []
# list2 = []
# string1 = input("Input a string of characters... ")
# string2 = string1 + input("Enter an additional character... ")
# for i in string1:
#     list1.append(i)
# for i in string2:
#     list2.append(i)
# if len(list2) > len(list1):
#     print(list2[len(list1)])
