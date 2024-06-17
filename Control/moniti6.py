a=input()
b=' '.join(a)
line=b.split()
S=[]
for i in line:
    S.append(i)
s=len(S)
l = len(S)-1
while s>2:
    for i in range(l):
        if S[i] == S[i + 1]:
            S = S[:i] + S[i + 2:]
            break
    s=len(S)
    l=len(S)-1
for n in S:
    print(n,end="")