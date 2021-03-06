import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Films1 from "../assets/static/images/films-new/1.jpg";
import Films2 from "../assets/static/images/films-new/2.jpg";
import Films3 from "../assets/static/images/films-new/3.jpg";
import Films4 from "../assets/static/images/films-new/4.jpg";

import reducers from './reducers';

function getDevTools() {
    return process.env.NODE_ENV !== 'production' && (typeof window === 'object') && window.devToolsExtension
        ? window.devToolsExtension()
        : f => f;
}

export function configureStore(initialState = {
    currentUser: null,
    messageError: null,
    searchStr: null,
    users: [
        {
            id: 0,
            login: "kos",
            password: "12345",
            name: "Константин К."
        },
        {
            id: 1,
            login: "alex",
            password: "12345",
            name: "Алексей В."
        }
    ],
    films: [
        {
            id: 0,
            title: 'Мульт в кино',
            country: 'США, Германия',
            genre: 'Комедия',
            genreId: 0,
            img: Films1,
            description: 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.',
        },
        {
            id: 1,
            title: 'Новый Бэтмен',
            country: 'США, Германия',
            genre: 'Фантастика',
            genreId: 2,
            img: Films2,
            description: 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.',
        },
        {
            id: 2,
            title: 'Однажды в... Голливуде',
            country: 'США, Германия',
            genre: 'Комедия',
            genreId: 1,
            img: Films3,
            description: 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.',
        },
        {
            id: 3,
            title: 'Стриптизёрши',
            country: 'США, Германия',
            genre: 'Комедия',
            genreId: 4,
            img: Films4,
            description: 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.',
        }
    ],
    comments: [
        {
            id: 0,
            filmId: 0,
            userId: 0,
            text: 'По моему ни на что не претендующему мнению, если человеку нужна особая причина, чтобы посмотреть Тарантино, то тут одно из двух: либо совсем уж вкусы разнятся, либо кинематограф, как явление человеку безразличен. Во всех остальных случаях имя режиссера говорит само за себя — надо смотреть.'
        },
        {
            id: 1,
            filmId: 1,
            userId: 1,
            text: 'Мой комментарий о сюжете что-то кроме завязки категорически бессмысленно. Это фильм Тарантино — его надо смотреть самому.'
        },
        {
            id: 2,
            filmId: 1,
            userId: 1,
            text: 'Главный эмоциональный удар лента наносит в самом конце. Когда фильм после мастерского нагнетания сбрасывает оковы и пускается во все тяжкие. Финальные сцены являют собой нечто фантастическое. Они веселят и напрягают одновременно. Это действительно шедевральный отрывок, который будут помнить, но он ничто по сравнению с самым последним диалогом, от которого становится очень хорошо, но в то же время бесконечно грустно.'
        },
        {
            id: 3,
            filmId: 2,
            userId: 0,
            text: 'По моему ни на что не претендующему мнению, если человеку нужна особая причина, чтобы посмотреть Тарантино, то тут одно из двух: либо совсем уж вкусы разнятся, либо кинематограф, как явление человеку безразличен. Во всех остальных случаях имя режиссера говорит само за себя — надо смотреть.'
        },
        {
            id: 4,
            filmId: 2,
            userId: 1,
            text: 'Мой комментарий о сюжете что-то кроме завязки категорически бессмысленно. Это фильм Тарантино — его надо смотреть самому.'
        },
        {
            id: 5,
            filmId: 2,
            userId: 1,
            text: 'Главный эмоциональный удар лента наносит в самом конце. Когда фильм после мастерского нагнетания сбрасывает оковы и пускается во все тяжкие. Финальные сцены являют собой нечто фантастическое. Они веселят и напрягают одновременно. Это действительно шедевральный отрывок, который будут помнить, но он ничто по сравнению с самым последним диалогом, от которого становится очень хорошо, но в то же время бесконечно грустно.'
        }
    ],
    filmsGenre: [
        {
            id: 0,
            title: 'Комедии',
            smile: '😁',
            style: 'comedy'
        },
        {
            id: 1,
            title: 'Драмы',
            smile: '😭',
            style: 'dramas'
        },
        {
            id: 2,
            title: 'Фантастика',
            smile: '👽',
            style: 'fantastic'
        },
        {
            id: 3,
            title: 'Ужасы',
            smile: '👻',
            style: 'horrors'
        },
        {
            id: 4,
            title: 'Триллеры',
            smile: '🤠',
            style: 'thrillers'
        }
    ],
    channels: [
        {
            name: 'Первый канал',
            nameIco: '1st',
            widthIco: '50px',
            heigthIco: '64px',
            teleprogram: [
                {
                    title: 'Новости (с субтитрами)',
                    time: '13:00'
                },
                {
                    title: 'Давай поженимся',
                    time: '14:00'
                },
                {
                    title: 'Другие новости',
                    time: '15:00'
                }
            ]
        },
        {
            name: '2x2',
            nameIco: '2x2',
            widthIco: '114px',
            heigthIco: '49px',
            teleprogram: [
                {
                    title: 'МУЛЬТ ТВ. Сезон 4, 7 серия',
                    time: '13:00'
                },
                {
                    title: 'ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия',
                    time: '14:00'
                },
                {
                    title: 'БУРДАШЕВ. Сезон 1, 20 серия',
                    time: '15:00'
                }
            ]
        },
        {
            name: 'РБК',
            nameIco: 'rbc',
            widthIco: '55px',
            heigthIco: '54px',
            teleprogram: [
                {
                    title: 'ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС',
                    time: '13:00'
                },
                {
                    title: 'ДЕНЬ. Главные темы',
                    time: '14:00'
                },
                {
                    title: 'Главные новости',
                    time: '15:00'
                }
            ]
        },
        {
            name: 'AMEDIA PREMIUM',
            nameIco: 'amedia',
            widthIco: '64px',
            heigthIco: '64px',
            teleprogram: [
                {
                    title: 'Клиент всегда мёртв',
                    time: '13:00'
                },
                {
                    title: 'Голодные игры: Сойка-пересмешница. Часть I',
                    time: '14:00'
                },
                {
                    title: 'Секс в большом городе',
                    time: '15:00'
                }
            ]
        },
        {
            name: 'Первый канал',
            nameIco: '1st',
            widthIco: '50px',
            heigthIco: '64px',
            teleprogram: [
                {
                    title: 'Новости (с субтитрами)',
                    time: '13:00'
                },
                {
                    title: 'Давай поженимся',
                    time: '14:00'
                },
                {
                    title: 'Другие новости',
                    time: '15:00'
                }
            ]
        },
        {
            name: '2x2',
            nameIco: '2x2',
            widthIco: '114px',
            heigthIco: '49px',
            teleprogram: [
                {
                    title: 'МУЛЬТ ТВ. Сезон 4, 7 серия',
                    time: '13:00'
                },
                {
                    title: 'ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия',
                    time: '14:00'
                },
                {
                    title: 'БУРДАШЕВ. Сезон 1, 20 серия',
                    time: '15:00'
                }
            ]
        },
        {
            name: 'РБК',
            nameIco: 'rbc',
            widthIco: '55px',
            heigthIco: '54px',
            teleprogram: [
                {
                    title: 'ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС',
                    time: '13:00'
                },
                {
                    title: 'ДЕНЬ. Главные темы',
                    time: '14:00'
                },
                {
                    title: 'Главные новости',
                    time: '15:00'
                }
            ]
        },
        {
            name: 'AMEDIA PREMIUM',
            nameIco: 'amedia',
            widthIco: '64px',
            heigthIco: '64px',
            teleprogram: [
                {
                    title: 'Клиент всегда мёртв',
                    time: '13:00'
                },
                {
                    title: 'Голодные игры: Сойка-пересмешница. Часть I',
                    time: '14:00'
                },
                {
                    title: 'Секс в большом городе',
                    time: '15:00'
                }
            ]
        }
    ]
}) {

    const loadState = () => {
        try {
            const serialisedState = window.localStorage.getItem('app_state');
            if (!serialisedState) return undefined;
            return JSON.parse(serialisedState);
        } catch (err) {
            return undefined;
        }
    };
    const oldState = loadState();
    const currentState = oldState ? oldState : initialState;

    let middlewares = [thunk];

    let enhanser = compose(
        applyMiddleware(...middlewares),
        getDevTools()
    );

    return createStore(
        reducers,
        currentState,
        enhanser
    );
}