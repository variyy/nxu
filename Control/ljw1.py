from heapq import heappop, heappush

# 定义目标状态
goal_state = [[1, 2, 3], [8, 0, 4], [7, 6, 5]]

# 定义移动方向：上、下、左、右
directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

# 计算曼哈顿距离
def manhattan_distance(state):
    distance = 0
    for i in range(3):
        for j in range(3):
            if state[i][j] != 0:
                row, col = divmod(state[i][j] - 1, 3)
                distance += abs(i - row) + abs(j - col)
    return distance

# 判断状态是否合法
def is_valid_move(x, y):
    return 0 <= x < 3 and 0 <= y < 3

# 获取空格位置
def find_empty_tile(state):
    for i in range(3):
        for j in range(3):
            if state[i][j] == 0:
                return i, j

# 定义A*算法求解八数码问题的函数
def solve_puzzle(initial_state):
    open_list = []
    heappush(open_list, (manhattan_distance(initial_state), initial_state, []))
    closed_set = set()

    while open_list:
        _, current_state, path = heappop(open_list)
        if current_state == goal_state:
            return path

        closed_set.add(tuple(map(tuple, current_state)))
        x, y = find_empty_tile(current_state)

        for dx, dy in directions:
            new_x, new_y = x + dx, y + dy
            if is_valid_move(new_x, new_y):
                new_state = [row[:] for row in current_state]
                new_state[x][y], new_state[new_x][new_y] = new_state[new_x][new_y], new_state[x][y]
                if tuple(map(tuple, new_state)) not in closed_set:
                    heappush(open_list, (len(path) + manhattan_distance(new_state), new_state, path + [(new_x, new_y)]))
                    closed_set.add(tuple(map(tuple, new_state)))

# 测试八数码问题求解函数
initial_state = [[2, 1, 6], [4, 0, 8], [7, 5, 3]]

solution = solve_puzzle(initial_state)
if solution:
    print("状态转移过程")
    for step in solution:
        print(step)
else:
    print("无解")
