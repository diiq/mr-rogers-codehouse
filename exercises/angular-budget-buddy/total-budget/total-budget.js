angular.module("budgetBuddy").component("totalBudget", {
	templateUrl: "total-budget/total-budget.html",	

	controller: ['BudgetService', function(BudgetService){
		this.setBudget = function() {
			this.total = parseFloat(this.total);
			BudgetService.setTotal(this.total);
		}
		
	}]

});
