const swithButton = document.querySelectorAll('.swith-theme__button');
const swithThemeFooter = document.querySelector('#swithThemeFooter');
const swithThemeHeader = document.querySelector('#swithThemeHeader');
const formFooterBtn = document.querySelector('.footer__btn-inform');
const formFooter = document.querySelector('.footer__form');
const formfooterBox = document.querySelector('.footer__container-form')

const rootSection = document.querySelector('.root');
const nextSliderBtn = document.querySelector('#nextSliderBtn');
const previousSliderBtn = document.querySelector('#previousSliderBtn');
const bicyclesList = document.querySelector('.bicycles__type-list');
const bicyclesType = document.querySelectorAll('.bicycles__type-link');
const bicyclesSelect = document.querySelector('.bicycles__select');
const closeBtnHeader = document.querySelector('.header__close-btn');
const burgMenuBtn = document.querySelector('.header__burg-menu');
const popapMenu = document.querySelector('.header__container-menu');

const arrayTypeBicycles = [{
        name: 'Шоссе',
        discription: 'На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.',
        picture1: {
            src: './images/type-bike__roud.jpg',
            alt: 'Дорога Шоссе'
        },
        picture2: {
            src: './images/type-bike__roud1.jpg',
            alt: 'Дорога гравий'
        },
        icone: {
            src: './images/icon/icone-type-bike1.svg',
            alt: 'Дорога спуск'
        },
        bicycles: [{
                picrureSrc: './images/bike/bike1.jpg',
                picrureAlt: 'Велосипед-Чёрный',
                name: 'Cervelo Caledonia-5',
                link: 'https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN'
            },
            {
                picrureSrc: './images/bike/bike2.jpg',
                picrureAlt: 'Велосипед-фиолетовый',
                name: 'Cannondale Systemsix Himod',
                link: 'https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J'
            },
            {
                picrureSrc: './images/bike/bike3.jpg',
                picrureAlt: 'Велосипед-Синий',
                name: 'Trek Domane SL-7',
                link: 'https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF'
            }
        ]
    },
    {
        name: 'Грэвел',
        discription: 'Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.',
        picture1: {
            src: './images/type-bike__roud2.jpg',
            alt: 'Дорога гравий'
        },
        picture2: {
            src: './images/type-bike__roud3.jpg',
            alt: 'Дорога ТТ'
        },
        icone: {
            src: './images/icon/icone-type-bike2.svg',
            alt: 'Дорога Гравий'
        },
        bicycles: [{
                picrureSrc: './images/bike/bike4.jpg',
                picrureAlt: 'Велосипед-Белый',
                name: 'Cervelo Aspero GRX 810',
                link: 'https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE'
            },
            {
                picrureSrc: './images/bike/bike5.jpg',
                picrureAlt: 'Велосипед-синий',
                name: 'Cannondale Systemsix Himod',
                link: 'https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9'
            },
            {
                picrureSrc: './images/bike/bike6.jpg',
                picrureAlt: 'Велосипед-хаки',
                name: 'Cannondale Topstone Lefty 3',
                link: 'https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8'
            }
        ]
    },
    {
        name: 'ТТ',
        discription: 'ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.',
        picture1: {
            src: './images/type-bike__roud3.jpg',
            alt: 'Дорога ТТ'
        },
        picture2: {
            src: './images/type-bike__roud1.jpg',
            alt: 'Дорога Шоссе'
        },
        icone: {
            src: './images/icon/icone-type-bike3.svg',
            alt: 'Дорога прямая'
        },
        bicycles: [{
                picrureSrc: './images/bike/bike7.jpg',
                picrureAlt: 'Синий велосипед',
                name: 'Specialized S-Works Shiv',
                link: 'https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9 '
            },
            {
                picrureSrc: './images/bike/bike8.jpg',
                picrureAlt: 'Велосипед-серый',
                name: 'BMC Timemachine 01 ONE',
                link: 'https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835'
            },
            {
                picrureSrc: './images/bike/bike9.jpg',
                picrureAlt: 'Велосипед-чёрный',
                name: 'Cervelo P-Series',
                link: 'https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q'
            }
        ]
    },
];

function addTypeBike(dataArray, index) {
    const sectionTypeBike = document.querySelector('.type-bike');
    const title = sectionTypeBike.querySelector('.title');
    const subtitle = sectionTypeBike.querySelector('.subtitle');
    const typeBikePicture1 = sectionTypeBike.querySelector('#typeBikePicture1');
    const typeBikePicture2 = sectionTypeBike.querySelector('#typeBikePicture2');
    const typeBikeIcon = sectionTypeBike.querySelector('.type-bike__icon-pulse');
    title.textContent = dataArray[index].name;
    subtitle.textContent = dataArray[index].discription;
    typeBikePicture1.setAttribute('src', dataArray[index].picture1.src);
    typeBikePicture1.setAttribute('alt', dataArray[index].picture1.alt);
    typeBikePicture2.setAttribute('src', dataArray[index].picture2.src);
    typeBikePicture2.setAttribute('alt', dataArray[index].picture2.alt);
    typeBikeIcon.setAttribute('src', dataArray[index].icone.src);
    typeBikeIcon.setAttribute('alt', dataArray[index].icone.alt);

    return
}
burgMenuBtn.addEventListener('click', function() {
    popapMenu.classList.add('header__container-menu_active');
});
closeBtnHeader.addEventListener('click', function() {
    popapMenu.classList.remove('header__container-menu_active');
});



