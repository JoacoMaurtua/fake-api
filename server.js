//METADATA
const faker = require('faker');

const user =()=>{
  return({
    carneIdentidad:faker.datatype.number(),
    nombre:faker.name.firstName(),
    apellido:faker.name.lastName(),
    numeroTelefono:faker.phone.phoneNumber(),
    email:faker.internet.email(),
    password:faker.internet.password()
  }) 
}

const User = user();

const direccion =()=>{
  return({
    calle:faker.address.streetAddress(),
    ciudad:faker.address.city(),
    estado:faker.address.state(),
    codigoPostal:faker.address.zipCode(),
    pais:faker.address.country()
  })
}

const Direccion = direccion();

const empresa = ()=>{
  return({
    carneIdentidad:faker.datatype.number(),
    nombre:faker.company.companyName(),
    habla_a: Direccion
  })

}

const Empresa = empresa();

/* const {firstName,lastName} = user;
console.table({firstName,lastName}); */
console.log(user())

console.log(empresa())

const express = require('express');

const app = express();

const port = 7000;

//CONFIGURACIONES - MIDDLEWARES

app.get('/api/users/new',(request,response)=>{
  response.json(User);
})

app.get('/api/empresa/new',(request,response)=>{
  response.json(Empresa)
})

app.get('/api/users/empresa/new',(request,response)=>{
  const userEmpresa = {User,Empresa} 
  response.json(userEmpresa);
})







//CORRER EL SERVER

app.listen(port,()=>{
  console.log(`Localhost ${port}`)
})