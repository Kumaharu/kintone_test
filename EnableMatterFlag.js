
(function() {
    "use strict";
    var event1 = ['app.record.edit.show'];
    var events2 = ['app.record.edit.submit']
    var befor_record; //gobalで定義
    kintone.events.on(event1, function(event) {
        befor_record = event.record;
    });
    kintone.events.on(events2, function(event) {
        var record = event.record;
        if(typeof record.CaseManager.value !== "undefined" && 
        record.CaseManager.value !== befor_record.CaseManager.value 
        && record.MatterFlag.value.length==0){
            record.MatterFlag.value.push("案件を追加して下さい");
            return event;
        }
    });
})();
