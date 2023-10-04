const tasks = [
    {
        "id" : 1,
        "nombre" :  "Milanesa de Soja con Sal",
        "precio" : 600,
        "descripcion" : "Milanesas a base de soja con sal, no poseen conservantes, adictivos ni quimicos industriales.",
        "unidades" : 4,
        "categoria" : "Milanesa",
        "stock": 5,
        "img" : "https://d22fxaf9t8d39k.cloudfront.net/487d3a956afcec8960d335a67a27592b039f9ac9e759f29a7d1a488a1c1ebff4142920.jpeg"
    },

    {
        "id" : 2,
        "nombre" :  "Milanesa de Soja sin Sal",
        "precio" : 600,
        "descripcion" : "Milanesas a base de soja sin sal, no poseen conservantes, adictivos ni quimicos industriales.",
        "unidades" : 4,
        "categoria" : "Milanesa",
        "stock": 5,
        "img" : "https://vrill.com.ar/wp-content/uploads/2022/02/Milanesa-de-soja-prasat-240x300-sin-sal.jpeg"
    },

    {
        "id" : 3,
        "nombre" :  "Milanesa de Soja de Parmesano",
        "precio" : 750,
        "descripcion" : "Milanesas a base de soja con rebozado de parmesano, no poseen conservantes, adictivos ni quimicos industriales.",
        "unidades" : 4,
        "categoria" : "Milanesa",
        "stock": 5,
        "img" : "https://cayenatiendanatural.com.ar/wp-content/uploads/2023/06/prasat-queso-parmesano-scaled-1.jpg"
    },

    {
        "id" : 4,
        "nombre" :  "Milanesa de Soja Rellenas",
        "precio" : 900,
        "descripcion" : "Milanesas a base de soja, no poseen conservantes, adictivos ni quimicos industriales.",
        "unidades" : 4,
        "categoria" : "Milanesa",
        "stock": 5,
        "img" : "https://cdn.bwebly.com/media/2/2021/10/prasat-queso-600x600_l.jpg"
    },

    {
        "id" : 5,
        "nombre" :  "Chorizo Vegano",
        "precio" : 750,
        "descripcion" : "Hecho a base de harina de soja, no poseen conservantes, adictivos ni quimicos industriales.",
        "unidades" : 3,
        "categoria" : "Comida",
        "stock": 5,
        "img" : "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/144/382/products/whatsapp-image-2021-04-14-at-23-43-351-c76306acfa96feb58416184546953607-240-0.jpeg"
    },

    {
        "id" : 6,
        "nombre" :  "Seitan Vegano",
        "precio" : 750,
        "descripcion" : "Hecho a base de harina de trigo fortificada con gluten y harina de soja, no poseen conservantes, adictivos ni quimicos industriales.",
        "unidades" : 4,
        "categoria" : "Comida",
        "stock": 5,
        "img" : "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/126/866/products/prasat-seitan1-eeb063c94b442bcd9916331875769004-640-0.png"
    },

    {
        "id" : 7,
        "nombre" :  "Matambre Vegano",
        "precio" : 600,
        "descripcion" : "Hecho a base de harina de trigo fortificada con gluten y harina de soja, no poseen conservantes, adictivos ni quimicos industriales.",
        "unidades" : 4,
        "categoria" : "Comida",
        "stock": 5,
        "img" : "https://d22fxaf9t8d39k.cloudfront.net/3352a7b8df0c5dc3ce9e09f97c43c9ece9de033413d57f5ddd3c418526e3d04c142920.jpeg"
    },

    {
        "id" : 8,
        "nombre" :  "Matambre Vegetariano",
        "precio" : 600,
        "descripcion" : "Hecho a base de harina de trigo fortificada con gluten y harina de soja, no poseen conservantes, adictivos ni quimicos industriales. Contiene huevo",
        "unidades" : 4,
        "categoria" : "Comida",
        "stock": 5,
        "img" : "https://acdn.mitiendanube.com/stores/001/187/090/products/601245df-1238-450b-9882-2ba81d7f0a78_nube-86cc9c2e5ea287b53715950288154580-240-0.jpg"
    }
]

export const getTasks = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(tasks)
        }, 2000)
    }) 
}