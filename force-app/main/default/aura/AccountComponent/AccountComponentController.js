({
    loadAccounts: function (component, event, helper) {
        let action = component.get("c.getAccounts");
        action.setCallback(this, function (response) {
            console.log("Response received: ", response);
            let state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.accounts", response.getReturnValue());
            } else {
                console.error("Failed to load accounts: " + response.getError());
            }
        });
        $A.enqueueAction(action);
    }
})