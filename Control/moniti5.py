#在列表某个位置插入元素 list.insert(index,obj)
#求列表最大值/最小值 max_value=max(list) min_value=min(list)
#索引列表中元素下标 max_idx=list.index(max_value)
#列表加入空格b=' '.join(a)
line=input().split()
line=line[:-1]
list1=[]
for i in line:
    list1.append(int(i))
for i in list1:
    print(i,end=" ")
maxvalue=max(list1)
print("")
print("maxvalue = "+str(maxvalue))
s=len(list1)
list1.insert(0,s)
for i in list1:
    print(i,end=" ")
