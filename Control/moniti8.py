import pandas as pd
from pandas import DataFrame  # 用于删除求和时重复项

'''
对待重复成绩，本程序提供两种处理方式（在sort_sum和sort_sin中体现）：
1.利用pandas去除重复项，然后在字典中遍历找到相符值，得到值对应的键
2.不去除重复元素，在遍历寻找相符值时，找到一个即进入下一次循环（continue)
'''


# 定义初始化数据函数
n=int(input())
def input_data():
    data_list = list()  # 用字典储存每个学生数据，并将字典放入列表data_list中
    for i in range(n):
        data_list.append(dict())  # 在列表中创建空字典
        title = ["Name", "Math", "English"]  # 创建键列表用于字典键值对建立
        str_tmp = input()  # 输入得到字符串str_tmp
        l_tmp = str_tmp.split(" ")  # 将输入由字符串转为列表l_tmp
        data_list[i][title[0]] = l_tmp[0]  # 将名字作为键Name对应值
        j = 1
        while j < 2:  # 将成绩分别对应键放入
            data_list[i][title[j]] = int(l_tmp[j])
            j += 1
    return data_list  # 返回储存信息的（字典）列表


# 定义总成绩排序函数
def sort_sum(data_list):
    sort_list = list()  # 初始化排序输出列表
    data_sum = list()
    for i in range(n):
        ind_sum = 0  # 初始化每个人成绩总和
        title = ["Math", "English"]
        for j in range(2):
            ind_sum += data_list[i][title[j]]
        data_sum.append(ind_sum)  # 得到总成绩列表
    data_sum = pd.DataFrame(data_sum)
    data_sum.drop_duplicates(subset=None, keep='first', inplace=True)  # 去除重复的总成绩，以免在字典中重复检索
    data_sum = list(data_sum[0])
    data_sum.sort()  # 将总成绩升序排列
    for i in range(len(data_sum)):
        for j in range(8):
            if data_sum[i] == data_list[j]["Math"] + data_list[j]["English"]:
                sort_list.append(data_list[j]["Name"])
    print("总成绩排名（升序）为：", sort_list)






# 主函数调用

l = input_data()
print("----------第**次考试学生成绩情况明细----------")
print("学生名单：")
for i in range(n):
    print("(", i + 1, ")", l[i]["Name"], sep='', end=' ')
print("\n详细成绩如下：")
for i in range(n):
    print(l[i])
print("成绩排名如下：")
sort_sum(l)
