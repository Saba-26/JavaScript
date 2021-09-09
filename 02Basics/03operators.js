var sellingPrice=199;
var listingPrice=799;

var discountPrice=((listingPrice-sellingPrice)/listingPrice)*100;

console.log("Discount Percentage = "+discountPrice);

displayDiscountPercentage=Math.round(discountPrice);

console.log(displayDiscountPercentage+"% off");
