// 10.12.2022 18:00
// Masalalar:
// 1. funksiyda kiritilgan arrayni ichidagi musbat raqam soni va manfiy elementlar yig’indisini array ko’rinishida chiqaring.

// 2. Palindrome songa tekshiruvchi funksiya (121).

// 3. kabisa yiliga tekshiruvchi funksiya 
// Kabisa yil (arabcha: toʻliq) — oddiy yildan bir kun (fevral oyida) ortiq boʻlgan kalendar yil. Bunda 4 ga qoldiqsiz boʻlinadigan yil Kabisa yildir (faqat ikkita nol bilan tugab, 400 ga boʻlinmaydigan yil bundan mustasno. Masalan: 1800 , 1900, 2100-yillar Kabisa yil emas)

// 4.Funksiyaga ixtiyoriy sonlardan iborat array kiritiladi shu arraydagi manfiy sonlarni alohida qilib ularni array ko’rinishida qaytaring.
//=========================================================================================================


// 1 masala

// const son = [1,2,3,4,-9,7,-44];
// let number = [];
// let sum = 0;
// let dec = 0
// function sortNUmber(item){
// for(let i of item){
//   if(i < 0){
//     sum += i;
//   }else {
//     dec++;
//   }
// }
// }
// sortNUmber(son);
// number.push(dec, sum)
// console.log(number);

//======================================================================================================================

// 2 masala 

//  function number(item){
//   const newNumber = item.toString().split("").reverse().join(""); 
//   if(item == newNumber){
//     console.log(true);
//   }else {
//     console.log(false);
//   }
//  }
//  number(121)

//=======================================================================================================================

// 3 masala


// function number(item){
//   if(item % 4 == 0 && item % 100 == 0 && item % 400 == 0){
//     console.log("kabisa yili");
//   }else{
//     console.log("kabisa yili emas");
//   }
// }
// number(1200)

//===================================================================================================================

// 4 masala

// const son = [1,2,3,4,5,6,-9,-99,66]
// let sortNUmber = []
// function number(number){
//   for(let i of number){
//     if(i < 0){
//       sortNUmber.push(i)
//     }
//   }
// }
// number(son)
// console.log(sortNUmber);

