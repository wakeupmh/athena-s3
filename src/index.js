const { athenaExpress } = require('./infrastructure')

const main = () => {
  let myQuery = {
    sql: `
      SELECT * FROM eligibility 
      WHERE data_criacao = '2020-12-18T00:00:00.000Z' 
    `,
    db: "default"
  };

  return athenaExpress.query(myQuery)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

main()