swithThemeHeader.addEventListener('click', function() {
    swithButton.forEach(element => {
        element.classList.toggle('swith-theme__button_active');
    });
    rootSection.classList.toggle('root__theme_dark');
});
swithThemeFooter.addEventListener('click', function() {
    swithButton.forEach(element => {
        element.classList.toggle('swith-theme__button_active');
    });
    rootSection.classList.toggle('root__theme_dark');
});
formFooter.addEventListener('focus', function() {
    formFooterBtn.classList.add('footer__btn-inform_hiden');
});
formfooterBox.addEventListener('submit', function(event) {
    event.preventDefault();
    formFooter.value = 'Круто!';
    formFooterBtn.classList.remove('footer__btn-inform_hiden');
});



let namber = 0
addTypeBike(arrayTypeBicycles, namber);

nextSliderBtn.addEventListener('click', function() {
    if (namber < arrayTypeBicycles.length - 1) {
        namber++
        addTypeBike(arrayTypeBicycles, namber);
        /* //Изменение цвета стрелки при переключении
        if (namber == arrayTypeBicycles.length - 1) {
            nextSliderBtn.classList.remove('type-bike__button_active');
            previousSliderBtn.classList.add('type-bike__button_active');
        } else if (namber != 0) {
            previousSliderBtn.classList.add('type-bike__button_active');
        } else { nextSliderBtn.classList.add('type-bike__button_active') }*/
    };
    return
});
previousSliderBtn.addEventListener('click', function() {
    if (namber > 0) {
        nextSliderBtn.classList.add('type-bike__button_active');
        namber--
        /*
        if (namber == 0) {
            previousSliderBtn.classList.remove('type-bike__button_active');
        }*/
        addTypeBike(arrayTypeBicycles, namber);
        return
    } else if (namber == 1) {
        nextSliderBtn.classList.add('type-bike__button_active');
        previousSliderBtn.classList.remove('type-bike__button_active');
    } else if (namber > arrayTypeBicycles.length - 1) {
        nextSliderBtn.classList.add('type-bike__button_active');
    }
});

function choiceTypeBicycles(index) {
    bicyclesType.forEach((item) => {
        item.classList.remove('bicycles__type-link_active');
    })
    bicyclesType[index].classList.add('bicycles__type-link_active');
}

function addBike(dataArray, index) {
    const sectionBicyclesCards = document.querySelectorAll('.bicycles__card');
    sectionBicyclesCards.forEach((item, i) => {
        const picture = item.querySelector('.bicycles__card-picture');
        const text = item.querySelector('.bicycles__card-text');
        picture.setAttribute('src', dataArray[index].bicycles[i].picrureSrc);
        picture.setAttribute('alt', dataArray[index].bicycles[i].picrureAlt);
        text.setAttribute('href', dataArray[index].bicycles[i].link);
        text.textContent = (dataArray[index].bicycles[i].name);
        return
    });

}
addBike(arrayTypeBicycles, 0);
choiceTypeBicycles(0);
let indexbicyclesType = 0;

bicyclesSelect.addEventListener('change', function() {
    let indexType = bicyclesSelect.options.selectedIndex;
    addBike(arrayTypeBicycles, indexType);
    choiceTypeBicycles(indexType);
    indexbicyclesType = indexType;
    return indexbicyclesType
});


bicyclesType[0].addEventListener('click', function() {
    choiceTypeBicycles(0);
    addBike(arrayTypeBicycles, 0);
    bicyclesSelect.options.selectedIndex = 0;
});
bicyclesType[1].addEventListener('click', function() {
    choiceTypeBicycles(1);
    addBike(arrayTypeBicycles, 1);
    bicyclesSelect.options.selectedIndex = 1;
});
bicyclesType[2].addEventListener('click', function() {
    choiceTypeBicycles(2);
    addBike(arrayTypeBicycles, 2);
    bicyclesSelect.options.selectedIndex = 2;
});
document.addEventListener('DOMContentLoaded', function() {
    new Splide('.splide', {
        classes: {
            pagination: 'splide__pagination bicycles__dots-list',
            page: 'splide__pagination__page bicycles__dots-btn',
        },
        padding: {
            left: 0,
        },
        arrows: false,
        perPage: 3,
        breakpoints: {
            1024: {
                perPage: 1,
            },
        }
    }).mount();
});