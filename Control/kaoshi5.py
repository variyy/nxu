a=input()
b=' '.join(a)
line=b.split()
s=[]
for i in line:
    s.append(i)
l=len(s)
a=int(l/2)
count=int((l-2)/2)
for i in range(a-1):
    if s[i]!=s[l-i-2]:
        print("no")
        break
    print(count)
    break
