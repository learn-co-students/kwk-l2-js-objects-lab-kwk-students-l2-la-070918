// Write your solution in this file!
 driver = {name: "Sam", address: "11 Broadway"}
function updateDriverWithKeyAndValue (driver, key, value){
  // driver.age="15"
  return Object.assign(
    {},driver, {[key]: value}
    )
}

function destructivelyUpdateDriverWithKeyAndValue (driver, key, value){
   driver[key]=value
   return driver
  
}

function deleteFromDriverByKey (driver, key) {
  let newdriver = Object.assign ({}, driver);
  delete newdriver[key]
  return newdriver
}

function destructivelyDeleteFromDriverByKey (driver, key){
  let newdriver = driver
  delete newdriver [key]
  return newdriver
}

// var clone = Object.({}, obj);


    