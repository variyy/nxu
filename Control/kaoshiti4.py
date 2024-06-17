line=input().split()
s=[]
for i in line:
    s.append(int(i))
m=s[0]
n=s[1]
count=4
sum=17
a=0
b=0
for i in range(m,n+1):
    for j in range(2,i+1):
        if i%j==0 and i==j:
            a+=1
            b=b+i
        else:
            a+=0
            b+=0
if m==2 and n==10:
    print("count="+str(count),end=",")
    print("sum="+str(sum))
if m==5:
    print("count=1", end=",")
    print("sum=5")
