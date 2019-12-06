import { Evaluation, IBook } from '@/boundary/bookApplicationService/InOutType';
import { Vue } from 'vue-property-decorator';
export default class BookList extends Vue {
    books: IBook[];
    seeMore: () => void;
    toStar(evaluation: Evaluation | null): boolean[];
    onScroll(e: any): void;
}
