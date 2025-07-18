# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def merge2Lists(self,l1,l2):
        dummy=ListNode()
        current=dummy
        while l1 and l2:
            if l1.val<=l2.val:
                current.next=l1
                l1=l1.next
            else:
                current.next=l2
                l2=l2.next
            current=current.next
        if l1:
            current.next=l1
        else:
            current.next=l2
        return dummy.next


    def mergeKLists(self, lists):
        if not lists or len(lists) ==0:
            return None
        while len(lists)>1:
            mergedList=[]
            for i in range(0,len(lists),2):
                l1=lists[i]
                l2=lists[i+1] if i+1<len(lists) else None
                mergedList.append(self.merge2Lists(l1,l2))
            lists=mergedList
        return lists[0]



        