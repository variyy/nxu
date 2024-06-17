line=input().split()
list =' '.join(line)
S=[]
for i in list:
    S.append(int(i))
s=len(S)
l=s-1
while l>2:
    for i in range(l):
        if S[i] == S[i+1]:
            S=S[:i]+S[i+2:]
            break
    s = len(S)
    l = s - 1
for i in S:
    print(i,end=" ")
