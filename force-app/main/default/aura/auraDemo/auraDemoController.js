({
    addNumbers : function(component, event, helper) {
        var firstNum = component.get("v.firstNum");
        var secondNum = component.get("v.secondNum");
        var result = parseInt(firstNum) + parseInt(secondNum);
        component.set("v.result", result);
        
    },
    doInit : function(component, event, helper) {
        component.set("v.firstNum", 0);
        component.set("v.secondNum", 0);
        component.set("v.result", 0);
    },
    render: function(component, event, helper) {
       alert('render method called');
    }
})