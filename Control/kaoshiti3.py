n=int(input())
line=input().split()
s=[]
for i in line:
    s.append(int(i))
l=len(s)
a=l-1
cha=[]
for i in range(a):
    c=s[i]-s[i+1]
    value=abs(c)
    cha.append(value)
minvalue=min(cha)
print("The minimum of interval is "+str(minvalue))
print("Integers beside the interval:",end=" ")
for i in range(a):
    c=s[i]-s[i+1]
    value = abs(c)
    if value==minvalue:
        print('<'+str(s[i])+','+str(s[i+1])+'>',end=" ")
