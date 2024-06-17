n= int(input())
line = input()
list_str= line.split()
list1=[]
for i_str in list_str:
    i=int(i_str)
    list1.append(i)

dict_n={}
for i in list1:
    if i in dict_n:
        dict_n[i] +=1
    else:
        dict_n[i]=1
def cmp(item1,item2):
    if item1[1]==item2[1]:
        if item1[0]<item2[0]:
            return -1;
        elif item1[0]>item2[0]:
            return 1
    else:
        if item1[1]>item2[1]:
            return -1;
        elif item1[1]<item2[1]:
            return 1

import functools
list_n = list(dict_n.items())
list_n.sort(key=functools.cmp_to_key(cmp))

for item in list_n:
    print(item[0],item[1])



