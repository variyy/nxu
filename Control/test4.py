
list1=[]
while True:
    num1=input("Enter a number (<Enter> to quit):")
    if num1 =="":
        break
    list1.append(int(num1))
n=len(list1)
num=0
for i in list1:
    num=num+i
a=num/n
list1.sort()
import statistics as stat
median= stat.median(list1)
print("The mean is "+'%.6f'%a)
print("The median is "+'%.6f'%median)
