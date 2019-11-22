({
    createExpense: function(component, expense) {
        var action = component.get("c.saveExpense");
        action.setParams({
            "expense": expense
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                this.resetExpenseForm(component);
                var expenses = component.get("v.expenses");
                expenses.push(response.getReturnValue());
                component.set("v.expenses", expenses);
            }
        });
        $A.enqueueAction(action);
    },
    updateExpense: function(component, expense) {
        var action = component.get("c.saveExpense");
        action.setParams({
            "expense": expense
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                // do nothing!
            }
        });
        $A.enqueueAction(action);
    },
    resetExpenseForm : function(component)
    {
      component.set("v.newExpense.Name", "");
      component.set("v.newExpense.Amount__c", 0);
      component.set("v.newExpense.Date__c", "");
      component.set("v.newExpense.Client__c", "");
      component.set("v.newExpense.Reimbursed__c", "");
    }
})
