const products = [
    {
        nombre: "Café Caramel con Chocolate",
        precio: 59.9,
        imagen: "cafe_01",
        categoria_id: 1,
        id: 1
      },
      {
        nombre: "Café Frio con Chocolate Grande",
        precio: 49.9,
        imagen: "cafe_02",
        categoria_id: 1,
        id: 2
      },
      {
        nombre: "Latte Frio con Chocolate Grande",
        precio: 54.9,
        imagen: "cafe_03",
        categoria_id: 1,
        id: 3
      },
      {
        name: "Latte Frio con Chocolate Grande",
        precio: 54.9,
        imagen: "cafe_04",
        categoria_id: 1,
        id: 4
      },
      {
        name: "Malteada Fria con Chocolate Grande",
        precio: 54.9,
        imagen: "cafe_05",
        categoria_id: 1,
        id: 5
      },
      {
        name: "Café Mocha Caliente Chico",
        precio: 39.9,
        imagen: "cafe_06",
        categoria_id: 1,
        id: 6
      },
      {
        name: "Café Mocha Caliente Grande con Chocolate",
        precio: 59.9,
        imagen: "cafe_07",
        categoria_id: 1,
        id: 7
      },
      {
        name: "Café Caliente Capuchino Grande",
        precio: 59.9,
        imagen: "cafe_08",
        categoria_id: 1,
        id: 8
      },
      {
        name: "Café Mocha Caliente Mediano",
        precio: 49.9,
        imagen: "cafe_09",
        categoria_id: 1,
        id: 9
      },
      {
        name: "Café Mocha Frio con Caramelo Mediano",
        precio: 49.9,
        imagen: "cafe_10",
        categoria_id: 1,
        id: 10
      },
      {
        name: "Café Mocha Frio con Chocolate Mediano",
        precio: 49.9,
        imagen: "cafe_11",
        categoria_id: 1,
        id: 11
      },
      {
        name: "Café Espresso",
        precio: 29.9,
        imagen: "cafe_12",
        categoria_id: 1,
        id: 12
      },
      {
        name: "Café Capuchino Grande con Caramelo",
        precio: 59.9,
        imagen: "cafe_13",
        categoria_id: 1,
        id: 13
      },
      {
        name: "Café Caramelo Grande",
        precio: 59.9,
        imagen: "cafe_14",
        categoria_id: 1,
        id: 14
      },
      {
        name: "Paquete de 3 donas de Chocolate",
        precio: 39.9,
        imagen: "donas_01",
        categoria_id: 4,
        id: 15
      },
      {
        name: "Paquete de 3 donas Glaseadas",
        precio: 39.9,
        imagen: "donas_02",
        categoria_id: 4,
        id: 16
      },
      {
        name: "Dona de Fresa ",
        precio: 19.9,
        imagen: "donas_03",
        categoria_id: 4,
        id: 17
      },
      {
        name: "Dona con Galleta de Chocolate ",
        precio: 19.9,
        imagen: "donas_04",
        categoria_id: 4,
        id: 18
      },
      {
        name: "Dona glass con Chispas Sabor Fresa ",
        precio: 19.9,
        imagen: "donas_05",
        categoria_id: 4,
        id: 19
      },
      {
        name: "Dona glass con Chocolate ",
        precio: 19.9,
        imagen: "donas_06",
        categoria_id: 4,
        id: 20
      },
      {
        name: "Dona de Chocolate con MÁS Chocolate ",
        precio: 19.9,
        imagen: "donas_07",
        categoria_id: 4,
        id: 21
      },
      {
        name: "Paquete de 3 donas de Chocolate ",
        precio: 39.9,
        imagen: "donas_08",
        categoria_id: 4,
        id: 22
      },
      {
        name: "Paquete de 3 donas con Vainilla y Chocolate ",
        precio: 39.9,
        imagen: "donas_09",
        categoria_id: 4,
        id: 23
      },
      {
        name: "Paquete de 6 Donas",
        precio: 69.9,
        imagen: "donas_10",
        categoria_id: 4,
        id: 24
      },
      {
        name: "Paquete de 3 Variadas",
        precio: 39.9,
        imagen: "donas_11",
        categoria_id: 4,
        id: 25
      },
      {
        name: "Dona Natural con Chocolate",
        precio: 19.9,
        imagen: "donas_12",
        categoria_id: 4,
        id: 26
      },
      {
        name: "Paquete de 3 Donas de Chocolate con Chispas",
        precio: 39.9,
        imagen: "donas_13",
        categoria_id: 4,
        id: 27
      },
      {
        name: "Dona Chocolate y Coco",
        precio: 19.9,
        imagen: "donas_14",
        categoria_id: 4,
        id: 28
      },
      {
        name: "Paquete Galletas de Chocolate",
        precio: 29.9,
        imagen: "galletas_01",
        categoria_id: 6,
        id: 29
      },
      {
        name: "Paquete Galletas de Chocolate y Avena",
        precio: 39.9,
        imagen: "galletas_02",
        categoria_id: 6,
        id: 30
      },
      {
        name: "Paquete de Muffins de Vainilla",
        precio: 39.9,
        imagen: "galletas_03",
        categoria_id: 6,
        id: 31
      },
      {
        name: "Paquete de 4 Galletas de Avena",
        precio: 24.9,
        imagen: "galletas_04",
        categoria_id: 6,
        id: 32
      },
      {
        name: "Galletas de Mantequilla Variadas",
        precio: 39.9,
        imagen: "galletas_05",
        categoria_id: 6,
        id: 33
      },
      {
        name: "Galletas de sabores frutales",
        precio: 39.9,
        imagen: "galletas_06",
        categoria_id: 6,
        id: 34
      },
      {
        name: "Hamburguesa Sencilla",
        precio: 59.9,
        imagen: "hamburguesas_01",
        categoria_id: 2,
        id: 35
      },
      {
        name: "Hamburguesa de Pollo",
        precio: 59.9,
        imagen: "hamburguesas_02",
        categoria_id: 2,
        id: 36
      },
      {
        name: "Hamburguesa de Pollo y Chili",
        precio: 59.9,
        imagen: "hamburguesas_03",
        categoria_id: 2,
        id: 37
      },
      {
        name: "Hamburguesa Queso y  Pepinos",
        precio: 59.9,
        imagen: "hamburguesas_04",
        categoria_id: 2,
        id: 38
      },
      {
        name: "Hamburguesa Cuarto de Libra",
        precio: 59.9,
        imagen: "hamburguesas_05",
        categoria_id: 2,
        id: 39
      },
      {
        name: "Hamburguesa Doble Queso",
        precio: 69.9,
        imagen: "hamburguesas_06",
        categoria_id: 2,
        id: 40
      },
      {
        name: "Hot Dog Especial",
        precio: 49.9,
        imagen: "hamburguesas_07",
        categoria_id: 2,
        id: 41
      },
      {
        name: "Paquete 2 Hot Dogs",
        precio: 69.9,
        imagen: "hamburguesas_08",
        categoria_id: 2,
        id: 42
      },
      {
        name: "4 Rebanadas de Pay de Queso",
        precio: 69.9,
        imagen: "pastel_01",
        categoria_id: 5,
        id: 43
      },
      {
        name: "Waffle Especial",
        precio: 49.9,
        imagen: "pastel_02",
        categoria_id: 5,
        id: 44
      },
      {
        name: "Croissants De la casa",
        precio: 39.9,
        imagen: "pastel_03",
        categoria_id: 5,
        id: 45
      },
      {
        name: "Pay de Queso",
        precio: 19.9,
        imagen: "pastel_04",
        categoria_id: 5,
        id: 46
      },
      {
        name: "Pastel de Chocolate",
        precio: 29.9,
        imagen: "pastel_05",
        categoria_id: 5,
        id: 47
      },
      {
        name: "Rebanada Pastel de Chocolate",
        precio: 29.9,
        imagen: "pastel_06",
        categoria_id: 5,
        id: 48
      },
      {
        name: "Pizza Spicy con Doble Queso",
        precio: 69.9,
        imagen: "pizzas_01",
        categoria_id: 3,
        id: 49
      },
      {
        name: "Pizza Jamón y Queso",
        precio: 69.9,
        imagen: "pizzas_02",
        categoria_id: 3,
        id: 50
      },
      {
        name: "Pizza Doble Queso",
        precio: 69.9,
        imagen: "pizzas_03",
        categoria_id: 3,
        id: 51
      },
      {
        name: "Pizza Especial de la Casa",
        precio: 69.9,
        imagen: "pizzas_04",
        categoria_id: 3,
        id: 52
      },
      {
        name: "Pizza Chorizo",
        precio: 69.9,
        imagen: "pizzas_05",
        categoria_id: 3,
        id: 53
      },
      {
        name: "Pizza Hawaiana",
        precio: 69.9,
        imagen: "pizzas_06",
        categoria_id: 3,
        id: 54
      },
      {
        name: "Pizza Tocino",
        precio: 69.9,
        imagen: "pizzas_07",
        categoria_id: 3,
        id: 55
      },
      {
        name: "Pizza Vegetales y Queso",
        precio: 69.9,
        imagen: "pizzas_08",
        categoria_id: 3,
        id: 56
      },
      {
        name: "Pizza Pepperoni y Queso",
        precio: 69.9,
        imagen: "pizzas_09",
        categoria_id: 3,
        id: 57
      },
      {
        name: "Pizza Aceitunas y Queso",
        precio: 69.9,
        imagen: "pizzas_10",
        categoria_id: 3,
        id: 58
      },
      {
        name: "Pizza Queso, Jamón y Champiñones",
        precio: 69.9,
        imagen: "pizzas_11",
        categoria_id: 3,
        id: 59
      }
]

export {
    productos 
}