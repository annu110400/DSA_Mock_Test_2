class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function printList(head) {
    let current = head;
    let result = '';
    while (current !== null) {
        result += current.val + ' ';
        current = current.next;
    }
    console.log(result);
}

function addTwoNumbers(list1, list2) {
    let head = null;
    let tail = null;
    let carry = 0;

    while (list1 !== null || list2 !== null || carry !== 0) {
        let sum = carry;

        if (list1 !== null) {
            sum += list1.val;
            list1 = list1.next;
        }

        if (list2 !== null) {
            sum += list2.val;
            list2 = list2.next;
        }

        const digit = sum % 10;
        carry = Math.floor(sum / 10);

        const newNode = new ListNode(digit);

        if (head === null) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            tail = newNode;
        }
    }

    return head;
}

const list1 = new ListNode(2);
list1.next = new ListNode(4);
list1.next.next = new ListNode(3);
console.log("First List:");
printList(list1);

const list2 = new ListNode(5);
list2.next = new ListNode(6);
list2.next.next = new ListNode(4);
console.log("Second List:");
printList(list2);

const sumList = addTwoNumbers(list1, list2);
console.log("Sum of two Lists:");
printList(sumList);