
const userType = "admin";
const action = "delete";
const resource = "invoice";

let message;

switch (userType) {

    case "admin":

        // Nested switch to check what action admin wants to perform
        switch (action) {

            // If admin wants to create something
            case "create":

                // Nested switch to check which resource admin wants to create
                switch (resource) {

                    // Admin creating invoice
                    case "invoice":
                        message = "Admin can create invoice";
                        break;

                    // Admin creating report
                    case "report":
                        message = "Admin can create report";
                        break;

                    // Admin creating user
                    case "user":
                        message = "Admin can create user";
                        break;

                    // If resource is not valid
                    default:
                        message = "Invalid resource";
                }
                break;

            // If admin wants to update something
            case "update":

                // Check which resource admin wants to update
                switch (resource) {

                    // Admin updating invoice
                    case "invoice":
                        message = "Admin can update invoice";
                        break;

                    // Admin updating report
                    case "report":
                        message = "Admin can update report";
                        break;

                    // Admin updating user
                    case "user":
                        message = "Admin can update user";
                        break;

                    // Invalid resource provided
                    default:
                        message = "Invalid resource";
                }
                break;

            // If admin wants to delete something
            case "delete":

                // Check which resource admin wants to delete
                switch (resource) {

                    // Admin deleting invoice
                    case "invoice":
                        message = "Admin can delete invoice";
                        break;

                    // Admin deleting report
                    case "report":
                        message = "Admin can delete report";
                        break;

                    // Admin deleting user
                    case "user":
                        message = "Admin can delete user";
                        break;

                    // Invalid resource provided
                    default:
                        message = "Invalid resource";
                }
                break;

            // If action is not create/update/delete
            default:
                message = "Invalid action";
        }
        break;

    // Case when user is a Manager
    case "manager":

        // Nested switch to check manager's action
        switch (action) {

            // Manager can create or update
            case "create":
            case "update":

                // Check which resource manager is acting on
                switch (resource) {

                    // Manager can work with invoice or report
                    case "invoice":
                    case "report":
                        message = "Manager can create/update invoice or report";
                        break;

                    // Any other resource is restricted
                    default:
                        message = "Manager has limited access";
                }
                break;

            // Manager is not allowed to delete
            case "delete":
                message = "Manager cannot delete resources";
                break;

            // Invalid action provided
            default:
                message = "Invalid action";
        }
        break;

    // Case when user is a normal User
    case "user":

        // Nested switch to check user's action
        switch (action) {

            // User can only create requests
            case "create":
                message = "User can create request only";
                break;

            // Any other action is restricted
            default:
                message = "User has read-only access";
        }
        break;

    // If userType is not admin/manager/user
    default:
        message = "Invalid user type";
}

// Prints the final permission message to the console
console.log(message);
