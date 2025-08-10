<<<<<<< HEAD
# xingliceshi
=======
# 心理评测网站

## 授权码管理

本项目使用授权码验证机制来保护测试内容。授权码配置文件位于 `src/utils/authCodes.js`。

### 如何添加或修改授权码

1. 打开 `src/utils/authCodes.js` 文件
2. 在 `validAuthCodes` 数组中添加或修改授权码
3. 保存文件后，新的授权码将立即生效

### 默认授权码

- psycho2023
- test2023
- admin2023
- user2023

### 授权码验证逻辑

用户在访问测试页面之前需要输入有效的授权码。验证通过后，用户可以访问测试内容。

### 安全说明

在生产环境中，建议使用更安全的授权机制，如JWT令牌或OAuth2.0。
>>>>>>> f37dd7c (Initial commit)
