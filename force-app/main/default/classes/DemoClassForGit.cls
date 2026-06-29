public with sharing class DemoClassForGit {
    public static List<Account> fetchdata(List<id> idsList){
        return [Select Id, Name From Account Where id IN :idsList];
    }
}