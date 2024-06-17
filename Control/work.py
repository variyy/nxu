Q=int(input())
arr=[]
arr=(list(map(int,input().split())))
arr.sort()
temp=0
for i in arr:
    if arr.count(i)>temp:
        max_ele=i
        temp=arr.count(i)
print(max_ele,end=" ")
print(temp)