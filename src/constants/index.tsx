import about from '../assets/img/profile.jpg';

export const headerNav = [
    {
        title: 'profile',
        url: '#profile',
    },
    {
        title: 'intro',
        url: '#intro',
    },
    {
        title: 'career',
        url: '#career',
    },
    {
        title: 'contact',
        url: '#contact',
    },
];

export const profileText = {
    title: 'frontend developer',
    desc: ['안녕하세요', 'react native 개발자', '고재원입니다.'],
    img: about,
};

export const introText = [
    {
        title: '몰입하며 개발하는 개발자입니다.',
        desc: '개발에 재미를 느끼지 못하면 몰입할 수 없습니다. 재미를 느낄 수 있는 원동력은 개발하면서 사용자에 대해 생각할 수 있고, 개발하면서 만들어지는 과정을 직접 경험할 수 있기 때문입니다.',
    },
    {
        title: '사용자 경험을 향상 시키기 위해 개발을 진행하면서 고민을 하고, 공유를 합니다.',
        desc: '성능 최적화를 통해서 부드러운 화면 전환을 제공하고, 사용자에게 간편한 네비게이션을 제공하기 위해 고민합니다. 애자일 프로세스를 통해서 피드백을 적극적으로 수용하고 업데이트를 합니다.',
    },
    {
        title: '자기주도적으로 개발을 진행합니다.',
        desc: '개인이 성장하기 위해서는 회사와 동료에 의해서 성장할 수도 있지만, 결국에는 스스로 배우며 적용하는 노력이 성장할 수 있다 생각합니다. 그러기 위해서 주도적으로 합니다. ',
    },
];

export const careerText = [
    {
        text: ['헬린캠프', '트레이너와 회원을 위한 PT관리 스타트업', '프론트엔드 개발자', '2022.08 ~ 2023.08'],
        career: [
            '전반적인 프론트엔드 MVP를 개발했습니다.',
            '주간 / 월간 캘린더에 필요한 일정 추가, 수정, 삭제 구현',
            '로그인을 위한 카카오와 구글을 적용했습니다.',
            '딥링크를 활용하여 공유기능 및 회원과 트레이너와의 일정 공유를 구현했습니다.',
            '파이어베이스 애널리틱스를 적용하여 이벤트 추적 / 사용자 수 및 활동 지표 / 리텐션 분석을 했습니다.',
            'codepush를 적용하여 에러 및 안정성을 향상 / 디자인 수정 및 개선을 진행했습니다.',
        ],
    },
    {
        text: ['시나몬', '취향기반 및 실시간 놀거리 추천 서비스', '프론트엔드 개발자', '2021.10 ~ 2022.06'],
        career: [
            '전반적인 프론트엔드 MVP를 개발했습니다.',
            '장소에 대한 데이터들을 필터와 정렬할 수 있는 기능을 구현했습니다.',
            '로그인을 위한 카카오,구글,애플을 적용했습니다.',
            '관심가는 장소에대한 데이터를 즐겨찾기할 수 있도록 만들었습니다.',
            '위도와 경도를 추적하여 알림을 보내고, 특정 화면으로 이동할 수 있는 기능을 구현했습니다.',
            'react native animated를 활용하여 간단한 홈 화면 애니메이션을 적용했습니다. ',
        ],
    },
];

export const portText = [
    {
        num: '01',
        title: '포트폴리오',
        desc: '포트폴리오',
        img: '포트폴리오',
        code: '포트폴리오',
        name: '포트폴리오',
    },
];

export const contactText = [
    {
        link: 'https://open.kakao.com/o/s6tX1xWf',
        title: 'KAKAO : lets_kojae',
    },
    {
        link: 'mailto:dev.kojae@gmail.com',
        title: 'mail : dev.kojae@gmail.com',
    },
];

export const footerText = [
    {
        title: 'github',
        desc: '깃허브로 이동하기.',
        link: 'https://github.com/Jae1ko',
    },
];
