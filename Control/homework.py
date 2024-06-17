lst=[1,2,3,4,5,6,7,8,9,10]
num=int(input())
i=0
for data in lst:
    if data==num:
        i=i+1
if i==0:
    print("Not found!")
else:
    n= lst.index(num)
    print("The subscript is "+str(n))

lst2=[]
for a in lst1:
    if a>=0:
        lst2.append(a)
        print(a,end=" ")
print("")
num = len(lst2)
print(num)
maxNum = max(lst2)
minNum = min(lst2)
lst2 = [maxNum] + lst2
lst2.append(minNum)
for b in lst2:
    print(b,end=" ")