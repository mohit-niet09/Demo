public with sharing class AccountController {
    @AuraEnabled
    public static List<Account> getAccounts(){
        return [Select Id, Name, Industry, Type from Account];
    }
}