describe("Servers test (with setup and tear-down)", function() {
  
  
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });
  it('should update servertable on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    expect(serverTbody.children[0].children[0].innerHTML).toEqual('Alice')
    expect(serverTbody.children[0].children[1].innerHTML).toEqual('$0.00')

  });
  it("should create a delete buttom",function(){
    expect(document.querySelector("#server1 > td.delete")).toBe(document.querySelector("#server1 > td.delete"))
  })


  afterEach(function() {
    allServers= {};
    serverId = null;
    serverTbody.innerHTML = null;

  });
});
