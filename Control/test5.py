list1=[]
list1.append(int(input("Enter a number (<Enter> to quit):")))
while list1[len(list1)-1]!=0:
    num1=int(input("Enter a number (<Enter> to quit):"))
    list1.append(num1)
    if num1 =="":
        break
print(list1)
n=len(list1)
num=0
for i in list1:
    num=num+i
a=num/(n-1)

print(a)
