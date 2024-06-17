import numpy as np
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import AdaBoostClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score, recall_score, precision_score, f1_score, roc_auc_score

# 加载鸢尾花数据集
iris = load_iris()
X = iris.data
y = iris.target

# 拆分数据集为训练集和测试集
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=52)

# 定义AdaBoost模型
n_estimators = 200  # 弱分类器数量
learning_rate = 0.025  # 学习率
base_estimator = DecisionTreeClassifier(max_depth=1)  # 弱分类器类型
random_state = 52  # 随机种子
ada_boost = AdaBoostClassifier(estimator=base_estimator,
                               n_estimators=n_estimators,
                               learning_rate=learning_rate,
                               random_state=random_state)
# 训练AdaBoost模型
ada_boost.fit(X_train, y_train)

# 在测试集上进行预测
y_pred = ada_boost.predict(X_test)

# 计算准确率
accuracy = accuracy_score(y_test, y_pred)

# 计算召回率
recall = recall_score(y_test, y_pred, average='weighted')

# 计算精确率
precision = precision_score(y_test, y_pred, average='weighted')

# 计算F1分数
f1 = f1_score(y_test, y_pred, average='weighted')

# 获取类别概率值
y_prob = ada_boost.predict_proba(X_test)

# 计算AUC值
auc_score = roc_auc_score(y_test, y_prob, multi_class='ovr')

# 打印精度指标
print("Accuracy:", accuracy)
print("Recall:", recall)
print("Precision:", precision)
print("F1 Score:", f1)
print("AUC:", auc_score)