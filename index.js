// Write your solution in this file!
var driver = {
}
function updateDriverWithKeyAndValue(driver, key, value){
  var newDriver = {
    [key]: value
  }
  var finalDriver = Object.assign({}, driver, newDriver);
  return finalDriver;
}
function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
  driver[key] = value; // use [] notation, not "."
  return driver;
}
function deleteFromDriverByKey(driver,key){
  var newDriver ={
  key: driver.key
  }
  delete newDriver.key;
  return newDriver;
}
function destructivelyDeleteFromDriverByKey(driver,key){
  delete driver[key];
  return driver;
}
