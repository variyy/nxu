from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.ensemble import GradientBoostingClassifier
from xgboost import XGBClassifier
from sklearn.metrics import accuracy_score, recall_score, precision_score, f1_score, roc_auc_score

# 加载乳腺癌数据集
data = load_breast_cancer()
X = data.data
y = data.target

# 划分训练集和测试集
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 训练GBDT模型
gbdt = GradientBoostingClassifier(random_state=42)
gbdt.fit(X_train, y_train)

# 计算GBDT模型在测试集上的预测结果
gbdt_pred = gbdt.predict(X_test)

# 计算GBDT模型的性能指标
gbdt_accuracy = accuracy_score(y_test, gbdt_pred)
gbdt_recall = recall_score(y_test, gbdt_pred)
gbdt_specificity = recall_score(y_test, gbdt_pred, pos_label=0)
gbdt_precision = precision_score(y_test, gbdt_pred)
gbdt_f1 = f1_score(y_test, gbdt_pred)
gbdt_auc = roc_auc_score(y_test, gbdt_pred)

# 训练XGBoost模型
xgboost = XGBClassifier(random_state=42)
xgboost.fit(X_train, y_train)

# 计算XGBoost模型在测试集上的预测结果
xgboost_pred = xgboost.predict(X_test)

# 计算XGBoost模型的性能指标
xgboost_accuracy = accuracy_score(y_test, xgboost_pred)
xgboost_recall = recall_score(y_test, xgboost_pred)
xgboost_specificity = recall_score(y_test, xgboost_pred, pos_label=0)
xgboost_precision = precision_score(y_test, xgboost_pred)
xgboost_f1 = f1_score(y_test, xgboost_pred)
xgboost_auc = roc_auc_score(y_test, xgboost_pred)

# 打印结果
print("GBDT模型性能指标:")
print("Accuracy:", gbdt_accuracy)
print("Recall:", gbdt_recall)
print("Specificity:", gbdt_specificity)
print("Precision:", gbdt_precision)
print("F1 Score:", gbdt_f1)
print("AUC:", gbdt_auc)

print("\nXGBoost模型性能指标:")
print("Accuracy:", xgboost_accuracy)
print("Recall:", xgboost_recall)
print("Specificity:", xgboost_specificity)
print("Precision:", xgboost_precision)
print("F1 Score:", xgboost_f1)
print("AUC:", xgboost_auc)