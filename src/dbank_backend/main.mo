import Debug "mo:base/Debug";

actor DBank {
  var currentValue = 300;
  currentValue := 100;

  let id = 21424241421414;
  
  // Debug.print(debug_show(id))

  public func topUp(amount: Nat) {
    currentValue += amount;
    Debug.print(debug_show(currentValue))
  };

  public func withdraw(amount: Nat) {
    let tempValue: Int = currentValue - amount;
    if(tempValue >= 0){
      currentValue -= amount;
      Debug.print(debug_show(currentValue))
    } else {
      Debug.print("Amount to large, currentValue less than 0")
    }
    
    
  };

  // topUp();

}
