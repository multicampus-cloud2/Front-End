import RightArrow from 'img/rightarrow.png';
import LeftArrow from 'img/leftarrow.png';


// 가격 콤마 찍어주는 함수
export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const selectBrandOptions = [
    { value: 'starbucks', label: '스타벅스' },
    { value: 'hollys', label: '할리스 커피' },
    { value: 'tomntoms', label: '탐앤탐스' },
    { value: 'ediya', label: '이디야 커피' },
    { value: 'coffeebean', label: '커피빈' },
    { value: 'twosome', label: '투썸플레이스' },
    { value: 'angelinus', label: '엔제리너스' },
    { value: 'paikdabang', label: '빽다방' }
];

export const items = [
    { rowIdx: 0, check: 0, name: '아메리카노' },
    { rowIdx: 1, check: 0, name: '에스프레소' },
    { rowIdx: 2, check: 0, name: '콜드브루' },
    { rowIdx: 3, check: 0, name: '카페라떼' },
    { rowIdx: 4, check: 0, name: '카푸치노' },
    { rowIdx: 5, check: 0, name: '카페모카' },
    { rowIdx: 6, check: 0, name: '마끼아또' },
    { rowIdx: 7, check: 0, name: '라떼' },
    { rowIdx: 8, check: 0, name: '블렌디드' },
    { rowIdx: 9, check: 0, name: '스무디' },
    { rowIdx: 10, check: 0, name: '에이드' },
    { rowIdx: 11, check: 0, name: '티' },
    { rowIdx: 12, check: 0, name: '기타' },
];

export const brandItems = [
    { name_eng: "starbucks", name_kor: "스타벅스", image: 0, check: 0 },
    { name_eng: "hollys", name_kor: "할리스", image: 1, check: 0 },
    { name_eng: "tomntoms", name_kor: "탐앤탐스", image: 2, check: 0 },
    { name_eng: "ediya", name_kor: "이디야", image: 3, check: 0 },
    { name_eng: "coffeebean", name_kor: "커피빈", image: 4, check: 0 },
    { name_eng: "twosome", name_kor: "투썸플레이스", image: 5, check: 0 },
    { name_eng: "angelinus", name_kor: "엔제리너스", image: 6, check: 0 },
    { name_eng: "paikdabang", name_kor: "빽다방", image: 7, check: 0 },
]

export function NextArrow(props) {
    const { onClick, className } = props;
    return (
        <img src={RightArrow} alt="" onClick={onClick} className={className} />
    );
}

export function PrevArrow(props) {
    const { onClick, className } = props;
    return (
        <img src={LeftArrow} alt="" onClick={onClick} className={className} />
    );
}