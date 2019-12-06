import { Evaluation, IBook } from '@/boundary/bookApplicationService/InOutType'
import { Vue } from 'vue-property-decorator'
export default class BookList extends Vue {
    public books: IBook[]
    public seeMore: () => void
    public toStar(evaluation: Evaluation | null): boolean[]
    public onScroll(e: any): void
}
