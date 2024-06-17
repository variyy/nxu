a=[1,4,5,6,7,8,9,10,11,12,13,15,18,19,20,21,29,34,54,65]
n= int(input())
def townums_num(a,n):
    for i in a:
        if (n-i) in a:
            if a.index(i)<a.index(n-i):
                print((a.index(i),a.index(n-i)))
                return
            else:
                print((a.index(n-i),a.index(i)))
                return
        else:
            continue
    print("not found")
townums_num(a,n)
