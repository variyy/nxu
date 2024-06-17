line=input().split()
line=line[:-1]#去掉末尾的-1
list=[]
for i in line:
    list.append(int(i))
num=sum(list)
s=len(list)
count=0
if s==0:
    print(0)
else:
    avg = num / s
    for i in list:
        if i>avg:
            count+=1
    print(count)