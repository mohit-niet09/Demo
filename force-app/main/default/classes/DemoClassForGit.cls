public with sharing class DemoClassForGit {
    public static void fetchdata(List<id> idsList){
        List<Account> accList = [Select Id, Name From Account Where id IN :idsList];
        for(Account acc: accList){
            acc.Rating = 'Hot';
            acc.Description = 'Updated description';
        }
        if(!accList.isEmpty()){
            update accList;
        }
    }
}