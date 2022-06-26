let gabriel = {
    idade : 18,
    musica : 'Hungry Heart',
    signo : 'sagi'
}

gabriel.tvShow = 'Umbrella Academy'

delete gabriel.signo

console.log(gabriel)

let cadastro = [{
    nome : 'Viktor',
    idade : 29,
    telefone : 7,
    amigos : '5'
},{
    nome : '5',
    idade : 58,
    telefone : 5,
    amigos: ['Viktor', 'Klaus']
},{
    nome : 'Klaus',
    idade : 34,
    telefone : 4,
    amigos : ['Reggie', 'Viktor', 'Diego', '5']
},{
    nome : 'Diego',
    idade : 29,
    telefone : 2,
    amigos : ['Lila', 'Klaus', 'Stan', 'Luther']
},{
    nome : 'Allison',
    idade: 31,
    telefone : 3,
    amigos : 'Allison'
}]

console.log(cadastro[0].amigos)
console.log(cadastro[1].amigos[1])
console.log(cadastro[2].amigos[2])
console.log(cadastro[3].amigos[3])
console.log(cadastro[4].amigos)