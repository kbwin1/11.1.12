
describe("test payment functions" ,function() {

    
    beforeEach(function () {
    billAmount.value = 100;
    tipAmount.value = 10;
    submitPaymentInfo();
    });
    it('should sum all payments and tips',function(){
       expect(document.getElementById('summaryTable').children[1].children[0].children[1].innerHTML).toEqual('$10');
       expect(document.getElementById('summaryTable').children[1].children[0].children[0].innerHTML).toEqual('$100');
        
       billAmount.value = 100;
        tipAmount.value = 10;

        submitPaymentInfo();

        expect(document.getElementById('summaryTable').children[1].children[0].children[1].innerHTML).toEqual('$20');
        expect(document.getElementById('summaryTable').children[1].children[0].children[0].innerHTML).toEqual('$200');
    })
  
 
    it("should calculate %",function(){
        expect(calculateTipPercent(100,10)).toEqual(10)
    })

    it("shlud create a new td",function(){
        expect(document.getElementById('summaryTable').children[0]).toBe(document.getElementById('summaryTable').children[0])

    })
    it ("shlod storage payments",function(){
        
        expect(Object.keys(allPayments).length).toEqual(1);
    })
    afterEach(function() {
        billAmount.value = '';
        tipAmount.value = '';
        document.getElementById('summaryTable').children[1].children[0].children[0].innerText = null;
        document.getElementById('summaryTable').children[1].children[0].children[1].innerText = null;
        document.getElementById('summaryTable').children[1].children[0].children[2].innerText = null;
        document.getElementById('paymentTable').children[1].innerHTML = null;
        allPayments = {};
        paymentId = 0;

      });
    });
  