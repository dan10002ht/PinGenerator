import prisma from '../config/prisma';

const {user: userTable, template: templateTable, component: componentTable, pin: pinTable} = prisma;

export {userTable, templateTable, componentTable, pinTable};
