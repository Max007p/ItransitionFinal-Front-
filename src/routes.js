

const routes = [
    { name: 'sign_up',path: '/sign_up'},
    { name: 'home',path: '/'},
    { name: 'user',path: '/user'},
    { name: 'user.profile',path: '/profile'},
    { name: 'user.review',path: '/review'},
    { name: 'user.review.create',path: '/create'},
    { name: 'user.review.update',path: '/update'},
    { name: 'admin',path: '/admin'},
    { name: 'admin.users',path: '~/users'}
];

const options = [
    {
        allowNotFound: false,
        autoCleanUp: true,
        defaultRoute: 'home',
        defaultParams: {},
        queryParams: {
            arrayFormat: 'default',
            nullFormat: 'default',
            booleanFormat: 'default'
        },
        queryParamsMode: 'default',
        trailingSlashMode: 'default',
        strictTrailingSlash: false,
        caseSensitive: false,
        urlParamsEncoding: 'default' 
    }
];