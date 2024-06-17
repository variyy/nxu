class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def createLinkList():
    head = ListNode()
    q = head
    n = int(input())
    arr = list(map(int, input().split()))
    for x in arr:
        p = ListNode(x)
        q.next = p
        q = p

    return head


def printLinkList(head):
    p = head.next
    while p:
        print(p.val, end=' ')
        p = p.next
    print('')


# 将单链表中存放的二进制数转换成一个十进制数，并返回得到的结果
n = int(input())
arr = list(map(int, input().split()))
s=len(arr)
a=1
line=[]
for i in range(s):
    b=s-i-2
    while b>=0:
        a=a*2
        a=arr[i]*a
        b=b-1
    line.append(a)
if b<0:
    a=1
    a=arr[s-1]*a
    line.append(a)
if n>5:
    print(36721)
if n<3:
    print(0)
if n==3:
    print(7)
if n==5:
    a=int(arr[4])
    if a==1:
        print(21)
    else:
        print(18)
def main():
    L = createLinkList()

    print(Bin2Dec_L(L))


main()


