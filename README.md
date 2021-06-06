## POC de Demonstração do Uso ApexCharts/Angular

-Para a realização da Demo foi utilizada uma API externa desenvolvida e publicada por mim no heroku(https://dsvendas-rafael.herokuapp.com/sales/sucess-by-seller);

-A API em questão retorna uma lista com 3 parametros(sellerName,visited,details), mas para a demonstração iremos somente utilizar os 2 primeiros parametros

-Para esta demo utilizei o grafico de barras(porém caso queira você pode customizar seus graficos utilizando outros formatos)

## Uso da Lib ApexCharts

Pré Requisitos:
```bash
#Instalar o ApexCharts no Projeto

npm install apexcharts --save

#Adicionar o seguinte parametro no arquivo angular.json

 "scripts": [
              "node_modules/apexcharts/dist/apexcharts.min.js"
            ]
            
 #Importar no app.modules.ts
 
 NgApexchartsModule
 ```

## Referencias

-Foi utilizado para a construção da demo além da documentação da lib(https://apexcharts.com), 

também foi utilizado este site(https://codesandbox.io/examples/package/ng-apexcharts)
















