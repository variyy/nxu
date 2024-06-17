
arr=[]
arr=(list(map(int,input().split())))
number1 = arr[0]     #依次输入三个数
number2 = arr[1]
number3 = arr[2]    #依次输入三个数
max_number = max(number1,number2,number3)    #先找出最大的那个数
i=0                                         #计数每次加一
none = True                                 #none作为循环条件的变量，用于控制循环何时结束
#循环开始
while none:
    i+=1                           #初始倍数为1
    number = i*max_number          #找出较大数的倍数
    if number%int(number1) == 0 and number%int(number2) == 0 and number%int(number3) == 0:    #判断验证能否被其余数整除
        print(number)  #输出结果
        none = False                #将循环条件的变量变为否，跳出while循环










