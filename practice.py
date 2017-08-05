# # MyTuple= [(1,2,'nishant'),(3,4,'kiran'),(5,6,'yash')]
# # for tup1,tup2,i in MyTuple:
# #     print(tup1)
# #     print(tup2)
# #     print(i)
#
# i=1
# while i<5:
#     print("i is: {}".format(i))
#     i=i+1
#
# out=[]
# for item in range(10):
#     out.append(item**2)
# print(out)
#
#
# def FindGreatest(a,b):
#     if(a>b):
#         print("{} is greater".format(a))
#     else:
#         print("{} is greater".format(b))
#
#
# FindGreatest(10,9)

import random
def generate_code():
    digits = list(range(10))
    random.shuffle(digits)
    print(digits[:3])
    return (digits[:3])

def TakeNumbers():
    # number = list(input("Enter your guess ?"))
    number=[int(n) for n in input("Enter Number:").split(",")]
    return number

def comp(gen_code,usr_inp):

    if (gen_code==usr_inp):
        return "Code CRACKED!!"
    # code for comaparison of user input and generated code
    for count, elem in enumerate(gen_code):
        if elem==usr_inp[count]:
            return "Match"
        elif elem==usr_inp:
            return "Close"
        else:
            return "Nope"

# Run Game
print (" Welcome to code breaker, Guess 3 digits")
# declaring return_code
return_code=""
#ask the user until he gives correct code
while (return_code != "Code CRACKED!!"):
    # take user guess
    usr_inp=TakeNumbers()
    # generate the numbers
    gen_code = generate_code()
    # comaparison
    return_code=comp(gen_code,usr_inp)
    # print result
    print(return_code)



# Another hint:
# def compare():
#     gen=generate_code()
#     guess = [int(n) for n in input("Enter Number:").split()]
#     print(guess)
#     while True:
#         for count , elem in enumerate(gen):
#             for userCount, in enumerate(guess):
#                 if (gen[count]==guess[userCount]):
#                     print("Match")
#                     # retrun True
#                 else:
#                     print("Nope")
#                     # return False
# compare()
# myList =([2, 1, 2, 3, 4])

# def count_evens(myList):
#   # CODE GOES HERE
#   count=0
#   for num in myList:
#       if (num%2==0):
#           count+=1
#   print(count)
#
# count_evens(myList)
# def even_bool(num):
#     return num%2 == 0
#
#
# evens= filter(even_bool,myList)
#
# print (list(evens))
#
# ''' LAMBDA FUNCTION USE '''
# evens= filter(lambda num:num%2==0 , myList)
# print(list(evens))


# def no_teen_sum(a, b, c):
  # CODE GOES HERE


# print(n)
# str="The"
# def doubleChar(str):
#     myVar=""
#     for i in range(len(str)):
#         myVar+= str[i] *2
#     print(myVar)
#
# doubleChar(str)
# print(str.lower())
# def stringBits(str):
#     myVar= ""
#     for i in range(len(str)):
#         if(i%2)==0:
#             myVar+=str[i]
#     print(myVar)
#
# stringBits(str)
# print(myVar)
