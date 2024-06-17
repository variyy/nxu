import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 每个人的编号
x = [i for i in range(1, 101)]
# 模拟社会财富分配,初始财富分配，每人100元
people = pd.DataFrame([100 for i in range(100)], index=x)

# 分配算法
def distribute(data, roundi):
    # 存储破产总人数
    poor = 0
    # 初始金钱和损失
    round = pd.DataFrame({'pre_round': data[roundi - 1], 'lost': 1})
    # 金钱为0时不再扣钱
    for i in range(1, 101):
        if round['pre_round'].loc[i] <= 0:
            round['lost'].loc[i] = 0
            poor = poor + 1
    # 挑选需要收钱的人
    choice = pd.Series(np.random.choice(x, 100 - poor))
    # 统计收钱的人各自出现的次数（即会收到多少钱）
    gain = pd.DataFrame({'gain': choice.value_counts()})
    # 更新round
    round = round.join(gain)
    # 将缺省值补为0
    round.fillna(0, inplace=True)
    # 返回本轮结束后每个人的金钱状况
    print(round)
    return round['pre_round'] - round['lost'] + round['gain']


fig, ax = plt.subplots()
for i in range(17000):
    # 从18岁开始一直到65岁退休，每天进行一次资金流动
    people[i + 1] = distribute(people, i + 1)
    ax.cla()  # 清除键
    plt.title('Round%d' % (i + 1))
    plt.xlabel('Player ID')
    plt.ylabel('Fortune')
    datai = pd.DataFrame({'money': people.T.iloc[i], 'color': 'green'})
    datai = datai.sort_values(by='money')
