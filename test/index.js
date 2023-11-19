function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }
var reverseBookList = function(head) {
    const arr = []
    while(head !== null) {
        arr.push(head.val)
        head = head.next
    }
    let length = arr.length
    const res = []
    while(length > 0) {
        res.push(arr.pop())
        length--
    }
    return res
};

const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)

console.log(reverseBookList(head))