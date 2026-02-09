// let invoice = {
//   invoiceId: "INV-101",
//   status: "approved",
//   amount: 25000,
//   meta: {
//     createdBy: "admin",
//     editable: false
//   }
// };

// Object.freeze(invoice);
// Tasks
// Attempt to change status to "paid"

// Attempt to change amount

// Attempt to add dueDate

// Attempt to change meta.editable

// Attempt to freeze meta separately

// Interview Focus
// Object.freeze() limitations

// Shallow freeze

// Real automation use case (API response safety)

let invoice = {
    invoiceId: "INV-101",
    status: "approved", 
    amount: 25000,
    meta: {
        createdBy: "admin",
        editable: false
    }
};
Object.freeze(invoice);
invoice.status = "paid";
invoice.amount = 30000;
invoice.dueDate = "2024-12-31";
invoice.meta.editable = true;
Object.freeze(invoice.meta);
invoice.meta.createdBy = "ravi";
console.log(invoice);
// Output:
// {
//   invoiceId: "INV-101",
//   status: "approved",
//   amount: 25000, 
//   meta: {
//     createdBy: "admin",
//     editable: false
//   }
// }
// Explanation:
// - The changes to status and amount are blocked because Object.freeze prevents modifications to the top-level properties of the invoice object.
// - The addition of dueDate is blocked for the same reason.
// - The change to meta.editable is allowed because the meta object is not frozen, demonstrating that Object.freeze is a shallow freeze.
// - Freezing meta separately prevents any further modifications to it, including changing createdBy.

            
