var app = new Vue({
    data: {
        selected: '',
        menu: [
            {
                title: '首页',
                subMenu: []
            },
            {
                title: '厦大概览',
                subMenu: [
                    {title: '学校简介'},
                    {title: '校主生平'},
                    {title: '现任领导'},
                    {title: '历任领导'},
                    {title: '组织机构'},
                    {title: '学校标识'},
                    {title: '学院院徽'},
                    {title: '网上展馆'},
                    {title: '校园地图'},
                    {title: '校园风光'},
                ]
            },
            {
                title: '学部院系',
                subMenu: [
                    {title: '人文与艺术学部'},
                    {title: '社会科学学部'},
                    {title: '自然科学学部'},
                    {title: '工程技术学部'},
                    {title: '医学与生命科学学部'},
                    {title: '地球科学与技术学部'},
                ]
            },
            {
                title: '人才培养',
                subMenu: [
                    {title: '学科'},
                    {title: '师资'},
                    {title: '本科生教育'},
                    {title: '研究生教育'},
                    {title: '继续教育与网络教育'},
                    {title: '国际学生教育'},
                    {title: '管理'},
                ]
            },
            {
                title: '学术科研',
                subMenu: [
                    {title: '自然科学与技术'},
                    {title: '人文与社会科学'},
                    {title: '研究机构'},
                    {title: '博士后科研流动站'},
                    {title: '厦门大学学报（自然版）'},
                    {title: '厦门大学学报（哲社版）'},
                ]
            },
            {
                title: '社会服务',
                subMenu: [
                    {title: '成果产业化'},
                    {title: '大学科技园'},
                    {title: '战略合作'},
                    {title: '后勤服务'},
                    {title: '会议服务'},
                    {title: '出版服务'},
                ]
            },
            {
                title: '大学文化',
                subMenu: [
                    {title: '团委'},
                    {title: '学生委员会'},
                    {title: '研究生会'},
                    {title: '社团联合会'},
                    {title: '校园活动'},
                ]
            },
            {
                title: '合作交流',
                subMenu: [
                    {title: '国际合作与交流'},
                    {title: '港澳台合作与交流'},
                    {title: '孔子学院'},
                    {title: '留学服务'},
                ]
            },
            {
                title: '招生就业',
                subMenu: [
                    {title: '招生'},
                    {title: '就业'},
                ]
            },
            {
                title: '人才招聘',
                subMenu: [
                    {title: '人才招聘网'},
                    {title: '博士后'},
                ]
            },
        ],
    },
    method(){

    }
})

app.$mount('#nav-menu')

/* const nav = document.querySelector('#nav');
let navChildren = '';
menu.forEach(
    item => {
        navChildren += `<li><a href="">${item.title}</a> <ul>`;
        item.subMenu.forEach(
            item =>{
                navChildren += `<li><a href="">${item.title}</a></li>`;
            }
        );
        navChildren += `</ul> </li>`;
    }
);
nav.innerHTML = navChildren;

var lis = nav.children;
for (var i = 1; i < lis.length; i++) {
    lis[i].onmouseover = function() {
        this.children[1].style.display = 'block';
    }
    lis[i].onmouseout = function() {
        this.children[1].style.display = 'none';
    }
} */