import random
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

num_people = 100
num_rounds = 17000
# 初始化100个人的初始财富
wealth = [100 for _ in range(num_people)]

fig, ax = plt.subplots(figsize=(6, 4))

# 创建动态柱状图
ax.set_xlabel('人的编号')
ax.set_ylabel('财富总数')
ax.set_ylim(0, 200)  # 设定y轴范围
bars = ax.bar(range(num_people), wealth)


# 更新柱状图数据的函数
def update(frame):
    giver = random.randint(0, num_people - 1)
    receiver = random.randint(0, num_people - 1)
    while giver == receiver:
        receiver = random.randint(0, num_people - 1)
    wealth[giver] -= 1
    wealth[receiver] += 1

    for bar, h in zip(bars, wealth):
        bar.set_height(h)

    return bars

# 使用FuncAnimation创建动画
ani = FuncAnimation(fig, update, frames=num_rounds, interval=1, blit=True)

plt.tight_layout()
plt.show()

