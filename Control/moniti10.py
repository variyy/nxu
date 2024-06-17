def swap(str, i, j):
    """交换数组下标为i和j对应的字符"""
    tmp = str[i]
    str[i] = str[j]
    str[j] = tmp


# 对字符串中的字符进行全排列
def Permutation(str, start):
    if str == None or start < 0:
        return

    # 完成全排队后输出当前排列的字符串
    if start == len(str) - 1:
        print("".join(str),end=" ")
    else:
        i = start
        while i < len(str):
            # 交换start与i所在位置的字符
            swap(str, start, i)
            # 固定第一个字符，对其余字符进行全排列
            Permutation(str, start + 1)
            # 还原start与i所在的位置的字符
            swap(str, start, i)
            i += 1


def Permutation_transe(s):
    str = list(s)
    Permutation(str, 0)


if __name__ == "__main__":
    s =input()
    Permutation_transe(s)