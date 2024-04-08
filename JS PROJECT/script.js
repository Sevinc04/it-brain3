let shopGoods = [
    {
      "store_name": "Moda Dünyası",
      "store_address": "Bakı şəhəri, Nizami kuçəsi 5",
      "products": [
        {"product_name": "Kişi köynəyi", "product_description": "Mavi rəngdə, 100% pamuk", "product_price": 50},
        {"product_name": "Qadın bluzası", "product_description": "Dəri detallı, qara rəngdə", "product_price": 60},
        {"product_name": "Kişi pantolonu", "product_description": "Qəhvəyi rəng, kənar cebi", "product_price": 75},
        {"product_name": "Qadın eteyi", "product_description": "Qırmızı rəng, mini", "product_price": 40},
        {"product_name": "Kişi dəsmalı", "product_description": "Nəqşdar dizayn", "product_price": 20},
        {"product_name": "Qadın çantası", "product_description": "Əlgötürən, dəri", "product_price": 90},
        {"product_name": "Kişi botları", "product_description": "Qış üçün, suya davamlı", "product_price": 120},
        {"product_name": "Qadın ayaqqabıları", "product_description": "Yüksək tapan, lacivərt", "product_price": 85},
        {"product_name": "Kişi papağı", "product_description": "Qara rəngdə, dəri", "product_price": 45},
        {"product_name": "Qadın şalvarı", "product_description": "Göy rəngdə, kaşmir", "product_price": 70}
      ]
    },
    {
      "store_name": "Zərif Moda",
      "store_address": "Bakı şəhəri, 28 May kuçəsi 12",
      "products": [
        {"product_name": "Kişi palto", "product_description": "Süət dəri, qara rəngdə", "product_price": 250},
        {"product_name": "Qadın jaketi", "product_description": "Uzun, qaşqır", "product_price": 200},
        {"product_name": "Kişi kəməri", "product_description": "Dəri, metal tokalı", "product_price": 40},
        {"product_name": "Qadın badlonu", "product_description": "Retro stil, qızıl rəngdə", "product_price": 180},
        {"product_name": "Kişi şortu", "product_description": "Spor stil, elastik", "product_price": 60},
        {"product_name": "Qadın maykası", "product_description": "Boyalı nəqş, pamuklu", "product_price": 45},
        {"product_name": "Kişi saatı", "product_description": "Qara rəngdə, analog", "product_price": 150},
        {"product_name": "Qadın bəzək", "product_description": "Qızıl, komplekt", "product_price": 220},
        {"product_name": "Kişi atkısı", "product_description": "Xəzəl rəng, uzun", "product_price": 35},
        {"product_name": "Qadın bantı", "product_description": "Metal detallı, elastik", "product_price": 50}
      ]
    },
    {
      "store_name": "Əliyev Moda Mərkəzi",
      "store_address": "Bakı şəhəri, Azadlıq prospekti 89",
      "products": [
        {"product_name": "Kişi kostyumu", "product_description": "İki parçalı, qara rəngdə", "product_price": 320},
        {"product_name": "Qadın kombinezonu", "product_description": "Yaz üçün, açıq rəng", "product_price": 150},
        {"product_name": "Kişi sviteri", "product_description": "Düz rəng, yüngül", "product_price": 70},
        {"product_name": "Qadın ziyafət geyimi", "product_description": "Düzənşən, yaz üçün", "product_price": 95},
        {"product_name": "Kişi sport formaları", "product_description": "Spandex, idman üçün", "product_price": 55},
        {"product_name": "Qadın bikini", "product_description": "Tropik nəqş, elastik", "product_price": 45},
        {"product_name": "Kişi çantası", "product_description": "Dizayner, əsas bölməsi", "product_price": 100},
        {"product_name": "Qadın ətri", "product_description": "Gül ətri, uzunömürlü", "product_price": 80},
        {"product_name": "Kişi şalı", "product_description": "Səliqəli, çoxrəngli", "product_price": 25},
        {"product_name": "Qadın sutyeni", "product_description": "Destəklənmiş, rahat", "product_price": 65}
      ]
    }
  ];
  
  let shoppingCart = [];
  
  function showAllProducts() {
    for (let shop of shopGoods) {
      console.log(`Mağaza: ${shop.store_name}`);
      console.log("--------------------------------------------");
      for (let product of shop.products) {
        console.log(`  Mallar: ${product.product_name}, Təsvir: ${product.product_description}, Qiymət: ${product.product_price}`);
      }
      console.log("--------------------------------------------");
    }
  }
  
  function findProduct(productName) {
    let found = false;
    for (let shop of shopGoods) {
      for (let product of shop.products) {
        if (product.product_name.toLowerCase() === productName.toLowerCase()) {
          console.log(`Mallar: ${product.product_name}, Təsvir: ${product.product_description}, Qiymət: ${product.product_price}, Mağaza: ${shop.store_name}`);
          found = true;
        }
      }
    }
    if (!found) {
      console.log("Bu məhsul tapılmadı.");
    }
  }
  
  function removeProduct(productName) {
    for (let shop of shopGoods) {
      for (let i = 0; i < shop.products.length; i++) {
        if (shop.products[i].product_name.toLowerCase() === productName.toLowerCase()) {
          shop.products.splice(i, 1);
          console.log(`${productName} məhsulu mağazadan silindi.`);
          return;
        }
      }
    }
    console.log("Bu məhsul tapılmadı.");
  }
  
  function changeProductPrice(productName, newPrice) {
    for (let shop of shopGoods) {
      for (let product of shop.products) {
        if (product.product_name.toLowerCase() === productName.toLowerCase()) {
          product.product_price = newPrice;
          console.log(`${productName} məhsulunun qiyməti dəyişdirildi.`);
          return;
        }
      }
    }
    console.log("Bu məhsul tapılmadı.");
  }
  
  function addProduct(storeIndex, productName, productDescription, productPrice) {
    shopGoods[storeIndex].products.push({
      "product_name": productName,
      "product_description": productDescription,
      "product_price": productPrice
    });
    console.log(`${productName} məhsulu mağazaya əlavə edildi.`);
  }
  
  function sortProductsByPrice(order) {
    for (let shop of shopGoods) {
      console.log(`Mağaza: ${shop.store_name}`);
      console.log("--------------------------------------------");
      shop.products.sort((a, b) => {
        if (order === "artan") {
          return a.product_price - b.product_price;
        } else {
          return b.product_price - a.product_price;
        }
      });
      for (let product of shop.products) {
        console.log(`  Mallar: ${product.product_name}, Təsvir: ${product.product_description}, Qiymət: ${product.product_price}`);
      }
      console.log("--------------------------------------------");
    }
  }
  
  function sortProductsByName() {
    for (let shop of shopGoods) {
      console.log(`Mağaza: ${shop.store_name}`);
      console.log("--------------------------------------------");
      shop.products.sort((a, b) => a.product_name.localeCompare(b.product_name));
      for (let product of shop.products) {
        console.log(`  Mallar: ${product.product_name}, Təsvir: ${product.product_description}, Qiymət: ${product.product_price}`);
      }
      console.log("--------------------------------------------");
    }
  }
  
  function addProductToCart(productName, cart) {
    for (let shop of shopGoods) {
      for (let product of shop.products) {
        if (product.product_name.toLowerCase() === productName.toLowerCase()) {
          cart.push(product);
          console.log(`${productName} məhsulu səbətə əlavə edildi.`);
          return;
        }
      }
    }
    console.log("Bu məhsul tapılmadı.");
  }
  
  function showCart(cart) {
    let total = 0;
    console.log("Səbət:");
    for (let item of cart) {
      console.log(`  Mallar: ${item.product_name}, Təsvir: ${item.product_description}, Qiymət: ${item.product_price}`);
      total += item.product_price;
    }
    console.log(`Toplam qiymət: ${total}`);
  }
  
  function adminLogin() {
    let username = prompt("Zəhmət olmasa admin istifadəçi adını daxil edin:");
    let password = prompt("Zəhmət olmasa admin şifrəsini daxil edin:");
    if (username === "admin" && password === "admin123") {
      return true;
    } else {
      console.log("Admin girişi uğursuz oldu.");
      return false;
    }
  }
  
  function customerLogin() {
    let username = prompt("Zəhmət olmasa alıcı istifadəçi adını daxil edin:");
    let password = prompt("Zəhmət olmasa alıcı şifrəsini daxil edin:");
    if (username === "alıcı" && password === "alıcı123") {
      return true;
    } else {
      console.log("Alıcı girişi uğursuz oldu.");
      return false;
    }
  }
  
  while (true) {
    let operation = prompt("Zəhmət olmasa etmək istədiyiniz əməliyyatı seçin:\n1. Bütün malları göstər\n2. Məhsul axtar\n3. Məhsulu sil\n4. Məhsulun qiymətini dəyiş\n5. Məhsul əlavə et\n6. Malları qiyməti ilə sırala\n7. Malları adı ilə sırala\n8. Səbətə məhsul əlavə et\n9. Səbəti göstər\nEND daxil olunca proqramı bitirin");
  
    if (operation.toLowerCase() === "end") {
      break;
    }
  
    switch (operation) {
      case "1":
        showAllProducts();
        break;
      case "2":
        let productName = prompt("Axtardığınız məhsulun adını daxil edin:");
        findProduct(productName);
        break;
      case "3":
        if (adminLogin()) {
          let productToRemove = prompt("Silmək istədiyiniz məhsulun adını daxil edin:");
          removeProduct(productToRemove);
        }
        break;
      case "4":
        if (adminLogin()) {
          let productToChange = prompt("Qiymətini dəyişmək istədiyiniz məhsulun adını daxil edin:");
          let newPrice = parseFloat(prompt("Yeni qiyməti daxil edin:"));
          changeProductPrice(productToChange, newPrice);
        }
        break;
      case "5":
        if (adminLogin()) {
          let storeIndex = parseInt(prompt("Məhsulu əlavə etmək istədiyiniz mağazanın indeksini daxil edin (0, 1, 2):"));
          let productNameToAdd = prompt("Məhsulun adını daxil edin:");
          let productDescriptionToAdd = prompt("Məhsulun təsvirini daxil edin:");
          let productPriceToAdd = parseFloat(prompt("Məhsulun qiymətini daxil edin:"));
          addProduct(storeIndex, productNameToAdd, productDescriptionToAdd, productPriceToAdd);
        }
        break;
      case "6":
        let priceOrder = prompt("Qiyməti artan və ya azalan sıralama üçün 'artan' və ya 'azalan' daxil edin:");
        sortProductsByPrice(priceOrder);
        break;
      case "7":
        sortProductsByName();
        break;
      case "8":
        if (customerLogin()) {
          let productToAddToCart = prompt("Səbətə əlavə etmək istədiyiniz məhsulun adını daxil edin:");
          addProductToCart(productToAddToCart, shoppingCart);
        }
        break;
      case "9":
        if (customerLogin()) {
          showCart(shoppingCart);
        }
        break;
      default:
        console.log("Düzgün əməliyyat seçilməyib.");
    }
  }
  