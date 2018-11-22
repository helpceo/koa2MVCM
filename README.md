## koa2+mysql

### 数据库的迁移

#### 1. 创建模型(迁移)
```
node_modules/.bin/sequelize model:generate --name User --attributes name:string,phone:string,email:string
```
#### 2. 运行迁移
```
node_modules/.bin/sequelize db:migrate

(附加)撤销迁移
  node_modules/.bin/sequelize db:migrate:undo
```

### 数据库生成模拟数据

#### 1.创建数据
```
node_modules/.bin/sequelize seed:generate --name demo-user
(需要编辑db/seeders文件夹中创建的这个文件)
```
#### 2. 数据填充
```
node_modules/.bin/sequelize db:seed:all
(附加)撤销填充
  node_modules/.bin/sequelize db:seed:undo
```