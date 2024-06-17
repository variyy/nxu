n=int(input())
line=input().split()
s=[]
for i in line:
    s.append(int(i))
l=len(s)
a=l-1
while l>2:
    for i in range(a):
        if s[i] == s[i + 1]:
            s = s[:i] + s[i + 2:]
            break
    l = len(s)
    a = len(s) - 1
    break
l=len(s)
if l==2:
    if s[0]==s[1]:
        print("false")
    else:
        for i in s:
            print(i,end=" ")
else:
    for i in s:
        print(i, end=" ")
