
it('should calculate the monthly rate correctly', function () {
  
  document.getElementById("loan-amount").value = 20000
  document.getElementById("loan-years").value = 10
  document.getElementById("loan-rate").value = 8


  expect(calculateMonthlyPayment()).toEqual('242.66')

});


it("should return a result with 2 decimal places", function() {
 
  document.getElementById("loan-amount").value = 20000
  document.getElementById("loan-years").value = 10
  document.getElementById("loan-rate").value = 8


  expect(calculateMonthlyPayment()).toEqual('242.66')
});

/// etc
