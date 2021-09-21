/*
Define a function that can answer the role of a user.
A user can be on the following roles
admin-with all access
subadmin-with access to create/delete courses
testprep-with access to create/delete tests
user-consume all content
other-trial user.

Input:getUserRole(name,role)
*/

function getUserRole(name,role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access `;
            break;
        case "admin":
            return `${name} is sub-admin with access to create/delete courses `;
            break;
        case "testprep":
            return `${name} is testprep with access to create/delete tests `;
            break;   
        case "user":
            return `${name} is user to consume content`;
            break;     
        default:
            return `${name} is a trial user`;
            break;
    }
}