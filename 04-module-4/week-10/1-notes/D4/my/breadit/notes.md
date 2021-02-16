create user breaddit_dev with password 'password' createdb;


alias psql='psql -h localhost'
alias sc='npx sequelize-cli'
alias sc-init='npx sequelize-cli init'
alias sc-makedb='npx sequelize-cli db:create'
alias sc-makemodel='npx sequelize-cli model:generate'
alias sc-migrate='npx sequelize-cli db:migrate'
alias sc-genseed='npx sequelize-cli seed:generate'
alias sc-seed='npm sequelize-cli db:seed:all'


#### whenever we name a model with npx sequelize model:gneerate --name User ... the name we give must be capital singular!!!!!!

npx sequelize model:generate —-name User --attributes username:string,email:string,firstName:string,1astName:string



![](image/notes/1607621837076.png)
